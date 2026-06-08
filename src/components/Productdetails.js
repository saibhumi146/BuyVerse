import { useState, useEffect } from "react";
import Skeleton from "./skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProduct from "../hook/useGetSingleProduct";
import {addItems} from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Productdetails = () => {
  const { productId } = useParams();
  const singleProduct = useGetSingleProduct(productId);
  const dispatch = useDispatch();
  if (singleProduct === null) {
    return <Skeleton />;
  }

  const { image, title, price, rating } = singleProduct;

  const handleCartItem = () => { 
    dispatch(addItems(singleProduct));

  };
  return singleProduct === null ? (
    <Skeleton />
  ) : (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="border border-gray-200 rounded-3xl shadow-xl bg-white p-8 flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-2xl p-6">
          <img
            className="h-80 object-contain hover:scale-105 transition duration-300"
            src={image}
            alt={title}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm">
              {rating.rate}
            </span>

            <span className="text-gray-500 text-sm">
              ({rating.count} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-4xl font-bold text-gray-900">₹{price}</p>

          {/* Description */}
          <p className="text-gray-700 font-semibold leading-7">
            {singleProduct.description}
          </p>
          <button onClick= {handleCartItem} className="bg-violet-500 text-white px-2 py-2 mt-auto rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Productdetails;
