
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import NoPage from "./Pages/NoPage";
import Destination from "./Pages/Destination";
import QuotationForm from "./Pages/QuotationForm";

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="AboutUs" element={<AboutUs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="destination" element={<Destination/>} />
                    <Route path="form" element={<QuotationForm/>} />
                    <Route path="*" element={<NoPage />} />

                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}
