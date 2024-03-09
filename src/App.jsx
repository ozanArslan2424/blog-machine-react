import { Route, Routes, Router } from "react-router";
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
    if (location.pathname === "/blogmachine/") {
      return "Akıl Defterim";
    } else if (location.pathname === "/blogmachine/ayin-onerileri") {
      return "Ayın Önerileri";
    } else if (location.pathname === "/blogmachine/alintilar") {
      return "PsiNossa Alıntıları";
    }
    return "Akıl Defterim";
  };

  return (
    <>
      <Header headerTitle={getHeaderTitle()} />
      <NavBar />
      <main>
        <Routes>
          <Route path="/blogmachine-v2/" element={<DefaultPage />} index />
          <Route path="/blogmachine-v2/ayin-onerileri" element={<MonthlyPage />} />
          <Route path="/blogmachine-v2/alintilar" element={<QuotesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
