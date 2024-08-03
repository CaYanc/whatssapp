import React, { useEffect, useState } from "react";
import {
  Firestore,
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { PiMicrophoneFill } from "react-icons/pi";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { BsEmojiSmile, BsThreeDotsVertical } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { LuArrowLeft } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth/cordova";

const Mensajes = ({ usuarioActivo }) => {
  const [mensaje, setMensaje] = useState("");
  const [input, setInput] = useState();
  const [lista, setLista] = useState([]);

  const db = getFirestore();

  // funcion para renderizar datos

  useEffect(() => {
    const mostrarLi = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "mensajes"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLista(docs);
        if ((docs.id = usuarioActivo)) {
          <div>ola</div>;
        }
      } catch (error) {
        console.log(error);
      }
    };

    mostrarLi();
  }, [lista]);

  // funcion para guardar datos
  const contInput = async (e) => {
    e.preventDefault();
    console.log(mensaje);

    try {
      await addDoc(collection(db, "mensajes"), {
        texto: mensaje,
        fecha: new Date(),
      });
    } catch (error) {
      console.log(error);
    }

    setMensaje("");
  };

  return (
    <div className="mensajes">
      <div className="menu w-[100%] sm:h-[9vh] h-[7vh] border-s bg-gray-100 flex justify-between items-center p-4">
        <div className="flex text-[13px] items-center gap-3">
          <div className="text-[25px] md:hidden block">
            <LuArrowLeft />
          </div>
          <figure className="bg-black w-[35px] h-[35px] rounded-full overflow-hidden">
            <img
              src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y8xdMzqgoLdNgSKvSuEmZmYDKVqeY7Pqtw&s"
              className="w-[100%] h-[100%] object-cover"
              alt=""
            />
          </figure>
          <div>Sara</div>
        </div>
        <div className="flex items-center gap-4 text-gray-500 pr-1">
          <div className="text-gray-400 flex items-center gap-2 hover:bg-gray-300 py-1 px-2 rounded-full">
            <IoVideocam />
            <IoIosArrowDown className="text-[7px]" />
          </div>
          <div className="">
            <IoMdSearch className="text-[20px]" />
          </div>
          <div className="text-[13px]">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      <div className="fondo_mensajes w-[100%] sm:h-[82vh] h-[86vh]  overflow-hidde relative sm:p-14 p-5 flex flex-col ">
        {lista.map((list) => (
          <div className="w-[100%] flex justify-end my-0.5">
            <article className="bg-[#ccffccc2] w-fit py-1 px-2 rounded-md text-[13px] flex gap-2 pr-12 relative shadow-sm">
            {list.texto}
              <span className="text-[9px] text-gray-500 self-end absolute bottom-1 right-2">
                5:21 pm
              </span>
            </article>
          </div>
          // <div className="w-[100%] my-0.5">
          //   <article className="bg-white w-fit py-1 px-2 rounded-md text-[13px] flex gap-2 pr-12 relative shadow-sm">
          //     {list.texto}
          //     {list.id == usuarioActivo?' ola':' no'}
          //     <span className="text-[9px] text-gray-500 self-end absolute bottom-1 right-2">
          //       5:21 pm
          //     </span>
          //   </article>
          // </div>
        ))}
      </div>

      <form
        onSubmit={contInput}
        className="form_mensaje menu w-[100%] sm:h-[9vh] h-[7vh]   md:bg-gray-100 flex justify-between items-center py-4 px-4"
      >
        <div className="flex justify-around items-center w-[10%] text-gray-500">
          <div className="text-[20px]">
            <BsEmojiSmile />
          </div>
          <div className="text-[25px]">
            <GoPlus />
          </div>
        </div>
        <input
          type="text"
          placeholder="Escribe un mensajes"
          className="outline-none w-[85%] py-1.5 px-5 rounded-md text-[14px]"
          id="inputMensaje"
          value={mensaje}
          onChange={(e) => {
            setMensaje(e.target.value);
          }}
        />
        <input
          type="submit"
          value="enviar"
          className="bg-black text-white py-1 px-3 rounded-e-lg hidden"
        />
        <div className="text-gray-500">
          <div className="text-[20px]">
            <PiMicrophoneFill />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Mensajes;
