import React from 'react';
import AppAbout from '../home/About';
import AppHero from '../home/Hero';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
    </div>
  )
}

export default AppHome;