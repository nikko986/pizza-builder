import React from 'react';
import Order from './components/Order';
import { Layout, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
    return (
        <div className="App">
            <Layout className="layout">
            <Header>
              <header>
            <h1><span aria-hidden>🍕</span>Pizza Builder<span aria-hidden>🍕</span></h1>
        </header>
            </Header>
            <Content style={{ padding: '0 50px'}}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Create Your Pizza</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content" style={{ textAlign: 'center' }}>
                  <Order/>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    );
}

export default App;
