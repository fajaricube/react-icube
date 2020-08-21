import React from "react";
import { Link } from "react-router-dom";

const cartitem = ({ image, title, id, price }) => {
  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <Link to={`/productdetail?id=${id}`}>
          <img src={image} className="w-20 rounded" alt="Thumbnail" />
        </Link>
      </td>
      <td>
        <Link to={`/productdetail?id=${id}`}>
          <p className="mb-2 md:ml-4">
            {title.length > 25 ? `${title.substring(0, 25)}...` : title}
          </p>
        </Link>
        {/* <form action method="POST"> */}
        <button type="submit" className="text-gray-700 md:ml-4">
          <small>(Remove item)</small>
        </button>
        {/* </form> */}
      </td>
      <td className="justify-center md:justify-end md:flex md:mt-4">
        <div className="w-20 h-10">
          <div className="relative flex flex-row w-full h-8">
            <input
              type="number"
              defaultValue={id}
              className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
            />
          </div>
        </div>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm lg:text-base font-medium">USD {price}</span>
      </td>
      <td className="text-right">
        <span className="text-sm lg:text-base font-medium">USD {price * id}</span>
      </td>
    </tr>
  );
};

export default cartitem;
