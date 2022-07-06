import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Top } from "../components/pages/Top";
import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { DefaultLayout } from "../components/templates/DefaultLayout";


export const Router = () => {
  return (
    <BrowserRouter>
      <DefaultLayout />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}