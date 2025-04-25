import {
  createBrowserRouter,createRoutesFromElements,Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./Components/Layout/Layout";
import Aboutus from "./pages/Aboutus";
import Feature from "./pages/Feature";
import Pricing from "./pages/Pricing";
import Contactus from "./pages/Contactus";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route path="/" index element={<Home/>}></Route>
    <Route path="/about" element={<Aboutus/>}></Route>
    <Route path="/feature" element={<Feature/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/faq" element={<Faq/>}></Route>
    <Route path="/blog" element={<Blog/>}></Route>
    <Route path="/contact" element={<Contactus/>}></Route>
  </Route>
))

function App() {
 

  return (
  <>
 <RouterProvider router={router}/>
  
  </>
  )
}

export default App
