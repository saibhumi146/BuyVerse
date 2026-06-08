import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Utilities/UserContext";
import { useSelector } from "react-redux";

const Navbar = () => {

  const[btnName, setBtnName] = useState("light");
  const cartItems = useSelector((store)=>store.cart.cartItems || []);

 
  
  const user = useContext(UserContext);
  
  // [] dependency array is empty so useEffect will run only once when the component is mounted -1st case
  // when no dependency array is provided then useEffect will run on every render -2nd case
  // when we provide a dependency in the array then useEffect will run only when that particular dependency changes -3rd case
  useEffect(()=>{
    console.log("useeffect called");
    console.log(user);
  },[btnName]);
 
  
  return (
    <div className="flex justify-between items-center p-4 shadow-md">
      <h1 className="font-bold text-2xl">AJIO</h1>
      <ul className="flex gap-4">
        <li> <Link to="/Memo">Memo</Link></li>
        <li> <Link to="/men">MEN</Link></li>
        <li> <Link to="/Women">WOMEN</Link></li>
          <li> <Link to="/About">ABOUT</Link></li>
        <li><Link to="/kid">KID</Link></li>
        <li>HOME & LIVING</li>
        <li>BEAUTY</li>
        <li><Link to="/grocery">GROCERY</Link></li>
        <li><Link to="/cart">Cart-{cartItems.length}</Link></li>
        <li>{user.name}</li>
        <li><Link to="/Login">Login</Link></li>
        <button  className="bg-purple-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        onClick={()=>{
          setBtnName("dark");
        }}>{btnName} </button>
      </ul>
      
    </div>
);
};
export default Navbar;//default export added