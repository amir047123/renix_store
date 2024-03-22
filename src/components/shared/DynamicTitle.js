import { Helmet } from "react-helmet-async";

const DynamicTitle = ({
  metaTitle,
  metaDescription,
  metaImage,
  canonicalUrl,
}) => {
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta property="og:image" content={metaImage} />
      <meta name="description" content={metaDescription} /> 
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default DynamicTitle;
