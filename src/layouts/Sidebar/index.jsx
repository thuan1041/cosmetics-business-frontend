// import React from 'react';
// import { Layout, Menu } from 'antd';
// import {
//   UserOutlined,
//   ShoppingCartOutlined,
//   HeartOutlined,
//   SearchOutlined,
// } from '@ant-design/icons';

// const { Sider } = Layout;

// const Sidebar = () => {
//   const handleMenuClick = (e) => {
//     console.log('Menu item clicked:', e);
//     // Xử lý logic khi click vào menu item
//   };

//   return (
//     <Sider width={300} className="site-layout-background">
//       <Menu
//         mode="inline"
//         defaultSelectedKeys={['1']}
//         style={{ height: '100%', borderRight: 0 }}
//         onClick={handleMenuClick}
//       >
//         <Menu.Item key="1" icon={<UserOutlined />}>
//           Trang điểm
//         </Menu.Item>
//         <Menu.Item key="2" icon={<UserOutlined />}>
//           Chăm sóc da
//         </Menu.Item>
//         <Menu.Item key="3" icon={<UserOutlined />}>
//           Nước hoa
//         </Menu.Item>
//         <Menu.Item key="4" icon={<HeartOutlined />}>
//           Ưu đãi
//         </Menu.Item>
//         <Menu.Item key="5" icon={<UserOutlined />}>
//           Hệ thống đại lý
//         </Menu.Item>
//         <Menu.Item key="6" icon={<UserOutlined />}>
//           Hệ thống chuỗi cửa hàng
//         </Menu.Item>
//         <Menu.Item key="7" icon={<UserOutlined />}>
//           Đăng ký kinh doanh
//         </Menu.Item>
//       </Menu>
//     </Sider>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Layout, Menu, List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  const productList = [
    { id: 1, name: 'Sản phẩm A', image: 'https://product.hstatic.net/200000073977/product/pro_hop_3_mieng_5_673ea2b644594df098be1dcb2972c383_large_9731e743011647ea9922047a15087cb0_master.png', price: 100000, sold: 20 },
    { id: 2, name: 'Sản phẩm B', image: 'https://via.placeholder.com/150', price: 150000, sold: 15 },
    { id: 3, name: 'Sản phẩm C', image: 'https://via.placeholder.com/150', price: 200000, sold: 10 },
    { id: 4, name: 'Sản phẩm D', image: 'https://via.placeholder.com/150', price: 180000, sold: 25 },
    { id: 5, name: 'Sản phẩm E', image: 'https://via.placeholder.com/150', price: 120000, sold: 18 },
  ];

  const handleMenuClick = (e) => {
    console.log('Menu item clicked:', e);
    // Xử lý logic khi click vào menu item
  };

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
        onClick={handleMenuClick}
      >
        <List
          dataSource={productList}
          renderItem={(item) => (
            <Menu.Item key={item.id} icon={<Avatar src={item.image} />}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={{ flex: 1 }}>
                  <div>{item.name}</div>
                  <div>Giá: {item.price.toLocaleString()} VNĐ</div>
                </div>
                <div>Số lượt mua: {item.sold}</div>
              </div>
            </Menu.Item>
          )}
        />
      </Menu>
    </Sider>
  );
};

export default Sidebar;

