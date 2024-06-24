import React from 'react';
import { Row, Col, Card } from 'antd';

const ProductList = () => {
  const dailyDeals = [
    {
      id: 1,
      name: 'Deal 1',
      imageUrl: 'https://product.hstatic.net/200000073977/product/pro_hop_3_mieng_5_673ea2b644594df098be1dcb2972c383_large_9731e743011647ea9922047a15087cb0_master.png',
      price: '$10',
    },
    {
      id: 2,
      name: 'Deal 2',
      imageUrl: 'https://product.hstatic.net/200000073977/product/pro_hop_3_mieng_4_2149a7556f884e93b5dc006724030a14_large_d3aba687ec504bb695dbb226befb13ce_master.png',
      price: '$15',
    },
    {
      id: 3,
      name: 'Deal 3',
      imageUrl: 'https://product.hstatic.net/200000073977/product/sp_1000x1000px-01_f53ab77b9ce7441ab954c9c62f7dc914_master.jpg',
      price: '$20',
    },
    {
      id: 4,
      name: 'Deal 4',
      imageUrl: 'https://product.hstatic.net/200000073977/product/hnh-vegan_94301963ad034584901de2368283166b_large.png',
      price: '$25',
    },
    {
      id: 5,
      name: 'Deal 5',
      imageUrl: 'https://product.hstatic.net/200000073977/product/banner_web_sp_1000x1000px_combo_chi_eyeliner_9e24f84a8f86464b8f031fdfabea643d_large.jpg',
      price: '$30',
    },
    {
      id: 6,
      name: 'Deal 6',
      imageUrl: 'https://product.hstatic.net/200000073977/product/eyeliner_2ae3537bb9514ab2933960cf380113ed_large.png',
      price: '$20',
    },
  ];

  const productsForYou = [
    {
      id: 1,
      name: 'Product 1',
      imageUrl: 'https://product.hstatic.net/200000073977/product/combo_iconic___phan_ma_264e42b11d784ae0819ad1a29a6d23f8_large.png',
      price: '$50',
    },
    {
      id: 2,
      name: 'Product 2',
      imageUrl: 'https://product.hstatic.net/200000073977/product/premium-rice-mask_-_mua_2_tang_1_7478ee58acd7426b805e585ec98109b2_large.png',
      price: '$45',
    },
    {
      id: 3,
      name: 'Product 3',
      imageUrl: 'https://product.hstatic.net/200000073977/product/banner_web_sp_1000x1000px-iconic_3_tone_ccd36f85cdad49328abf76833da5a0fe_large.jpg',
      price: '$55',
    },
    {
      id: 4,
      name: 'Product 4',
      imageUrl: 'https://product.hstatic.net/200000073977/product/pro_50ml_1_3c5bf54f1f754c9eb01b951fe18dff52.png',
      price: '$60',
    },
    {
      id: 5,
      name: 'Product 5',
      imageUrl: 'https://product.hstatic.net/200000073977/product/pro_50ml_4_0cc6637765e3430993c873b85c21f0b5.png',
      price: '$65',
    },
    {
      id: 6,
      name: 'Product 6',
      imageUrl: 'https://product.hstatic.net/200000073977/product/pro_no1_nautunhien_1_6a4ee823fa0c435aaa79c9dc3510e939_large.jpg',
      price: '$45',
    },
  ];

  return (
    <Row justify="space-between" style={{ marginTop: '20px' }}>
      <Col span={24} style={{padding:20}}>
        <h2>Ưu đãi mỗi ngày</h2>
        <Row gutter={[16, 16]}>
          {dailyDeals.map(deal => (
            <Col span={4} key={deal.id}>
              <Card
                hoverable
                cover={<img alt={deal.name} src={deal.imageUrl} style={{ height: '150px', objectFit: 'cover' }} />}
              >
                <Card.Meta title={deal.name} description={deal.price} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
      <Col span={24} style={{padding:20}}>
        <h2>Sản phẩm dành cho bạn</h2>
        <Row gutter={[16, 16]}>
          {productsForYou.map(product => (
            <Col span={4} key={product.id}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.imageUrl} style={{ height: '150px', objectFit: 'cover' }} />}
              >
                <Card.Meta title={product.name} description={product.price} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default ProductList;