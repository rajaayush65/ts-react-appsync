import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthRoute } from "./helpers/AuthRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { getProducts } from "./redux/actions/productActions";
import { useAppDispatch, useAppSelector } from "./helpers/redux-helpers";
import { useEffect } from "react";
function App() {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts);
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
