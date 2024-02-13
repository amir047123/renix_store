import PageHeader from "../components/ui/PageHeader";
import ProductDetails from "../components/ui/productDetails/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <div className=" py-12 bg-[#f5f5f5] ">
      <PageHeader />

      <ProductDetails />
    </div>
  );
};

export default ProductDetailsPage;
