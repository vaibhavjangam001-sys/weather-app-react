import React from "react";
import { ref, set } from "firebase/database";
import { db } from "./firebase";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Test = () => {
  const signUpUser = () => {
    createUserWithEmailAndPassword(auth, "abc@gmail.com", "abc@123").then((value)=> console.log(value));
  };
  return (
    <button onClick={signUpUser} className="p-4 border">
      signup
    </button>
  );
};

export default Test;
