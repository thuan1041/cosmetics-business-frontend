import React from 'react';
import { Layout, Menu, Input, Button, Dropdown, Avatar, Badge } from 'antd';
import { UserOutlined, ShoppingCartOutlined, HeartOutlined, SearchOutlined } from '@ant-design/icons';
import MenuItems from '../../components/MenuItem';

const { Header: AntHeader } = Layout;

const Header = () => {
  const headerMenuItems = [
    {
      label: 'Trang điểm',
      key: '1',
      children: [
        { label: 'Son môi', key: '1-1' },
        { label: 'Phấn nền', key: '1-2' },
        { label: 'Kẻ mắt', key: '1-3' }
      ]
    },
    {
      label: 'Chăm sóc da',
      key: '2',
      children: [
        { label: 'Sữa rửa mặt', key: '2-1' },
        { label: 'Kem dưỡng ẩm', key: '2-2' },
        { label: 'Mặt nạ', key: '2-3' }
      ]
    },
    {
      label: 'Nước hoa',
      key: '3',
      children: [
        { label: 'Nước hoa nam', key: '3-1' },
        { label: 'Nước hoa nữ', key: '3-2' }
      ]
    },
    { label: 'Ưu đãi', key: '4' },
    { label: 'Hệ thống đại lý', key: '5' },
    { label: 'Hệ thống chuỗi cửa hàng', key: '6' },
    { label: 'Đăng ký kinh doanh', key: '7' }
  ];

  return (
    <>
      <AntHeader className="header" style={{ padding: '0 100px'}}>
        <div className="header-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}>Thuan & Nhi Store</div>
          <Input
            placeholder="Tìm kiếm sản phẩm"
            prefix={<SearchOutlined />}
            style={{ width: '300px' }}
          />
          <div className="icons" style={{ display: 'flex', alignItems: 'center' }}>
            <Button type="link" icon={<HeartOutlined />} style={{ color: 'white' }}>Yêu thích</Button>
            <Button type="link" icon={<ShoppingCartOutlined />} style={{ color: 'white' }}>
              <Badge count={5} offset={[10, 0]}>
                <a style={{color:'white'}} >Giỏ hàng</a>
              </Badge>
            </Button>
            <Button type="link" style={{ color: 'white' }}>Đăng nhập/Đăng ký</Button>
            <Dropdown overlay={<Menu><MenuItems /></Menu>} placement="bottomRight">
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </div>
      </AntHeader>
      <Menu theme="dark" mode="horizontal" items={headerMenuItems}  style={{padding:"0 90                                                                                             px"}}/>
    </>
  );
};

export default Header;
