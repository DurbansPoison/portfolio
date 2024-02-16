import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Common/Header';
import Navigation from './components/Common/Navigation';
import Footer from './components/Common/Footer';
import Home from './pages/Home/Home';
import TheWelcomePacket from './pages/TheWelcomePacket/TheWelcomePacket';
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
        <Route path="/thewelcomepacket" element={<TheWelcomePacket />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/readme-generator" element={<ReadmeGeneratorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
