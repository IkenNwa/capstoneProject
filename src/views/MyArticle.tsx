/* eslint-disable @typescript-eslint/no-explicit-any */
import ArticlesFeed from "../components/ArticlesFeed"
import SEO from "../components/SEO";
function MyArticle() {
  return (
    <div>
      <SEO title="My Articles" description="My Articles" article={false} />
      <ArticlesFeed />
    </div>
  )
}

export default MyArticle;