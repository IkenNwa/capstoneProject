/* eslint-disable @typescript-eslint/no-explicit-any */
import { SEO, ArticlesFeed } from "../components";

function MyArticle() {
  return (
    <div>
      <SEO title="My Articles" description="My Articles" article={false} />
      <ArticlesFeed />
    </div>
  )
}

export default MyArticle;