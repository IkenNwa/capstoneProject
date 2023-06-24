/* eslint-disable @typescript-eslint/no-explicit-any */
import { Helmet } from "react-helmet-async"

function SEO({ title, description, article}: any) {
  return (
    <>
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {article && <meta property="og:type" content="article" />}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
        </Helmet>
    </>
  )
}

export default SEO