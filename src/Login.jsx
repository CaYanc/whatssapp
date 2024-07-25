import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth/cordova";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "./firebase.js";
import Home from "./Home.jsx";
import firebase from "firebase/compat/app";

const Login = () => {
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const iniciarsecion = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("usuario invalido");
      });
  };
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2 w-[400px] items-center p-3 rounded-lg border border-black">
        <div className="flex flex-col gap-2 w-[400px] items-center p-3 rounded-lg">
          <input
            type="text"
            placeholder="correo"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={() => iniciarsecion(email, password)}
            className="bg-blue-500 rounded-md py-1 px-4 "
          >
            Login
          </button>
        </div>

        <p className="text-[10px]">
          ¿No tines cuneta?
          <Link to={"/singup"} className="font-bold">
            SingUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
