import React from 'react';
import AppAbout from '../home/About';
import AppContact from '../home/Contact';
import AppFaq from '../home/Faq';
import AppFeature from '../home/Features';
import AppHero from '../home/Hero';
import AppPricing from '../home/Pricing';
import AppWorks from '../home/Works';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppFaq/>
      <AppPricing/>
      <AppContact/>
    </div>
  )
}

export default AppHome;