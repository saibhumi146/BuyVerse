import { useState,useEffect } from "react";  //custom hook to fetch single product details

const useGetSingleProduct = (productId) =>{
    const [singleProduct,setSingleProduct] = useState(null);
     
    
    useEffect(()=>{
        fetchSingleProduct();
     },[]);
     
     
     
     const fetchSingleProduct = async ()=>{
        const data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const jsonData = await data.json();
        setSingleProduct(jsonData);
     }

     return singleProduct;
};
export default useGetSingleProduct;