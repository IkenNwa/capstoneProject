/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import {
  FeedProvider,
  PostProvider,
  SearchProvider,
  UserProvider,
} from "./context";
import ChatterRoutes from "./router";

function App() {
  //Applying the context to the App component with typescript

  return (
    <div className="App">
      <SearchProvider>
        <FeedProvider>
          <PostProvider>
            <UserProvider>
              <ChatterRoutes />
            </UserProvider>
          </PostProvider>
        </FeedProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
