import React from 'react';
import AppAbout from '../home/About';
import AppFeature from '../home/Feature';
import AppHero from '../home/Hero';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
    </div>
  )
}

export default AppHome;