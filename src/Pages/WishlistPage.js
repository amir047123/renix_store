import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitch } from "react-icons/fa";
import PageHeader from "../components/ui/PageHeader";
import useGetCartsProduct from "../Hooks/useGetCartsProduct";

const WishlistPage = () => {
  const [actions, setActions] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const { cartProducts, setCartProducts } = useGetCartsProduct();

  useEffect(() => {
    const storedWishlist =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(
      (product) => product._id !== productId
    );
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlistItems", JSON.stringify(updatedWishlist));
  };

  const handleToggleItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };
  // seleted item add to cart
  const handleAddSelectedToCart = () => {
    const selectedProducts = wishlist.filter((product) =>
      selectedItems.includes(product._id)
    );
    selectedProducts.forEach((product) => {
      const discountedPrice =
        product?.onePiecePrice -
        (product?.onePiecePrice * product?.discount) / 100;
      const existingCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingProductIndex = existingCartItems.findIndex(
        (item) => item._id === product._id
      );
      if (existingProductIndex !== -1) {
        existingCartItems[existingProductIndex].quantity += 1;
      } else {
        existingCartItems.push({ ...product, quantity: 1, discountedPrice });
      }
      setCartProducts([...existingCartItems]);
      localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
    });
    setSelectedItems([]); // Clear selected items after adding to cart
    removeSelectedFromWishlist();
  };
  const handleAddAllToCart = () => {
    // Retrieve existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Iterate over wishlist items
    wishlist.forEach((product) => {
      // Calculate discounted price
      const discountedPrice =
        product.onePiecePrice -
        (product.onePiecePrice * product.discount) / 100;

      // Check if the product is already in the cart
      const existingProductIndex = existingCartItems.findIndex(
        (item) => item._id === product._id
      );

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, increase its quantity
        existingCartItems[existingProductIndex].quantity += 1;
      } else {
        // If the product is not in the cart, add it to the cart
        existingCartItems.push({ ...product, quantity: 1, discountedPrice });
      }
    });

    // Update cart state and save it to local storage
    setCartProducts([...existingCartItems]);
    localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

    // Clear wishlist and remove wishlist items from local storage
    setWishlist([]);
    localStorage.removeItem("wishlistItems");
  };

  const removeSelectedFromWishlist = () => {
    const updatedWishlist = wishlist.filter(
      (product) => !selectedItems.includes(product._id)
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
  // handle change actions
  const handleApplyActions = () => {
    if (actions === "cart") {
      // add all wishlist to cart
      handleAddAllToCart();
    }
    if (actions === "remove") {
      // Clear wishlist and remove wishlist items from local storage
      setWishlist([]);
    }
  };
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
                        {/* <input
                          type="checkbox"
                          onChange={() => setSelectedItems([])}
                        /> */}
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
                          <input
                            type="checkbox"
                            onChange={() => handleToggleItem(product._id)}
                            checked={selectedItems.includes(product._id)}
                          />
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
                        <div className="">
                          <div className="flex justify-between">
                            <div>
                              {" "}
                              <select
                                onChange={(e) => setActions(e.target.value)}
                                name=""
                                id=""
                                className="h-9 w-40 border border-solid border-borderColor"
                              >
                                <option value="actions">Actions</option>
                                <option value="cart">Add to cart</option>
                                <option value="remove">Remove</option>
                              </select>
                              <button
                                onClick={handleApplyActions}
                                className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm ml-3 "
                              >
                                Apply Actions
                              </button>
                            </div>
                            <div>
                              <button
                                onClick={handleAddSelectedToCart}
                                className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm ml-3 "
                              >
                                Add Selected to Cart
                              </button>
                              <button
                                onClick={handleAddAllToCart}
                                className="hover:bg-primary bg-[#efecec] transition-all duration-300 hover:text-white text-[#333] px-4 py-3 rounded-full uppercase font-rubic font-medium text-sm ml-3"
                              >
                                Add All to Cart
                              </button>
                            </div>
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
                      onClick={() => handleShareFacebook()}
                      style={{ cursor: "pointer" }}
                    />
                    <FaTwitch
                      onClick={() => handleShareTwitter()}
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
