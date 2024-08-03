import { onAuthStateChanged, signOut } from "firebase/auth/cordova";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import Chats from './Chats'
import Mensajes from './Mensajes'

const Home = ({}) => {
  // cerrar sesion xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  // const crerrarsetion = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };
  // cerrar sesion xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [useEmail, setUseEmail] = useState(null)
  const [useUid , setUseUid] = useState(null)

  const userActivo = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setUseUid(user.uid)
          setUseEmail(user.email)
        } else {
        }
      });
    };

    userActivo()

  const navigate = useNavigate();
  return (
    <div className="content_home flex overflow-hidden ">
      {/* <button
        onClick={() => crerrarsetion()}
        className="bg-blue-500 rounded-md py-1 px-4 "
      >
        SinOut
      </button> */}
      <div className="contenedor_chat h-[100vh] w-[30%] ">
        <Chats usuarioActivo={useEmail} />
      </div>
      <div className="contenedor_mensajes  h-[100vh] w-[70%] ">
        <Mensajes usuarioActivo={useUid} />
      </div>
    </div>
  );
};

export default Home;
