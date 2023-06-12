import FeedItemContainer from "../components/FeedItemContainer";
import Header from "../components/Header";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SearchView({text}:any) {
  return (
    <>
      <Header />
      <div className="search max-margin">
        <h1>You searched: {text}</h1>
        <FeedItemContainer />
      </div>
    </>
  );
}

export default SearchView;
