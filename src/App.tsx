import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoTiles from "./components/InfoTiles";
import BackgroundSection from "./components/BackgroundSection";
import Footer from "./components/Footer";
import BookTable from "./components/BookTable";
import MenuSection from "./components/MenuSection";

function App() {
  return (
    <div className="App ">
      <Hero />
      <InfoTiles />
      <BackgroundSection />
      <MenuSection />
      <BookTable />
      <Footer />
    </div>
  );
}

export default App;
