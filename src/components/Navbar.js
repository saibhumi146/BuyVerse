import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  const[btnName, setBtnName] = useState("light");

  console.log("navbar rendered");
  
  // [] dependency array is empty so useEffect will run only once when the component is mounted -1st case
  // when no dependency array is provided then useEffect will run on every render -2nd case
  // when we provide a dependency in the array then useEffect will run only when that particular dependency changes -3rd case
  useEffect(()=>{
    console.log("useeffect called");
    
  },[btnName]);
 
  
  return (
    <div className="flex justify-between items-center p-4 shadow-md">
      <h1 className="font-bold text-2xl">AJIO</h1>
      <ul className="flex gap-4">
        <li> <Link to="/men">MEN</Link></li>
        <li> <Link to="/women">WOMEN</Link></li>
          <li> <Link to="/About">ABOUT</Link></li>
        <li><Link to="/kid">KID</Link></li>
        <li>HOME & LIVING</li>
        <li>BEAUTY</li>
        <li><Link to="/grocery">GROCERY</Link></li>
        <button  className="bg-purple-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{
          setBtnName("dark");
        }}>{btnName} </button>
      </ul>
      
    </div>
);
};
export default Navbar;//default export added