// named export
import { useState, useEffect,useContext } from "react";
import UserContext from "../Utilities/UserContext";
import { productlist } from "../Utilities/constant";
import Product, { HOF } from "./Product";
import Skeleton from "./skeleton";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const user = useContext(UserContext);

  console.log(user);
   useEffect(() => {
    fetchData();
   
  }, []); 

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();

    setListOfProduct(resData);
    setFilterProduct(resData);
  };

  const HOFComponent = HOF(Product);

  /* //rendering the product card
  if (listOfProduct.length === 0) {
    return <Skeleton />;
  } */

  return listOfProduct.length === 0 ? (
    <Skeleton />
  ) : (
    <div>
      <div className="mt-10 flex mx-5 space-x-10">
        <div>
          <input
            className="border border-gray-400 p-2"
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="bg-purple-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const filteredData = listOfProduct.filter((product) => {
                return product.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilterProduct(filteredData);
            }}
          >
            Search
          </button>

          <button
            className="bg-purple-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              const filteredproduct = listOfProduct.filter(
                (product) => product.rating.rate >= 4,
              );
              setFilterProduct(filteredproduct);
            }}
            style={{ marginTop: "10px" }}
          >
            Top Rated Button
          </button>
        </div>
        <input
          className="border border-black p-2"
          type="text" value={user.name} onChange={(e) => user.setUser(e.target.value)}
          placeholder="Filter by category..."
        />
      </div>

      <div className=" grid grid-cols-4 mx-auto gap-4 mt-10 ">
        {filterProduct.map((product) => {
          return (
            <Link key={product.id} to={`/product/${product.id}`}>
              {product.rating.rate >= 4 ? (
                <HOFComponent product={product} />
              ) : (
                <Product product={product} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
