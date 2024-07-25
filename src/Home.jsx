import { onAuthStateChanged, signOut } from "firebase/auth/cordova";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const Home = ({}) => {
  // cerrar sesion xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const crerrarsetion = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // cerrar sesion xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [useEmail, setUseEmail] = useState(null)

  const userActivo = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(user.email)
          setUseEmail(user.email)
        } else {
        }
      });
    };

    userActivo()

  const navigate = useNavigate();
  return (
    <div>
      Home
      <p>Hola, {useEmail}</p>
      <button
        onClick={() => crerrarsetion()}
        className="bg-blue-500 rounded-md py-1 px-4 "
      >
        SinOut
      </button>
    </div>
  );
};

export default Home;
