import { useState } from "react";
import './index.css';
import NavBar from "./components/NavBar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feeds from "./components/Feeds";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Provider store = {appStore}>
<BrowserRouter basename="/">
<Routes>
  <Route path = "/" element={<Body/>}>
  <Route path = "/feed" element ={<Feeds/>}/>
  <Route path = "/login" element={<Login/>}/>
  <Route path = "Profile" element={<Profile/>}/>
  <Route path = "/About" element={<Profile/>}/>
   <Route path = "/connections" element={<Connections/>}/>
  <Route path = "/requests" element={<Requests/>}/>
   
  </Route>
</Routes>

</BrowserRouter>
  </Provider> 
  </>
  );
}

export default App;


