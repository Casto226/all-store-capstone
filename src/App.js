import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import LandingPage from "./components/LandingPage";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import Help from "./components/Help";
import store from "./redux/store";
//The app page allows all the all-store components to properly interact together.
function App() {
  //The Header components connects all the other pages together, which allows the user to jump between the pages at any time.
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
