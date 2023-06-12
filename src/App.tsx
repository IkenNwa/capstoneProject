/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";
import ChatterRoutes from "./router";


function App() {
  //Create a context to store the user data from firebase
  const [user, setUser] = useState<any>(null);

  

  return (
    <div className="App">
      <ChatterRoutes 
      user={user} 
      setUser={setUser}
        />
    </div>
  );
}

export default App;
