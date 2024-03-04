import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className=''>
        <PageHeader></PageHeader>
        <div className=" mb-10 mt-5 flex items-center justify-center ">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-gray-700 mb-6">Thank you for your payment. Your transaction has been processed successfully.</p>
        <div className="flex justify-center">
         <Link to="/" > <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Continue Shopping</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Success;
