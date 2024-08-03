import { signOut } from "firebase/auth/cordova";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { MdOutlineCameraAlt, MdOutlinePeopleAlt } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { LuMessageSquarePlus } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { TiPin } from "react-icons/ti";

const Chats = ({ usuarioActivo }) => {
  const LogOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  const navigate = useNavigate();
  return (
    <div className="chat">
      <div className="menu1 w-[100%] sm:h-[9vh] h-[7vh]  bg-gray-100 flex justify-between items-center p-4">
        <figure className="bg-black w-[35px] h-[35px] rounded-full overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRazGKny1CSlH3XZGzdceONvBwSZqNVKklLnA&s"
            className="w-[100%] h-[100%] object-cover"
            alt=""
          />
        </figure>
        <div className="flex justify-between  w-[55%] text-[18px] text-gray-600">
          <div className="cursor-pointer">
            <MdOutlinePeopleAlt />
          </div>
          <div className="cursor-pointer">
            <HiStatusOnline />
          </div>
          <div className="cursor-pointer">
            <AiOutlineMessage />
          </div>
          <div className="cursor-pointer">
            <LuMessageSquarePlus />
          </div>
          <div className="cursor-pointer">
            <BsThreeDotsVertical />
          </div>
        </div>
        {/* <button
          onClick={() => LogOut()}
          className="bg-black text-white py-1 px-3 rounded-md"
        >
          LogOut
        </button> */}
        
      </div>
      <div className="menu2 w-[100%] h-[9vh] bg-white  p-4">
          <div className="text-[25px] text-[#2fdf2f] font-semibold">WhatsApp</div>
          <div className="flex items-center text-[25px]">
            <div className="">
              <MdOutlineCameraAlt />
            </div>
            <div className="text-[20px]">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      <div className="w-[100%] sm:h-[91vh] h-[93hv] bg-white">
        <div className="filtro_chats px-3 py-2">
          <div className="relative">
            <span className="absolute top-2 left-2 text-gray-700">
              <IoMdSearch />
            </span>
            <input
              type="text"
              placeholder="Buscar"
              className="outline-none w-[100%] rounded-full sm:rounded-md ps-14 px-3 py-[8px] sm:py-[4px]  text-[13px]  bg-gray-100"
            />
          </div>
        </div>
        <div className="filtro_mensajes_espera flex gap-2 items-center pb-1 px-3">
          <div className="bg-gray-100 w-fit py-1 px-3 rounded-full text-gray-500 text-[12px] hover:bg-gray-200">
            Todos
          </div>
          <div className="bg-gray-100 w-fit py-1 px-3 rounded-full text-gray-500 text-[12px] hover:bg-gray-200">
            No leidos
          </div>
          <div className="bg-gray-100 w-fit py-1 px-3 rounded-full text-gray-500 text-[12px] hover:bg-gray-200">
            Grupos
          </div>
        </div>
        <div className="content_chats border-t-[1px]">
          <div className=" w-[100%] h-[10vh] ps-4 pr-2 py-8 flex  items-center gap-3 border-b hover:bg-gray-100">
            <figure className="bg-black w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src="  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6y8xdMzqgoLdNgSKvSuEmZmYDKVqeY7Pqtw&s"
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </figure>
            <div className="flex w-[80%] justify-between items-center">
              <p className=" w-[60%] ">
                <p>Sara</p>
                <p className="flex items-center gap-1 text-[13px] text-gray-500">
                  <span>
                    <IoCheckmarkDoneSharp />
                  </span>
                  hola como estas
                </p>
              </p>
              <div className="text-gray-500 text-[15px] overflow-hidden">
                <span className="text-[11px]">Lunes</span>
                <div className="flex gap-1 relative right-[-15px] transition-all hover:right-0">
                  <TiPin />
                  <IoIosArrowDown className="" />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[100%] h-[10vh] ps-4 pr-2 py-8 flex  items-center gap-3 border-b hover:bg-gray-100">
            <figure className="bg-black w-[40px] h-[40px] rounded-full overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </figure>
            <div className="flex w-[80%] justify-between items-center">
              <p className=" w-[60%] ">
                <p>Camilo</p>
                <p className="flex items-center gap-1 text-[13px] text-gray-500">
                  <span>
                    <IoCheckmarkDoneSharp />
                  </span>
                  hola como estas
                </p>
              </p>
              <div className="text-gray-500 text-[15px] overflow-hidden">
                <span className="text-[11px]">Lunes</span>
                <div className="flex gap-1 relative right-[-15px] transition-all hover:right-0">
                  <TiPin />
                  <IoIosArrowDown className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
