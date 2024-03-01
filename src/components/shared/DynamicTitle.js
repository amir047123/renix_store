import { Helmet } from "react-helmet-async";

const DynamicTitle = ({ metaTitle = "Renix store", metaDescription }) => {
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  );
};

export default DynamicTitle;
