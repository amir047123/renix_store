import { useContext } from "react";
import { ProductContext } from "../Context/ProductContextProvider";

const useGetCartsProduct = () => {
  const carts = useContext(ProductContext);
  return carts;
};

export default useGetCartsProduct;
