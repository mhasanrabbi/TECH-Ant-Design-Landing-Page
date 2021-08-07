import { Anchor } from 'antd';
import React from 'react';

const { Link } = Anchor;

const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"/>
          <a href="https://www.google.com">TECH</a>
        </div>
        <Anchor targetOffset='65'>
          <Link href="#hero" title="Home" />
          <Link href="#about" title="About" />
          <Link href="#features" title="Features" />
          <Link href="#works" title="How it Works" />
          <Link href="#faq" title="FAQ" />
          <Link href="#pricing" title="Pricing" />
          <Link href="#contact" title="Contact" />
        </Anchor>
      </div>
    </div>
  )
}

export default AppHeader;