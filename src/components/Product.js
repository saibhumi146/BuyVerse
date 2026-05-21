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