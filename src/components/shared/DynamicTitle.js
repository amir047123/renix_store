import { Helmet } from "react-helmet-async";

const DynamicTitle = ({
  metaTitle = "Renix store",
  metaDescription,
  metaImage,
}) => {
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
    </Helmet>
  );
};

export default DynamicTitle;
