import React from "react";
import { Link } from "react-router-dom";

const Product = ({ id, title, price, image, category, description }) => {
  return (
    <div className="card flex flex-col justify-center p-5 bg-white rounded-lg shadow-2xl">
      <div className="prod-title">
        <p className=" uppercase text-gray-900 font-bold text-xl">
          {title.length > 17 ? `${title.substring(0, 17)}...` : title}
        </p>
        <p className="uppercase text-sm text-gray-400">
          {category}
          {/* {description.length > 40 ? `${description.substring(0, 40)}...` : description} */}
        </p>
      </div>
      <div className="prod-img">
        <img
          src={image}
          alt={title}
          className="w-full object-cover object-center object-scale-down h-48 w-full"
        />
      </div>
      <div className="prod-info grid gap-10">
        <div>
          <ul className="flex flex-row justify-center items-center">
            <li className="mr-4 last:mr-0">
              <span className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#blue" className="block w-6 h-6 bg-blue-900 rounded-full">
                  {" "}
                </a>
              </span>
            </li>
            <li className="mr-4 last:mr-0">
              <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#yellow" className="block w-6 h-6 bg-yellow-500 rounded-full">
                  {" "}
                </a>
              </span>
            </li>
            <li className="mr-4 last:mr-0">
              <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#red" className="block w-6 h-6 bg-red-500 rounded-full">
                  {" "}
                </a>
              </span>
            </li>
            <li className="mr-4 last:mr-0">
              <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                <a href="#green" className="block w-6 h-6 bg-green-500 rounded-full">
                  {" "}
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
          <p className="font-bold text-xl">$ {price}</p>
          <Link to={`/productdetail?id=${id}`}>
            <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
              Add to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
