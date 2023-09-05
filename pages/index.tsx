import React from 'react';

import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import PriceTotal from './components/PriceTotal'
import Handler from './components/Handler'
import ProductGrid from './components/ProductGrid'



const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1', '2'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              marginTop: 10,
              padding: 24,
              margin: 0,
              height: '100vh',
              background: colorBgContainer,
              color:'black'
            }}
          >

            <PriceTotal />
            <ProductGrid />
            <Handler />

          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;