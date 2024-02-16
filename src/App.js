import React from 'react';
// Replace BrowserRouter with HashRouter
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import Navigation from './components/Common/Navigation';
import Home from './pages/Home/Home';
import LayeredDynamics from './pages/LayeredDynamics/LayeredDynamics';
import ResourcesPage from './pages/ResourcesPage/ResourcesPage';
import ReadmeGeneratorPage from './pages/ReadmeGeneratorPage/ReadmeGeneratorPage';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LayeredDynamics" element={<LayeredDynamics/>} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/readme-generator" element={<ReadmeGeneratorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
