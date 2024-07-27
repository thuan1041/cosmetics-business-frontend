import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Layout, Button, Row, Col, Typography, Divider, Input, Form, notification } from 'antd';
import 'antd/dist/reset.css';

const { Content, Sider } = Layout;
const { Title } = Typography;

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/shopping-cart-items/user/thuan1045');
        if (response.data && response.data.data) {
          setCartItems(response.data.data);
        } else {
          console.error('Unexpected data format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  // Tính tổng giá trị đơn hàng và số lượng sản phẩm
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0);
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = async (values) => {
    const orderData = {
      userId: 1, // Có thể lấy từ thông tin người dùng đã đăng nhập
      orderItems: cartItems.map(item => ({
        id: item.id,
        quantity: item.quantity,
        price: item.product.price,
      })),
      orderDate: new Date().toISOString(),
      statusId: 1, // Có thể cập nhật theo trạng thái đơn hàng hiện tại
    };

    try {
      const response = await axios.post('http://localhost:8080/api/orders/', orderData);
      if (response.status === 200) {
        // Hiển thị thông báo thành công
        notification.success({
          message: 'Thanh toán thành công',
          description: 'Đơn hàng của bạn đã được xử lý thành công.',
        });
        // Xóa giỏ hàng sau khi thanh toán thành công (Tùy thuộc vào yêu cầu)
        setCartItems([]);
        form.resetFields();
      } else {
        // Hiển thị thông báo lỗi nếu không thành công
        notification.error({
          message: 'Thanh toán thất bại',
          description: 'Đã xảy ra lỗi trong quá trình thanh toán. Vui lòng thử lại.',
        });
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      notification.error({
        message: 'Thanh toán thất bại',
        description: 'Đã xảy ra lỗi trong quá trình thanh toán. Vui lòng thử lại.',
      });
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '0 50px', marginTop: 64, marginLeft: 70 }}>
        <Row gutter={16}>
          <Col span={17}>
            <div className="site-layout-content">
              <Title level={2}>Giỏ hàng của bạn</Title>
              {cartItems.length === 0 ? (
                <p>Giỏ hàng của bạn đang trống</p>
              ) : (
                <div>
                  {cartItems.map(item => (
                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', backgroundColor: "#d4d4d8", borderRadius: 10, padding: '10px' }}>
                      <img
                        alt={item.product.name}
                        src={item.product.imagePaths[0]}
                        style={{ width: '180px', height: '180px', objectFit: 'cover', marginRight: '20px' }}
                      />
                      <div>
                        <Title style={{ width: 670 }} level={4}>{item.product.name}</Title>
                        <p><strong>Số lượng:</strong> {item.quantity}</p>
                        <p><strong>Giá:</strong> {item.product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                        <p><strong>Tổng:</strong> {(item.quantity * item.product.price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                      </div>
                      <Button type="danger" block style={{ backgroundColor: '#b91c1c', color: 'white', opacity: 0.8 }}>
                        Xoá khỏi giỏ hàng
                      </Button>
                      <Divider />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Col>
          <Col span={6}>
            <Sider width={300} style={{ background: '#fff', padding: '20px' }}>
              <Title level={4}>Thông tin thanh toán</Title>
              <Form form={form} layout="vertical" onFinish={handleCheckout}>
                <Form.Item label="Họ tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}>
                  <Input placeholder="Nhập họ tên của bạn" />
                </Form.Item>
                <Form.Item label="Địa chỉ giao hàng" name="address" rules={[{ required: true, message: 'Vui lòng nhập địa chỉ giao hàng!' }]}>
                  <Input.TextArea rows={3} placeholder="Nhập địa chỉ giao hàng của bạn" />
                </Form.Item>
                <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}>
                  <Input placeholder="Nhập số điện thoại của bạn" />
                </Form.Item>
                <Form.Item label="Ghi chú" name="note">
                  <Input.TextArea rows={3} placeholder="Nhập ghi chú nếu có" />
                </Form.Item>
                <p><strong>Số lượng sản phẩm:</strong> {getTotalQuantity()}</p>
                <p><strong>Giá trị đơn hàng:</strong> {getTotalPrice().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                <p><strong>Tổng tiền:</strong> {getTotalPrice().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                <Button type="primary" block htmlType="submit">
                  Thanh toán
                </Button>
              </Form>
            </Sider>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default CartPage;
