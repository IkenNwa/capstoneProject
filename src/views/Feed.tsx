import FeedItemContainer from "../components/FeedItemContainer";
import Header from "../components/Header";


function Feed() {
  return (
    <>
      <Header />
      <div className="max-margin">
      <FeedItemContainer />
      </div>
    </>
  );
}

export default Feed;
