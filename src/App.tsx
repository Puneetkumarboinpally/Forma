import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LivingRoomPage from "./pages/LivingRoomPage";
import LightingPage from "./pages/LightingPage";
import DiningPage from "./pages/DiningPage";
import BedroomPage from "./pages/BedroomPage";
import CollectionPage from "./pages/CollectionPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import WishlistPage from "./pages/WishlistPage";
import CartPage from "./pages/CartPage";
import OrderConfirmedPage from "./pages/OrderConfirmedPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/living-room" element={<LivingRoomPage />} />
        <Route path="/bedroom" element={<BedroomPage />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/lighting" element={<LightingPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
        <Route
          path="/product-details-page/:id"
          element={<ProductDetailsPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
