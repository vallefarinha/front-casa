import { Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import WhatWeDo from "../pages/WhatWeDo";
import OurHistory from "../pages/OurHistory";
import OurHouse from "../pages/OurHouse";
import Petra from "../pages/Petra";
import OurBlog from "../pages/OurBlog";
import BecameAPartner from "../pages/BecameAPartner";
import PartnerForm from "../pages/PartnerForm";
import ThanksForSignIn from "../pages/ThanksForSignIn";
import FormMailing from "../pages/FormMailing";



import SanJose from "../pages/SanJose";

export default function Router() {
    return (
      <Routes>
          <Route path="/" element={<Home/>}></Route> 
          <Route path="/about" element={<AboutUs/>}></Route> 
          <Route path="/work" element={<WhatWeDo/>}></Route> 
          <Route path="/history" element={<OurHistory/>}></Route> 
          <Route path="/house" element={<OurHouse/>}></Route> 
          <Route path="/petra" element={<Petra/>}></Route> 
          <Route path="/sanjose" element={<SanJose/>}></Route> 
          <Route path="/blog" element={<OurBlog/>}></Route> 
          <Route path="/partnership" element={<BecameAPartner/>}></Route> 
          <Route path="/form" element={<PartnerForm/>}></Route> 
          <Route path="/thanks" element={<ThanksForSignIn/>}></Route>
          <Route path="/mailing" element={<FormMailing/>}></Route>
      </Routes>
    )
  }