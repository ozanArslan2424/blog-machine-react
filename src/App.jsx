import { Route, Routes } from "react-router";
import { BrowserRouter, useLocation } from "react-router-dom";
import DefaultPage from "../src/pages/DefaultPage.jsx";
import MonthlyPage from "../src/pages/MonthlyPage.jsx";
import Header from "../src/sections/Header.jsx";
import NavBar from "../src/sections/NavBar";
import Footer from "../src/sections/Footer";
import QuotesPage from "./pages/QuotesPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

function Layout() {
  const location = useLocation();

  const getHeaderTitle = () => {
    if (location.pathname === "/") {
      return "Akıl Defterim";
    } else if (location.pathname === "/ayin-onerileri") {
      return "Ayın Önerileri";
    }
    return "Akıl Defterim";
  };

  return (
    <>
      <Header headerTitle={getHeaderTitle()} />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/ayin-onerileri" element={<MonthlyPage />} />
          <Route path="/alintilar" element={<QuotesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
