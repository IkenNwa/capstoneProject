/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async"

function SEO({ title, description, article, image}: any) {
  return (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {article && <meta property="og:type" content="article" />}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta property="og:image" content={image} />
        </Helmet>
    </>
  )
}

export default SEO;