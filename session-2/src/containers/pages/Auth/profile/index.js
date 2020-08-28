import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Index = () => {
  const dataCustomer = useSelector(state => state.register) || [];
  console.log(dataCustomer);
  return (
    <div className="my-10">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6  border-b">
          <img
            className="h-24 w-24 rounded-full mx-auto"
            src="https://randomuser.me/api/portraits/men/24.jpg"
            alt="Randy Robertson"
          />
          <p className="pt-2 text-lg font-semibold">
            {dataCustomer.first_name} {dataCustomer.last_name}
          </p>
          <p className="text-sm text-gray-600">{dataCustomer.email}</p>
          <p className="text-sm text-gray-600">password : {dataCustomer.password}</p>
          <div className="mt-5">
            <a
              href="#"
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700">
              Manage your Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
