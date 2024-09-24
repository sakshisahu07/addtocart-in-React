import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cartproduct from "./pages/Cartproduct";
import Searchproduct from "./pages/Searchproduct";
import Productdisplay from "./pages/Productdisplay";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="cartproduct" element={<Cartproduct/>}/>
          <Route path="searchproduct" element={<Searchproduct/>}/>
          <Route path="productdisplay" element={<Productdisplay/>}/>


          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
