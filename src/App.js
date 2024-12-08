import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/home/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Dr_Info from "./pages/RatingAndReview/Dr_Info";
import Get_Help from "./pages/RatingAndReview/Get_Help";
import Reviews from "./pages/RatingAndReview/Reviews";
import AppointmentSlot from "./pages/DrAppointment/AppointmentSlot";
import CheckOut from "./pages/CheckOut.jsx/CheckOut";
import AppointmentConfirmation from "./pages/CheckOut.jsx/AppointmentConfirmation";
import UserProfile from "./pages/UserProfile/UserProfile";

//  className="bg-[#F4F4F4]"

function App() {
  return (
    <div className="bg-[#F4F4F4] max-w-[1536px]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/info" element={<Dr_Info/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="/get_help" element={<Get_Help/>} />
        <Route path="/book_appointment" element={<AppointmentSlot/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/AppointmentConfirmation" element={<AppointmentConfirmation/>} />
        <Route path="/login" element={<UserProfile/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
