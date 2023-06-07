import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
    navigate("/");
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/af1e69a5-3d5c-4433-95c4-0dbb0d8e4253/NL-en-20230306-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="signup"
        />
        <div className="bg-black/60 fixed top-0 left-0 w0full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px]  mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              {error && <p className="p-3 bg-red-300 my-2">{error}</p>}
              <form
                className="w-full flex flex-col py-4"
                onSubmit={handleSubmit}
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <button className="bg-amber-400 py-3 my-4 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-5">
                  <span className="text-gray-600">
                    Already have an account with Cineflix?
                  </span>{" "}
                  <Link to="/login">SIgn in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
