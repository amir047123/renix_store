import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitch, FaEye, FaTrash } from "react-icons/fa"; // Import icons from react-icons
import PageHeader from "../components/ui/PageHeader";

const WishlistPage = () => {
  // Initialize wishlist state
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist items from local storage on component mount
  useEffect(() => {
    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Function to remove product from wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(
      (product) => product._id !== productId
    );
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
  };
  // Function to share product on Facebook
  const handleShareFacebook = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  // Function to share product on Twitter
  const handleShareTwitter = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  // Function to share product on Google Plus (Deprecated)
  const handleShareGooglePlus = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  // Function to share product on Pinterest
  const handleSharePinterest = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  // Function to share product on LinkedIn
  const handleShareLinkedIn = async () => {
    try {
      await navigator.share({
        url: window.location.href,
      });
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };
  // Realated products

  return (
    <div className="bg-[#f5f5f5] overflow-hidden">
      <PageHeader title="Wishlist" />
      <div className="mx-auto max-lg:overflow-x-auto w-full">
        <div className="pt-12 container">
          <div className="bg-white p-5 shadow-custom max-lg:min-w-[900px]">
            {wishlist.length === 0 ? (
              <div>
                <p className="font-rubic text-sm text-[#333] mb-6">
                  Your Wishlist is currently empty.
                </p>
                <Link
                  to={"/"}
                  className="hover:bg-secondary bg-primary transition-all duration-300 text-white px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm "
                >
                  Return to shop
                </Link>
              </div>
            ) : (
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-separate rounded border-slate-200">
                  <thead>
                    <tr>
                      <th className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0  text-slate-700 w-9 ">
                        <input type="checkbox" name="" id="" />
                      </th>
                      <th className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0  text-slate-700  w-9">
                        #
                      </th>
                      <th className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700   w-[100px]">
                        Image
                      </th>
                      <th className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 w-[500px]  ">
                        Product Name
                      </th>
                      <th className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700  w-[150px]">
                        Unit Price
                      </th>

                      <th className="h-12 px-6 text-sm font-medium border-l first:border-l-0  text-center ">
                        {" "}
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist.map((product, index) => (
                      <tr key={product._id}>
                        <th className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          <input type="checkbox" name="" id="" />
                        </th>
                        <td className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          {index + 1}
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          <img className="w-12" src={product.img} alt="" />
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          {product.name}
                        </td>
                        <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          ৳ {product.onePiecePrice}
                        </td>

                        <td className="h-20 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                          <button
                            onClick={() => removeFromWishlist(product._id)}
                            className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-3"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        colSpan={100}
                        className="h-24 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 "
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <select
                              name=""
                              id=""
                              className="h-9 w-40 border border-solid border-borderColor"
                            >
                              <option value="actions">Actions</option>
                              <option value="cart">Add to cart</option>
                              <option value="remove">Remove</option>
                            </select>
                            <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm ml-3 ">
                              Apply Actions
                            </button>
                          </div>
                          <div>
                            <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm mt-3">
                              Add Selected to Cart
                            </button>
                            <button className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm ml-3">
                              Add All to Cart
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <div className="flex justify-end items-center">
                  <div className="flex items-center gap-4 py-8">
                    <span>Share on</span>
                    <FaFacebook
                      onClick={handleShareFacebook}
                      style={{ cursor: "pointer" }}
                    />
                    <FaTwitch
                      onClick={handleShareTwitter}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
