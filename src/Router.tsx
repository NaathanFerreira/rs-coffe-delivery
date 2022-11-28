import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout";
import { ConfirmedOrder } from "./pages/ConfirmedOrder";
import { Home } from "./pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmed-order" element={<ConfirmedOrder />} />
      </Route>
    </Routes>
  );
}

export default Router;
