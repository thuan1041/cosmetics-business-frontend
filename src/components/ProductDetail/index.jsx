import React, { useState } from 'react';
import { Carousel, Image, Button, Select, Row, Col, Divider } from 'antd';
import { useParams } from 'react-router-dom';
import './index.css';

const { Option } = Select;

const ProductDetail = () => {
    const { id } = useParams(); // Để lấy id sản phẩm từ URL, cần cấu hình trong React Router
    const [selectedImage, setSelectedImage] = useState('');

    // Giả sử dữ liệu sản phẩm, bạn có thể fetch từ API hoặc lấy từ mock data
    const product = {
        id: id,
        name: 'Tên sản phẩm',
        price: '1.000.000 VND',
        images: [
            'https://product.hstatic.net/200000073977/product/pro_hop_3_mieng_5_673ea2b644594df098be1dcb2972c383_large_9731e743011647ea9922047a15087cb0_master.png',
            'https://product.hstatic.net/200000073977/product/pro_hop_3_mieng_2_13789ed42ac14f279f4dfd35677004c5_large_6b3a33cfeb2a425f8db80c5857e54552_master.png',
            'https://product.hstatic.net/200000073977/product/premium-rice-mask_-_mua_2_tang_1_7478ee58acd7426b805e585ec98109b2_master.png',
            'https://product.hstatic.net/200000073977/product/pro_hop_3_mieng_4_2149a7556f884e93b5dc006724030a14_large_d3aba687ec504bb695dbb226befb13ce_master.png',
            'https://product.hstatic.net/200000073977/product/premium-rice-mask_-_mua_2_tang_1_7478ee58acd7426b805e585ec98109b2_master.png',
            'https://product.hstatic.net/200000073977/product/pro_hop_3_mieng_4_2149a7556f884e93b5dc006724030a14_large_d3aba687ec504bb695dbb226befb13ce_master.png',
        ],
        types: ['Loại 1', 'Loại 2', 'Loại 3'],
        details: "Thông tin chi tiết sản phẩm"
    };

    const handleImageHover = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="product-detail">
            <Row gutter={12}>
                <Col span={10}>
                    <Carousel autoplay>
                        {product.images.map((image, index) => (
                            <div key={index}
                            >
                                <Image
                                    src={image}
                                    alt={`Product Image ${index}`}
                                    preview={{ maskClassName: 'custom-mask' }}
                                    style={{ width: '100%', height: '600px' }}

                                />
                            </div>
                        ))}
                    </Carousel>
                    <div className="thumbnail-list" >
                        {product.images.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index}`}
                                onClick={() => handleImageHover(image)}
                                className={selectedImage === image ? 'active-thumbnail' : 'thumbnail'}
                                style={{ width: '100%', height: '100px' }}
                            />
                        ))}
                    </div>
                </Col>
                <Col span={12}>
                    <div className="product-info">
                        <h2>{product.name}</h2>
                        <h3>{product.price}</h3>
                        <Select placeholder="Chọn loại sản phẩm" style={{ width: '100%' }}>
                            {product.types.map((type, index) => (
                                <Option key={index} value={type}>
                                    {type}
                                </Option>
                            ))}
                        </Select>
                        <Button type="primary" style={{ marginTop: '20px' }}>
                            Thêm vào giỏ hàng
                        </Button>
                    </div>
                    <Divider />
                    <div className="product-details">
                        <h3>Thông tin chi tiết sản phẩm</h3>
                        <p>{product.details}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ProductDetail;