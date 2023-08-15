import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit = async (data: any) => {
    console.log(data);
    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });
    const message = await res.json();

    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 bg-white p-4 rounded-md "
      >
        <input
          className="rounded-md p-4 w-full border-2  border-Neutral-Grayish_Blue"
          type="text"
          id=""
          placeholder="First Name"
          {...register("firstName", {
            required: "First Name cannot be empty",
            maxLength: 20,
          })}
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
        <input
          className="rounded-md p-4 w-full border-2 border-Neutral-Grayish_Blue"
          type="text"
          id=""
          placeholder="Last Name"
          {...register("lastName", {
            required: "Last Name cannot be empty",
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
        <input
          className="rounded-md p-4 w-full border-2 border-Neutral-Grayish_Blue"
          type="text"
          id=""
          placeholder="Email Address"
          {...register("email", {
            required: "Looks like this is not an email",
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Looks like this is not an email",
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          className="rounded-md p-4 w-full border-2  border-Neutral-Grayish_Blue"
          type="text"
          id=""
          placeholder="Password"
          {...register("password", { required: "Password cannot be empty" })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button
          type="submit"
          className="rounded-md bg-green-500 shadow-md inset-y-0 right-0 left-0  transform translate-y-px text-white p-2 hover:bg-[rgba(119, 226, 179, 1)]"
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="text-gray-400">
          By clicking the button, you are agreeing to our
          <span className="text-red-500"> Terms and Services</span>
        </p>
      </form>
    </>
  );
}
