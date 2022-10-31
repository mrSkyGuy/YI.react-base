import React from "react";

import { CurrentSectionState } from "./context/currentSectionContext";
import Header from "./components/Header";
import Catalog from './pages/Catalog'
import Footer from "./components/Footer";


function App() {
  return <CurrentSectionState>
    <Header />
    <Catalog />
    <Footer />
  </CurrentSectionState>
}

export default App;
