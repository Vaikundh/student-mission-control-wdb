import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, ChakraProvider } from '@chakra-ui/react';
import theme from './theme/theme';
import Home from './pages/Home';
import LabPage from './pages/LabPage';


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
          <Route path="/lab1" element={<LabPage lab={1} />}></Route>
          <Route path="/lab2" element={<LabPage lab={2} />}></Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
