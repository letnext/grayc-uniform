import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Category */}
            <Route
              path="/category/:categoryId"
              element={<CategoryPage />}
            />

            {/* Subcategory */}
            <Route
              path="/category/:categoryId/:subcategoryId"
              element={<ProductPage />}
            />

            {/* Option Products */}
            <Route
              path="/category/:categoryId/:subcategoryId/:optionId"
              element={<ProductPage />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;