import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen p-2 sm:p-20">
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold w-full text-center mb-5">
          Login
        </h1>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label for="email" className="w-fit z-10 px-2 bg-white ml-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g. name@company.com"
              className="rounded-lg mt-[-10px]"
            />
          </div>
          <div className="flex flex-col">
            <label for="password" className="w-fit z-10 px-2 bg-white ml-2">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-lg mt-[-10px]"
            />
          </div>

          <Button className="uppercase mt-8">log in</Button>
        </form>
        <p className="mt-3">
          Do not have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 hover:underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
