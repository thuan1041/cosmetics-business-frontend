import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../Sidebar';
import Header from '../Header';
import ProductDetail from '../../components/ProductDetail';

const { HeaderLayout, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '0vh', padding:"0 100px" }}>
      {/* <Layout className="site-layout"> */}
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background">
            {children}
          </div>
          <ProductDetail />
        </Content>
        {/* <Sidebar /> */}
      {/* </Layout> */}
    </Layout>
  );
};

export default MainLayout;