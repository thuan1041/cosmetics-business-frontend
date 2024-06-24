import React from 'react';
import { Row, Col, Card } from 'antd';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={20} sm={16} md={12} lg={8}>
        <Card title="Login" style={{ borderRadius: '8px' }}>
          <LoginForm />
        </Card>
      </Col>
    </Row>
  );
};

export default LoginPage;