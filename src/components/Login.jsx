import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setisSignedIn] = useState(true);

  const isSignInCheck = () => {
    setisSignedIn(!isSignedIn);
  };

  console.log(isSignedIn);

  return (
    <div className="relative">
      <Header />

      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <form className="absolute top-32  left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-black bg-opacity-80 w-3/12  p-6  mb-auto">
        <h1 className=" font-bold text-3xl text-white mr-auto pb-2 pt-3">
          {isSignedIn ? "Sign In" : "Sign out"}
        </h1>

        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-3 w-full bg-gray-700 text-gray-100 rounded-sm  "
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="p-2 m-3 w-full bg-gray-700 text-gray-100 rounded-sm  "
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 m-3 w-full  bg-gray-700  text-gray-100 rounded-sm"
        />
        <button className="bg-red-600 rounded text-white   py-2 m-3 w-full pb-2">
          {isSignedIn ? "Sign In" : "Sign Out"}
        </button>
        <p
          onClick={isSignInCheck}
          className=" text-white hover:cursor-pointer pb-3 mr-auto"
        >
          {isSignedIn
            ? "New to Netflix? Sign Up now"
            : "Already an user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
