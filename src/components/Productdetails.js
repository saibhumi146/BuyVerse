import { useState,useEffect } from "react";
import Skeleton from "./skeleton";
import { useParams } from "react-router-dom"
import useGetSingleProduct from "../hook/useGetSingleProduct";

const Productdetails = () => {
      
    const{productId} = useParams();
    const singleProduct = useGetSingleProduct(productId);      

    

     if(singleProduct === null){
        return <Skeleton/>;
     }

     
    const {image,title,price,rating} = singleProduct;
    return singleProduct === null ? <Skeleton/>:(
    
            <div className="product">
        <img className="product_img" src={image}/>
        <h1>{title}</h1>
        <p>{rating.rate} rating</p>
        <p>Rs.{price}</p>
        <p>{singleProduct.description}</p>
        product details page
      </div>
        
    );
}
export default Productdetails;