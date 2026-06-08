const Product = ({product}) => {
  
  const {image,title,price,rating} = product;
  return (
      <div className="border  h-full  w-full  flex flex-col border-gray-400 p-4">
        <img className="w-full h-48 object-contain" src={image} alt={title} />
        <h1 className="text-lg font-bold mt-2">{title}</h1>
        <p className="text-gray-600">{rating.rate} rating</p>
        <p className="text-xl font-bold">Rs.{price}</p>
        
      </div>
  );
};
export default Product;//default export added

export const HOF = (Product) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute -top-2 -left-2  bg-black text-white px-4 py-1 rounded-xl"> BestSeller</span>
         <Product {...props} />
      </div>
    );
  };
};
  
 