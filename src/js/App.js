import React from 'react';
import NavBar from './component/NavBar';
import Header from './component/Header';
import FeatureSection from './component/FeatureSection';
import '../styles/index.css';
function App() {
  return (
    // <div className="App">
    //   <NavBar />
    //   <Header />
    //   <FeatureSection />
    // </div>
    <div>
      <NavBar />
      <Header />
      <FeatureSection />
    </div>
  );
}

export default App;