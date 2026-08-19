import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LivingRoomPage from "./pages/LIvingRoomPage";
import LightingPage from "./pages/LightingPage";
import DiningPage from "./pages/DiningPage";
import BedroomPage from "./pages/BedroomPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/living-room" element={<LivingRoomPage />} />
        <Route path="/bedroom" element={<BedroomPage />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/lighting" element={<LightingPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
