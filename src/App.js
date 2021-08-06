import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import AppHeader from './components/common/header';


const { Header } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
    </Layout>
  );
}

export default App;
