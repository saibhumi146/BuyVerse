import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Accordian from "./Accordian";

const Men = () => {
  // Product State
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Accordion State (Controlled Component)
  const [open, setOpen] = useState(null);

  // Filter States
  const [selectedShopFor, setSelectedShopFor] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);

  // Fetch Products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Apply Filters
  useEffect(() => {
    let filtered = products;

    // Price Filter
    if (selectedPrice.length > 0) {
      filtered = filtered.filter((product) => {
        const priceInINR = Math.floor(product.price * 85);
        return selectedPrice.some((range) => {
          if (range === "Under 1000") return priceInINR < 1000;
          if (range === "1000 - 3000") return priceInINR >= 1000 && priceInINR <= 3000;
          if (range === "3000 - 5000") return priceInINR >= 3000 && priceInINR <= 5000;
          if (range === "Above 5000") return priceInINR > 5000;
          return true;
        });
      });
    }

    setFilteredProducts(filtered);
  }, [products, selectedPrice, selectedShopFor, selectedBrand, selectedSize, selectedColor]);

  // Filter Options
  const shopForOptions = ["Casual", "Formal", "Sports", "Party"];
  const priceOptions = ["Under 1000", "1000 - 3000", "3000 - 5000", "Above 5000"];
  const brandOptions = ["Nike", "Adidas", "Puma", "Levi's"];
  const sizeOptions = ["S", "M", "L", "XL", "XXL"];
  const colorOptions = ["Black", "White", "Blue", "Red", "Green"];

  // Handle Filter Change
  const handleFilterChange = (filterArray, setFilterArray, value) => {
    if (filterArray.includes(value)) {
      setFilterArray(filterArray.filter((item) => item !== value));
    } else {
      setFilterArray([...filterArray, value]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Page Heading */}
      <h1 className="text-4xl font-bold text-center mb-10">
        Men's Collection
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* LEFT SIDE - FILTER SECTION */}
        <div>

          <h2 className="font-bold text-2xl mb-5">
            Filter Options
          </h2>

          <Accordian
            title="Shop For"
            open={open === 0}
            setOpen={() => setOpen(open === 0 ? null : 0)}
            filters={shopForOptions}
            selectedFilters={selectedShopFor}
            onFilterChange={(value) => handleFilterChange(selectedShopFor, setSelectedShopFor, value)}
          />

          <Accordian
            title="Price"
            open={open === 1}
            setOpen={() => setOpen(open === 1 ? null : 1)}
            filters={priceOptions}
            selectedFilters={selectedPrice}
            onFilterChange={(value) => handleFilterChange(selectedPrice, setSelectedPrice, value)}
          />

          <Accordian
            title="Brand"
            open={open === 2}
            setOpen={() => setOpen(open === 2 ? null : 2)}
            filters={brandOptions}
            selectedFilters={selectedBrand}
            onFilterChange={(value) => handleFilterChange(selectedBrand, setSelectedBrand, value)}
          />

          <Accordian
            title="Size"
            open={open === 3}
            setOpen={() => setOpen(open === 3 ? null : 3)}
            filters={sizeOptions}
            selectedFilters={selectedSize}
            onFilterChange={(value) => handleFilterChange(selectedSize, setSelectedSize, value)}
          />

          <Accordian
            title="Color"
            open={open === 4}
            setOpen={() => setOpen(open === 4 ? null : 4)}
            filters={colorOptions}
            selectedFilters={selectedColor}
            onFilterChange={(value) => handleFilterChange(selectedColor, setSelectedColor, value)}
          />

        </div>

        {/* RIGHT SIDE - PRODUCT SECTION */}
        <div className="lg:col-span-3">

          <p className="text-gray-600 mb-5">
            Showing {filteredProducts.length} of {products.length} products
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group"
              >

                {/* Product Image */}
                <div className="h-72 flex items-center justify-center bg-gray-100 p-6">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-56 object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Product Details */}
                <div className="p-5">

                  {/* Title */}
                  <h2 className="font-semibold text-lg line-clamp-2 text-gray-800">
                    {product.title}
                  </h2>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mt-3">

                    <span className="bg-gray-700 text-white text-sm px-2 py-1 rounded-full">
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
      </div>
    </div>
  );
};

export default Men;