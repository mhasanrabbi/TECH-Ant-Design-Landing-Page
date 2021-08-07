import { Anchor, Button, Drawer } from 'antd';
import React, { useState } from 'react';

const { Link } = Anchor;

const MobileNav = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  }; 
  return (
    <div className="mobileVisible">
      <Button type="primary" onClick={showDrawer}>
        <i className="fas fa-bars" />
      </Button>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Anchor targetOffset='65'>
          <Link href="#hero" title="Home" />
          <Link href="#about" title="About" />
          <Link href="#features" title="Features" />
          <Link href="#works" title="How it Works" />
          <Link href="#faq" title="FAQ" />
          <Link href="#pricing" title="Pricing" />
          <Link href="#contact" title="Contact" />
        </Anchor>
      </Drawer>
    </div>
  )
}

export default MobileNav;