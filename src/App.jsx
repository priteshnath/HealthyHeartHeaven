import React from "react";
import NavBar from "./components/NavBar";
import CheckupPage from "./components/CheckupPage";
import HomePage from "./Components/HomePage";
import AwarenessPage from "./Components/AwarenessPage";
import HearFromPatients from "./Components/HearFromPatients";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AwarenessPage />
      <HearFromPatients />
      <CheckupPage />
      <Footer />
    </div>
  );
}

export default App;
