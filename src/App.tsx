import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import Home from './pages/Home';
import LabPage from './pages/LabPage';
import UnitPage from './pages/UnitPage';
import AllUnitsPage from './pages/AllUnitsPage';


function App() {
  
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/button" element={<Button>Button</Button>} />
          <Route
            path="/button_sec"
            element={<Button variant="secondary">Button</Button>}
          />
          <Route
            path="/button_dis"
            element={<Button disabled={true}>Disabled button</Button>}
          />
          <Route path="/units" element={<AllUnitsPage />}></Route>
          <Route path="/unit1/lab1" element={<LabPage unit={1} lab={1} />}></Route>
          <Route path="/unit1/lab2" element={<LabPage unit={1} lab={2} />}></Route>
          <Route path="/unit2/lab1" element={<LabPage unit={2} lab={1} />}></Route>
          <Route path="/unit1" element={<UnitPage unit={1}/>}></Route>
          <Route path="/unit2" element={<UnitPage unit={2}/>}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
