import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import AppHeader from './components/common/Header';
import AppHome from './components/views/Home';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome />
      </Content>
    </Layout>
  );
}

export default App;
