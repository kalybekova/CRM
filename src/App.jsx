import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Account,
  Analyticks,
  Customers,
  Dashboard,
  LinkAccount,
  LoginAccount,
  LoginService,
  Marketing,
  MyProfile,
  Orders,
  PaymentBilling,
  PersonalInformstion,
  PlanPricing,
  Products,
  StoreDetails,
  TaxesDutaies,
  UserAddress,
  UserInfo,
} from "./components/pages";
import CreateID from "./components/pages/CreateID/CreateID";
import Toast from "./components/Atoms/Toast/Toast";

function App() {
  return (
    <>
      <Toast />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/analyticks" element={<Analyticks />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/my-profile" element={<MyProfile />}>
          <Route
            path="personal-information"
            element={<PersonalInformstion />}
          />
          <Route path="login-service" element={<LoginService />} />
          <Route path="store-details" element={<StoreDetails />} />
          <Route path="plan-pricing" element={<PlanPricing />} />
          <Route path="account" element={<Account />} />
          <Route path="payment-billing" element={<PaymentBilling />} />
          <Route path="taxes-dutaies" element={<TaxesDutaies />} />
          <Route path="link-account" element={<LinkAccount />} />
        </Route>
        <Route path="/login-account" element={<LoginAccount />} />
        <Route path="/user-information" element={<UserInfo />} />
        <Route path="/user-address" element={<UserAddress />} />
        <Route path="/user-id" element={<CreateID />} />
      </Routes>
    </>
  );
}

export default App;
