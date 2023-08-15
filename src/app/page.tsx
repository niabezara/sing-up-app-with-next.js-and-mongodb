"use client";
import SignUp from "../components/SignUp";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center  h-screen mt-6 mb-6 md:grid md:grid-cols-2 grid-row-1 md:gap-1 m-16">
      <div className="flex flex-col justify-center max-w-xl">
        <h1 className="text-3xl text-white">
          Learn to code by watching others
        </h1>
        <p className="mt-4 text-white">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="flex flex-col justify-center max-w-xl">
        <div className="bg-accent-Blue rounded-md p-2 text-white mb-4 mt-4">
          <p>
            Try it free 7 days <span>then $20/mo. thereafter</span>
          </p>
        </div>
        <SignUp />
      </div>
    </main>
  );
}
