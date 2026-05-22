import react, { useState } from "react";
import Listitems from "./Listitems";

const Accordian = ({ title, open, setOpen }) => {


    const showItemlist = () =>{
        setOpen();
    };
  return (
    <div className="my-1 shadow-md border-gray-200 px-4 py-2  w-64 ">
      <div className="flex justify-between ">
        <h1>{title}</h1>
        <button onClick={showItemlist} className="bg-black text-white px-2 rounded-md">show</button>
      </div>
      {
        open && <Listitems/>  
      }
      
    </div>
  );
};

export default Accordian;
