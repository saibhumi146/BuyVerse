
/* const Men = () =>{
    return(
        <div>
            <h1>Men Section</h1>
        </div>  

    )
}
export default Men; */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Men's Collection
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
          >

            {/* Image */}
            <div className="h-72 flex items-center justify-center bg-gray-100 p-6">
              <img
                src={product.image}
                alt={product.title}
                className="h-56 object-contain group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Details */}
            <div className="p-5">

              <h2 className="font-semibold text-lg line-clamp-2 text-gray-800">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <span className="bg-gray-600 text-white text-sm px-2 py-1 rounded-full">
                   {product.rating.rate}
                </span>

                <span className="text-gray-500 text-sm">
                  ({product.rating.count})
                </span>
              </div>

              {/* Price */}
              <p className="text-2xl font-bold mt-4 text-gray-900">
                ₹{Math.floor(product.price * 85)}
              </p>

              {/* Button */}
              <button className="w-full mt-5 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                Add to Cart
              </button>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Men;