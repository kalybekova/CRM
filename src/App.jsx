import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Analyticks,
  Customers,
  Dashboard,
  Marketing,
  Orders,
  Products,
} from "./components/pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/analyticks" element={<Analyticks />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </>
  );
}

export default App;
