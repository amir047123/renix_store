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
     // Calculate the total using reduce
     const grandTotal = cartProducts.reduce(
       (accumulator, item) =>
         accumulator + item.quantity * item.discountedPrice,
       0
     );

     setTotal(grandTotal);
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
