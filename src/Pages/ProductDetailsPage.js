import useGetSeo from "../Hooks/useGetSeo";
import DynamicTitle from "../components/shared/DynamicTitle";
// import PageHeader from "../components/ui/PageHeader";
import ProductDetails from "../components/ui/productDetails/ProductDetails";

const ProductDetailsPage = () => {
  const seoMetaData = useGetSeo("product_details_page");
  return (
    <div className=" py-12 mt-14 lg:mt-20 bg-[#f5f5f5] ">
      {/* <PageHeader /> */}
      <DynamicTitle
        metaTitle={seoMetaData?.metaTitle}
        metaDescription={seoMetaData?.metaDescription}
      />
      <ProductDetails />
    </div>
  );
};

export default ProductDetailsPage;
