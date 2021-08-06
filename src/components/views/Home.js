import React from 'react';
import AppAbout from '../home/About';
import AppFaq from '../home/Faq';
import AppFeature from '../home/Feature';
import AppHero from '../home/Hero';
import AppWorks from '../home/Works';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppFaq/>
    </div>
  )
}

export default AppHome;