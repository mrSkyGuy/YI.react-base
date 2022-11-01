import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

import { CurrentSectionState } from "./context/currentSectionContext";
import { BasketState } from "./context/basketContext";
import Header from "./components/Header";
import Catalog from './pages/Catalog'
import BookPage from "./pages/BookPage";
import Basket from "./pages/Basket";


function App() {
  return <BasketState>
    <CurrentSectionState>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Catalog /> }/>
          <Route path="/basket" element={ <Basket /> } />
          <Route path="/:id" element={ <BookPage /> }/>
        </Routes>
      </BrowserRouter>
    </CurrentSectionState>
  </BasketState>
}

export default App;
