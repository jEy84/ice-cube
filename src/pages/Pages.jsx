// all about route define here 
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cusine from "./Cusine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  // useLocatin for framer motion error come without use
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cusine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
