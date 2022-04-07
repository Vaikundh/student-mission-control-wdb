import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buttons from "./Components/Buttons";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/button" element={<Buttons />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
