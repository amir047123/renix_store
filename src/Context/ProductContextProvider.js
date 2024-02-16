import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  // Initialize cartProducts state with an empty array
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartProducts(getCartItems);
  }, []);

  // get all cart quantity
  useEffect(() => {}, []);
  const cartsInfo = {
    cartProducts,
    setCartProducts,
  };
  return (
    <ProductContext.Provider value={cartsInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
