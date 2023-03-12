
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import NoPage from "./Pages/NoPage";
import Destination from "./Pages/Destination";
import ParisCity from "./Pages/City/ParisCity";
import LondonCity from "./Pages/City/LondonCity";
import MaltaCity from "./Pages/City/MaltaCity";
import BarcelonaCity from "./Pages/City/BarcelonaCity";
import RomeCity from "./Pages/City/RomeCity";
import HelsinkiCity from "./Pages/City/HelsinkiCity";
import DubaiCity from "./Pages/City/DubaiCity";
import IstanbulCity from "./Pages/City/IstanbulCity";
import AmsterdamCity from "./Pages/City/AmsterdamCity";
import LisbonaCity from "./Pages/City/LisbonaCity";
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
                    <Route path="parisCity" element={<ParisCity/>} />
                    <Route path="londonCity" element={<LondonCity/>} />
                    <Route path="maltaCity" element={<MaltaCity/>} />
                    <Route path="barcelonaCity" element={<BarcelonaCity/>} />
                    <Route path="romeCity" element={<RomeCity/>} />
                    <Route path="helsinkiCity" element={<HelsinkiCity/>} />
                    <Route path="dubaiCity" element={<DubaiCity/>} />
                    <Route path="istanbulCity" element={<IstanbulCity/>} />
                    <Route path="amsterdamCity" element={<AmsterdamCity/>} />
                    <Route path="lisbonaCity" element={<LisbonaCity/>} />

                    <Route path="*" element={<NoPage />} />

                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}
