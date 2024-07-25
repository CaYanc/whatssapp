import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth/cordova";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const SingUp = () => {
  const registrarse = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [nombre, setNombre] = useState()

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2 w-[400px] items-center p-3 rounded-lg border border-black">
        <div className="flex flex-col gap-2 w-[400px] items-center p-3 rounded-lg">
          <input  onChange={(e)=> setNombre(e.target.value)} type="text" placeholder="nombre"/>
          <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="cooreo" id="correo" />
          <input  onChange={(e)=> setPassword(e.target.value)} type="text" placeholder="contraseña" id="contraseña" />
          <button onClick={()=>registrarse(email, password)} className="bg-blue-500 rounded-md py-1 px-4 ">SingUp</button>
        </div>

        <p className="text-[10px]">
          ¿Tines cuneta?
          <Link to={"/login"} className="font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SingUp;
