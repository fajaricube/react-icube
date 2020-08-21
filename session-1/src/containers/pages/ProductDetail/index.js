import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const ProductDetail = () => {
  let query = new URLSearchParams(useLocation().search);
  let id = query && query.get("id");

  const [count, setCount] = useState(1);
  const plusCount = x => {
    setCount(count + x);
  };

  const minCount = x => {
    if (count >= 2) {
      setCount(count - x);
    }
  };

  const [result, setResult] = useState({
    fetch: false,
    product: {},
  });
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      // fetch("https://fakestoreapi.com/products/" + id)
      .then(Response => {
        return Response.json();
      })
      .then(Result => {
        setResult({
          fetch: true,
          product: Result,
        });
      });
  }, []);
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center">
          <div className="w-full h-64 md:w-1/2 lg:h-96">
            <img
              className="w-full object-cover object-center object-scale-down h-48 w-full"
              src={result.product.image}
              alt="{result.product.title}"
            />
          </div>
          <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
            <h3 className="text-gray-700 uppercase text-lg">{result.product.title}</h3>
            <p className="text-gray-700  text-xs">{result.product.description}</p>
            <span className="text-gray-500 mt-3">USD {result.product.price}</span>
            <hr className="my-3" />
            <div className="mt-2">
              <label className="text-gray-700 text-sm" htmlFor="count">
                QTY:
              </label>
              <div className="flex items-center mt-1">
                <button
                  className="text-gray-500 focus:outline-none focus:text-gray-600"
                  onClick={() => minCount(1)}>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
                <span className="text-gray-700 text-lg mx-2">{count}</span>
                <button
                  className="text-gray-500 focus:outline-none focus:text-gray-600"
                  onClick={() => plusCount(1)}>
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-3">
              <label className="text-gray-700 text-sm" htmlFor="count">
                Color:
              </label>
              <div className="flex items-center mt-1">
                <button className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none"></button>
                <button className="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none"></button>
                <button className="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none"></button>
              </div>
            </div>
            <div className="flex items-center mt-6">
              <Link to="/cart">
                <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                  Order Now
                </button>
              </Link>
              <Link to="/cart">
                <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
