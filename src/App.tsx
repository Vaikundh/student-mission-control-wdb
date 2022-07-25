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
          {/* <Route path="/button" element={<Buttons text="Button"/>} /> */}
          <Route path="/navbar" element={<NavBar />} />
          {/* <Route path="/user_profile" element={<UserProfile pic={data.pic} name={data.name} role={data.role} contact={data.contact}/>} /> */}
          <Route path="/about_team" element={<AboutTeam/>} />
          <Route path="/about_project" element={<AboutProject/>} />
          <Route path="/units" element={<AllUnitsPage />}></Route>
          <Route path="/unit1/lab1" element={<LabPage unit={1} lab={1} />}></Route>
          <Route path="/unit1/lab2" element={<LabPage unit={1} lab={2} />}></Route>
          <Route path="/unit2/lab1" element={<LabPage unit={2} lab={1} />}></Route>
          <Route path="/unit1" element={<UnitPage unit={1}/>}></Route>
          <Route path="/unit2" element={<UnitPage unit={2}/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/resources" element={<Resources/>}></Route>

          <Route path="/units" element={<AllUnitsPage />}></Route>
          <Route
            path="/unit1/lab1"
            element={<LabPage unit={1} lab={1} />}></Route>
          <Route
            path="/unit1/lab2"
            element={<LabPage unit={1} lab={2} />}></Route>
          <Route
            path="/unit2/lab1"
            element={<LabPage unit={2} lab={1} />}></Route>
          <Route path="/unit1" element={<UnitPage unit={1} />}></Route>
          <Route path="/unit2" element={<UnitPage unit={2} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
