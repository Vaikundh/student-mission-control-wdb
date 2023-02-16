import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme"
import NavBar from "./Components/Navbar/Navbar";
import AboutTeam from "./pages/AboutTeam";
import AboutProject from "./pages/AboutProject";
import Home from "./pages/Home";
import LabPage from './pages/LabPage';
import UnitPage from './pages/UnitPage';
import AllUnitsPage from './pages/AllUnitsPage';
import ContactPage from './pages/Contact';
import Resources from "./pages/Resources";
import Footer from "./Components/Footer";



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/about_team" element={<AboutTeam/>} />
          <Route path="/about_project" element={<AboutProject/>} />
          <Route path="/expeditions/" element={<AllUnitsPage />}></Route>
          {/* ADD ONE OF THE BELOW WITH THE CORRECT PARAMETERS IN ORDER TO DISPLAY EACH MISSION(Lab) */}
          <Route path="/expedition1/mission1" element={<LabPage unit={1} lab={1} numLabsInUnit={2} />}></Route>
          <Route path="/expedition1/mission2" element={<LabPage unit={1} lab={2} numLabsInUnit={2}/>}></Route>
          <Route path="/expedition2/mission1" element={<LabPage unit={2} lab={1} numLabsInUnit={1}/>}></Route>
          <Route path="/expedition3/mission1" element={<LabPage unit={3} lab={1} numLabsInUnit={1}/>}></Route>
          <Route path="/expedition3/mission2" element={<LabPage unit={3} lab={1} numLabsInUnit={1}/>}></Route>
          {/* ADD ONE OF THE BELOW WITH THE CORRECT PARAMETER IN ORDER TO DISPLAY EACH EXPEDITION(Unit) */}
          <Route path="/expedition1" element={<UnitPage unit={1}/>}></Route>
          <Route path="/expedition2" element={<UnitPage unit={2}/>}></Route>
          <Route path="/expedition3" element={<UnitPage unit={3}/>}></Route>
          
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/resources" element={<Resources/>}></Route>

          <Route path="/units" element={<AllUnitsPage />}></Route>
          <Route
            path="/unit1/lab1"
            element={<LabPage unit={1} lab={1} numLabsInUnit={2} />}></Route>
          <Route
            path="/unit1/lab2"
            element={<LabPage unit={1} lab={2} numLabsInUnit={2} />}></Route>
          <Route
            path="/unit2/lab1"
            element={<LabPage unit={2} lab={1} numLabsInUnit={1} />}></Route>
          <Route path="/unit1" element={<UnitPage unit={1} />}></Route>
          <Route path="/unit2" element={<UnitPage unit={2} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
