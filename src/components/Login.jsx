import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignedIn, setisSignedIn] = useState(true);
  const [isMessage, setisMessage] = useState(null);
  const dispatch = useDispatch();

  const errorMessage = isMessage;
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const validationCheck = () => {
    const message = Validate(email.current.value, password.current.value);
    setisMessage(message);
    if (message) return;

    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/94060330?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uID: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setisMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setisMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const isSignInCheck = () => {
    setisSignedIn(!isSignedIn);
  };

  return (
    <div className="  ">
      <Header />

      <img
        className=" fixed  object-cover h-full  md:h-full md:w-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" fixed w-full p-10  mt-20   md:absolute top-32  left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-black bg-opacity-80 md:w-3/12  md:p-6 "
      >
        <h1 className=" font-bold text-3xl text-white mr-auto pb-2 pt-3">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-3 w-full bg-gray-700 text-gray-100 rounded-sm  "
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email"
          className="p-2 m-3 w-full bg-gray-700 text-gray-100 rounded-sm  "
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-3 w-full  bg-gray-700  text-gray-100 rounded-sm"
        />

        <p className="text-red-500 p-1 mr-auto">{errorMessage}</p>

        <button
          onClick={validationCheck}
          className="bg-red-600 rounded text-white   py-2 m-3 w-full pb-2"
        >
          {isSignedIn ? "Sign In" : "Sign Up"}
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
