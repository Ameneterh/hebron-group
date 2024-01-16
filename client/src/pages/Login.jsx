import { Button, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logInStart,
  logInSuccess,
  logInFailure,
} from "../redux/user/userSlice";

export default function Login() {
  const [formData, setFormData] = useState([]);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(logInStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(logInFailure(data.message));
        return;
      }
      dispatch(logInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(logInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen p-2 sm:p-20">
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold w-full text-center mb-5">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>

          <Button className="uppercase mt-8" type="submit">
            {loading ? (
              <>
                <Spinner color="info" size="md" />
                <span className="pl-3">Loading ...</span>
              </>
            ) : (
              "login"
            )}
          </Button>
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
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
}
