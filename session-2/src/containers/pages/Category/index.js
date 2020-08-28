import React, { useState, useEffect } from "react";
import Product from "../../../component/product";
import { useParams, useLocation } from "react-router";

const Category = () => {
  let { slug } = useParams();
  let query = new URLSearchParams(useLocation().search);
  let queryslug = query && query.get("queryslug");

  let endpoint = "https://fakestoreapi.com/products/";
  if (slug) {
    console.log(slug);
    if (slug === "bestseller") {
      console.log("bestseller");
      endpoint = "https://fakestoreapi.com/products?sort=desc";
    } else {
      console.log("jewelery");
      endpoint = "https://fakestoreapi.com/products/category/jewelery";
    }
  }
  console.log(queryslug);
  if (queryslug) {
    console.log(queryslug);
    if (queryslug === "bestseller") {
      console.log("bestseller");
      endpoint = "https://fakestoreapi.com/products?sort=desc";
    } else {
      console.log("jewelery");
      endpoint = "https://fakestoreapi.com/products/category/jewelery";
    }
  }
  console.log(endpoint);
  const [result, setResult] = useState({
    fetch: false,
    product: [],
  });

  useEffect(() => {
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
    <main className="my-8">
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium center">
          Ini adalah kategori : {slug ? slug : "semua"}
        </h3>
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
        <div className="flex justify-center">
          <div className="flex rounded-md mt-8">
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white">
              <span>Previous</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white">
              <span>1</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white">
              <span>2</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white">
              <span>3</span>
            </a>
            <a
              href="#"
              className="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white">
              <span>Next</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category;
