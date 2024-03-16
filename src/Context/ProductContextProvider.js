import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  // Initialize cartProducts state with an empty array
  const [cartProducts, setCartProducts] = useState([]);
  let [total, setTotal] = useState(0);

  useEffect(() => {
    // Retrieve cart items from local storage
    const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartProducts(getCartItems);
  }, []);

  useEffect(() => {
    console.log(cartProducts, "cartProducts");
    // Calculate the total using reduce
    const grandTotal = cartProducts?.reduce((accumulator, item) => {
      // Calculate price based on whether discountedPrice exists
      const price = item?.variants
        ? item?.variants?.price
        : item?.discountedPrice;
      // Add to accumulator
      console.log(price, 26);
      return accumulator + item?.quantity * price;
    }, 0);

    console.log(grandTotal, "grandTotal");
    // Fix to two decimal places
    const toFixedTotal = grandTotal.toFixed(2);
    // Set the total
    setTotal(toFixedTotal);
  }, [cartProducts]);

  const cartsInfo = {
    cartProducts,
    setCartProducts,
    total,
    setTotal,
  };
  return (
    <ProductContext.Provider value={cartsInfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
