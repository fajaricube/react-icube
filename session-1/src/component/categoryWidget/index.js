import React, { useEffect, useState } from "react";
import Product from "../product";
import { Link } from "react-router-dom";

const Widget = ({ title, category_name }) => {
  const [result, setResult] = useState({
    fetch: false,
    product: [],
  });

  useEffect(() => {
    let endpoint = "https://fakestoreapi.com/products/";
    if (category_name) {
      if (category_name === "bestseller") {
        endpoint = "https://fakestoreapi.com/products?sort=desc&limit=4";
      } else {
        endpoint = "https://fakestoreapi.com/products/category/jewelery";
      }
    }

    fetch(endpoint)
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
    <div className="container mx-auto mb-10">
      <div className="container mx-auto px-2 py-2 flex justify-between items-center">
        <h3 className="text-gray-700 text-2xl flex font-medium">{title}</h3>
        <Link to={`./category/${category_name}`}>
          <h3 className="text-gray-700 text-2xl flex font-medium underline">See More</h3>
        </Link>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {result.product.map((dataproduct, i) => {
          return (
            <Product
              key={i}
              id={dataproduct.id}
              title={dataproduct.title}
              description={dataproduct.description}
              category={dataproduct.category}
              price={dataproduct.price}
              image={dataproduct.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Widget;
