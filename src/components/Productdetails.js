import { useState,useEffect } from "react";
import Skeleton from "./skeleton";
import { useParams } from "react-router-dom"

const Productdetails = () => {
    const [singleProduct, setSingleProduct] = useState(null);
    const {productId} = useParams();
    

    useEffect(()=>{
        fetchdata();
        
    },[]);

    const fetchdata = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const resData = await data.json();
        console.log(resData);
        setSingleProduct(resData);
    }
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