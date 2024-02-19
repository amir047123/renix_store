import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaTrash } from 'react-icons/fa'; // Import icons from react-icons
import AuthUser from '../Hooks/authUser';

const Favorite = () => {
    const { userInfo } = AuthUser();
    const [wishlist, setWishlist] = useState([]);

    // Load wishlist items from localStorage on component mount
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];
        setWishlist(storedWishlist);
    }, []);

    // Function to remove product from wishlist
    const removeFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(product => product._id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlistItems', JSON.stringify(updatedWishlist));
    };

    return (
        <div>
            {wishlist.length === 0 ? (
                <div className="py-6 text-sm text-[#333]">
                    <Link
                        to={"/"}
                        className="hover:bg-secondary bg-primary transition-all duration-300 text-white  px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mr-2"
                    >
                        Browse products
                    </Link>
                    <span className="block md:inline mt-5 md:mt-0">
                        No orders available yet.
                    </span>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full bg-white text-left border border-separate rounded border-slate-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-sm font-medium border-l first:border-l-0 stroke-slate-700 w-[100px]">
                                    #
                                </th>
                                <th className="px-6 py-3 text-sm font-medium border-l first:border-l-0 stroke-slate-700 w-[300px]">
                                    Product Name
                                </th>
                                <th className="px-6 py-3 text-sm font-medium border-l first:border-l-0 stroke-slate-700 w-[150px]">
                                    Image
                                </th>
                                <th className="px-6 py-3 text-sm font-medium border-l first:border-l-0 stroke-slate-700">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishlist.map((product, index) => (
                                <tr key={product._id}>
                                    <td className="px-6 py-3 text-sm border-t border-l first:border-l-0 border-slate-200 text-primary cursor-pointer">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-3 text-sm border-t border-l first:border-l-0 border-slate-200">
                                        {product.name}
                                    </td>
                                    <td className="px-6 py-3 border-t border-l first:border-l-0 border-slate-200">
                                        <img src={product.img} alt={product.name} className="w-24 h-24 object-cover" />
                                    </td>
                                    <td className="px-6 py-3 border-t border-l first:border-l-0 border-slate-200">
                                        <Link
                                            to={`/productDetails/${product._id}`}
                                            className="bg-primary hover:bg-secondary transition-all duration-300 hover:text-white text-white px-4 py-2 rounded-full uppercase font-rubic font-medium text-sm mr-2"
                                        >
                                            <FaEye className="inline-block mr-1" /> View
                                        </Link>
                                        <button
                                            onClick={() => removeFromWishlist(product._id)}
                                            className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white px-4 py-2 rounded-full uppercase font-rubic font-medium text-sm"
                                        >
                                            <FaTrash className="inline-block mr-1" /> Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Favorite;
