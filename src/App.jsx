import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

import { CurrentSectionState } from "./context/currentSectionContext";
import Header from "./components/Header";
import Catalog from './pages/Catalog'
import BookPage from "./pages/BookPage";
import Footer from "./components/Footer";


function App() {
  return <CurrentSectionState>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Catalog /> }/>
        <Route path="/:id" element={ <BookPage /> }/>
      </Routes>
      <Footer />
    </BrowserRouter>
  </CurrentSectionState>
}

export default App;
