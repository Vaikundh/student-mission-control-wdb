
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buttons from "./Components/Buttons";
import NavButton from "./Components/Navbar/NavButton";
import Dropdown from "./Components/Navbar/Dropdown";
import { Button, ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme"
import NavBar from "./Components/Navbar/Navbar";
import UserProfile from "./Components/UserProfile";
import ProfileGrid from "./Components/ProfileGrid";
import AboutTeam from "./pages/AboutTeam";
import Home from "./pages/Home";
import LabPage from './pages/LabPage';
import UnitPage from './pages/UnitPage';
import AllUnitsPage from './pages/AllUnitsPage';
import Contact from "./pages/Contact";



function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/button" element={<Buttons text="Button"/>} /> */}
          <Route path="/navbar" element={<NavBar />} />
          {/* <Route path="/user_profile" element={<UserProfile pic={data.pic} name={data.name} role={data.role} contact={data.contact}/>} /> */}
          {/* <Route path="/grid" element={<ProfileGrid list={menuItems}/>} /> */}
          <Route path="/about_team" element={<AboutTeam/>} />
        
          <Route path="/units" element={<AllUnitsPage />}></Route>
          <Route path="/unit1/lab1" element={<LabPage unit={1} lab={1} />}></Route>
          <Route path="/unit1/lab2" element={<LabPage unit={1} lab={2} />}></Route>
          <Route path="/unit2/lab1" element={<LabPage unit={2} lab={1} />}></Route>
          <Route path="/unit1" element={<UnitPage unit={1}/>}></Route>
          <Route path="/unit2" element={<UnitPage unit={2}/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
