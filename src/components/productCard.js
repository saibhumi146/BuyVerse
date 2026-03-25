// named export
import { useState,useEffect } from "react";
import { productlist } from "../Utilities/constant";
import Product from "./Product";
import Skeleton from "./skeleton";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect( ()=>{
    fetchData();},[]);

  const fetchData = async() => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    
    setListOfProduct(resData);
    setFilterProduct(resData);
    
    
  }  
  
  //rendering the product card
  if(listOfProduct.length === 0){
    return <Skeleton/> 
  }


  return listOfProduct.length === 0 ? 
    <Skeleton/> : (
    <div>
      <div style={{ marginTop: "10px" }}>
        <input type ="text" onChange={(e)=>setSearchText(e.target.value)} value={searchText}/> 
        <button onClick={()=>{
          const filteredData = listOfProduct.filter((product)=>
          {
            return product.title.toLowerCase().includes(searchText.toLowerCase());
          });
          setFilterProduct(filteredData);
        }} >search</button>

      </div>
      
      <button
        onClick={() => {
          const filteredproduct = listOfProduct.filter((product) => product.rating.rate>= 4);
          setFilterProduct(filteredproduct);
        }}
        style={{ marginTop: "10px" }}>
        
        Top Rated Button
      </button>

      <div className="product-card">
        {filterProduct.map((product) => {
          return <Link key={product.id} to={`/product/${product.id}`}> <Product product={product} /></Link>;
        })}
      </div>
    </div>
  );
};
