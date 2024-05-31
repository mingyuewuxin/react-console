import React from 'react';
import { Layout, theme } from 'antd';
import { Routes, Route } from "react-router-dom";

import HeaderView from 'layouts/header/index.js'
import LeftMenu from 'layouts/LeftMenu/index.js'
import User from 'pages/User/index'
import Dashboard from 'pages/Dashboard/index'

const { Header, Content, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ width: '100%', height: '100%' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '60px'
        }}
      >
        <HeaderView></HeaderView>
      </Header>
      <Layout style={{ height: 'calc(100% - 60px)' }}>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <LeftMenu></LeftMenu>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/home/dashboard" element={ <Dashboard /> }></Route>
              <Route path="/home/setting/user" element={ <User /> }></Route>

            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;