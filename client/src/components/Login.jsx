import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const Login = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button
        className="bg-secondary px-8 py-2 text-white font-semibold text-2xl rounded-sm"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
