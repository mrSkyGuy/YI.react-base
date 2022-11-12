import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

import Header from "./components/Header";
import Catalog from './pages/Catalog'
import BookPage from "./pages/BookPage";
import Basket from "./pages/Basket";
import { Provider } from "react-redux";
import { store } from "./store";


function App() {
  return <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/catalog/:catalogId" element={<Catalog />} />
        <Route path="/book/:bookId" element={<BookPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element="Not found" />
      </Routes>
    </BrowserRouter>
  </Provider>
}

export default App;
