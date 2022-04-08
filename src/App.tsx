import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buttons from "./Components/Buttons";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/button" element={<Buttons text="Button"/>} />
          <Route path="/button_sec" element={<Buttons text="Button" type="secondary"/>} />
          <Route path="/button_dis" element={<Buttons text="Button" disabled={true}/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
