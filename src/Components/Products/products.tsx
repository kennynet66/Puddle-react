import { useState, useEffect } from "react";
import { product } from "./product.inteface";
// import Navbar from "../Navbar";
import "./products.css";

function Products() {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products/all-products");
        const data = await res.json();
        console.log(data.products);
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap gap-2 justify-center -m-4 items">
        {loading ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-slate-200 rounded-md card" key={product.productId}>
                  <a className="block relative h-48 rounded overflow-hidden" href={`product\\${product.productId}`}>
                    <img
                      alt={product.productName}
                      className="object-cover object-center w-full h-full block"
                      src={product.productImage}
                    />
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 category-name">
                      {product.categoryName.toUpperCase()}
                    </h3>
                  </a>
                  <div className="mt-4 card-body">
                    <h2 className="text-bold">{product.productName}</h2>
                    <h4 className="mt-1">${product.productPrice}</h4>
                  {/* <button className="btn text-white p-2 rounded-md mt-2 w-full">View Product</button> */}
                  </div>
                </div>
          ))
        )}
          </div>
          </div>
      </div>
    </>
  );
}

export default Products;
