import Auth from "./Pages/Authentication/Auth";
import {Routes,Route} from "react-router-dom";
import Portfolio from "./Pages/Portfolio/Portfolio";
import "./App.css"
function App() {
  return (
   <Routes>
    <Route path="/" element={<Auth/>}/>
    <Route path="/portfolio" element={<Portfolio/>}/>
   </Routes>
  );
}

export default App;
