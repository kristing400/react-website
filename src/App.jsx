import React from 'react';
import Header from './components/Header';
import SocialNavBar from './components/SocialNavBar';

function App() {
  return (
    <div style={containerStyle}>
      <SocialNavBar />
      <Header />
    </div>
  );
}

export default App;

const containerStyle = {
  paddingRight: '144px',
  paddingLeft: '144px'
}