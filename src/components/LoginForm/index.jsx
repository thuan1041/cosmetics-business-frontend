import React from 'react';
import { Form, Input, Button } from 'antd';
import useLogin from '../../hooks/useLogin';

const LoginForm = () => {
  const { user, error, loading, login } = useLogin();

  const onFinish = (values) => {
    console.log('Received values:', values);
    if (login(values)==true) {
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="login-form"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
