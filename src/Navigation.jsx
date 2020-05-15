import React from 'react';
import Header from './components/Header';
import SocialNavBar from './components/SocialNavBar';

export default function Navigation() {
  return (
    <div style={containerStyle}>
      <SocialNavBar />
      <Header />
    </div>
  );
}

const containerStyle = {
  paddingRight: '144px',
  paddingLeft: '144px'
}