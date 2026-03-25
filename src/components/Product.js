const Product = ({product}) => {
  
  const {image,title,price,rating} = product;
  return (
      <div className="product">
        <img className="product" src={image}/>
        <h1>{title}</h1>
        <p>{rating.rate} rating</p>
        <p>Rs.{price}</p>
      </div>
  );
};
export default Product;//default export added