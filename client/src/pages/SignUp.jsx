import { Button, Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen p-2 sm:p-20">
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-3xl font-semibold w-full text-center mb-5">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="w-fit z-10 px-2 bg-white ml-2">
              Your Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="rounded-lg mt-[-10px]"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="w-fit z-10 px-2 bg-white ml-2">
              Your Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="rounded-lg mt-[-10px]"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="w-fit z-10 px-2 bg-white ml-2">Your Email</label>
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
            <label className="w-fit z-10 px-2 bg-white ml-2">
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

          <Button
            disabled={loading}
            className="uppercase mt-8 flex items-center"
            type="submit"
          >
            {loading ? (
              <>
                <Spinner color="info" size="md" />
                <span className="pl-3">Loading ...</span>
              </>
            ) : (
              "submit data"
            )}
          </Button>
        </form>
        <p className="mt-3">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-600 hover:underline underline-offset-4"
          >
            Sign in
          </Link>
        </p>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
}
