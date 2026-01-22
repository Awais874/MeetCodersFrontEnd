import { useState } from "react";
import './index.css';
import NavBar from "./NavBar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Login";
import Body from "./Body";
import Profile from "./Profile";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<BrowserRouter basename="/">
<Routes>
  <Route path = "/" element={<Body/>}>
  <Route path = "/Login" element={<Login/>}/>
  <Route path = "/About" element={<Profile/>}/>
  </Route>
</Routes>

</BrowserRouter>
   
  </>
  );
}

export default App;


