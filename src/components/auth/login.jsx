import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Input, Button } from "./authComponents";
import { authContext } from "../../context/authContext";

const SignIn = () => {
  const { logIn } = useContext(authContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async e => {
    e.preventDefault();
    if (email === "" || password === "") {
      // TODO: Add a modal also here
      console.log("error");
    } else {
      await logIn(email, password);
      navigate("/");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col items-center rounded-[2px] w-[300px] lg:w-[400px] h-[500px] bg-white shadow-2xl shadow-slate-900 mt-10 lg:ml-[750px]">
      <div className="flex flex-col items-center justify-center text-center mt-2">
        <h3 className="mt-3 font-bold text-xl">Sign In</h3>
      </div>
      {/* Form */}
      <div className="flex flex-row mt-4 justify-center">
        <div className="flex flex-col">
          <form className="" onSubmit={handleClick}>
            <div className="flex mb-3">
              <Input
                value={email}
                type="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className="w-[250px] lg:w-[350px] h-[50px] font-[400] rounded-[2px] border-0 border-b border-gray-200 focus:ring-0 outline-none p-1"
              />
            </div>
            <div className="flex mb-3">
              <Input
                value={password}
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                className="w-[250px] lg:w-[350px] h-[50px] font-[400] rounded-[2px] border-0 border-b border-gray-200 focus:ring-0 outline-none p-1"
              />
            </div>
            <div className="flex items-stretch">
              <Button
                type="submit"
                className="w-full mt-3 h-[40px] bg-black text-white hover:opacity-80 transition duration-100"
              >
                Log In
              </Button>
            </div>
          </form>
          <div className="flex items-center justify-center gap-2 mt-8">
            <p className="mt-[40px] w-full text-center mb-[50px] text-[1.2rem]">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/profile/signup")}
                className="underline cursor-pointer text-[#FACD66]"
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
