/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { UserProvider } from "./context";
import ChatterRoutes from "./router";


function App() {
  
  //Applying the context to the App component with typescript



 

  

  return (
    <div className="App">
      <UserProvider>
        <ChatterRoutes />
      </UserProvider>
    </div>
  );
}

export default App;
