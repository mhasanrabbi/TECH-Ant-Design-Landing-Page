import { Menu } from 'antd';
import React from 'react';

const AppHeader = () => {
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"/>
          <a href="https://www.google.com">TECH</a>
        </div>
        <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home">Home</Menu.Item>
          <Menu.Item key="about">About</Menu.Item>
          <Menu.Item key="features">Features</Menu.Item>
          <Menu.Item key="howItWorks">How it works</Menu.Item>
          <Menu.Item key="faq">FAQ</Menu.Item>
          <Menu.Item key="pricing">Pricing</Menu.Item>
          <Menu.Item key="contact">Contact</Menu.Item>
        </Menu>
      </div>
    </div>
  )
}

export default AppHeader;