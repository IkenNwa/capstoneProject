/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import FeedItemContainer from "../components/FeedItemContainer";
import Header from "../components/Header";
import { FeedContext, PostContext, SearchContext } from "../context";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SearchView() {
  const { search } = useContext<any>(SearchContext);
  const { post } = useContext<any>(PostContext);
  const { setFeed } = useContext<any>(FeedContext);

  //Map through posts and filter by search
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setFeed(post.title.toLowerCase().includes(search.toLowerCase()))
 




  return (
    <>
      <Header />
      <div className="search max-margin">
        <h1>You searched: {search}</h1>
        <FeedItemContainer />
      </div>
    </>
  );
}

export default SearchView;
