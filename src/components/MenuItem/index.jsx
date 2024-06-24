import React from 'react';
import { Menu } from 'antd';
import { UserOutlined, ShoppingCartOutlined, HeartOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const menuItems = [
  {
    label: 'Tài khoản của tôi',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: 'Sản phẩm yêu thích',
    key: '2',
    icon: <HeartOutlined />,
  },
  {
    label: 'Giỏ hàng của tôi',
    key: '3',
    icon: <ShoppingCartOutlined />,
  },
  {
    label: 'Cài đặt',
    key: '4',
    icon: <SettingOutlined />,
  },
  {
    label: 'Đăng xuất',
    key: '5',
    icon: <LogoutOutlined />,
  },
];

const MenuItems = () => {
  return menuItems.map((item) => <Menu.Item key={item.key} icon={item.icon}>{item.label}</Menu.Item>);
};

export default MenuItems;