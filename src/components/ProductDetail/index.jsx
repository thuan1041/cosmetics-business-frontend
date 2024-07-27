import React, { useState, useEffect } from 'react';
import { Carousel, Image, Button, Select, Row, Col, Divider } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const { Option } = Select;

const ProductDetail = () => {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState('');
    const [product, setProductDetail] = useState();
    const [quantity, setQuantity] = useState(1); // Initial quantity state

    useEffect(() => {
        const getProductDetail = async () => {
            try {
                const rs = await axios.get(`http://localhost:8080/api/products/${id}`);
                if (rs.data.errorCode === 0) {
                    setProductDetail(rs.data.data);
                }
            } catch (error) {
                console.log('Failed to fetch product detail: ', error);
            }
        }
        getProductDetail();
    }, [id]);

    const handleImageHover = (image) => {
        setSelectedImage(image);
    };

    const handleAddToCart = async () => {
        try {
            await axios.post('http://localhost:8080/api/shopping-cart-items/add', {
                productId: id,
                quantity,
                userId: "thuan1045"
            });
            alert('Added to cart successfully');
        } catch (error) {
            console.error('Failed to add to cart: ', error);
        }
    };

    const handleQuantityChange = (value) => {
        setQuantity(value);
    };

    return (
        <>
        {product && (
            <div className="product-detail">
                <Row gutter={12}>
                    <Col span={10}>
                        <Carousel autoplay>
                            {product.imagePaths.map((image, index) => (
                                <div key={index}>
                                    <Image
                                        src={image}
                                        alt={`Product Image ${index}`}
                                        preview={{ maskClassName: 'custom-mask' }}
                                        style={{ width: '100%', height: '400px' }}
                                    />
                                </div>
                            ))}
                        </Carousel>
                        <div className="thumbnail-list">
                            {product.imagePaths.map((image, index) => (
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
                    <Col span={14}>
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
                            <Select
                                defaultValue={1}
                                style={{ width: 120, marginTop: '20px' }}
                                onChange={handleQuantityChange}
                            >
                                {[...Array(10).keys()].map((num) => (
                                    <Option key={num + 1} value={num + 1}>
                                        {num + 1}
                                    </Option>
                                ))}
                            </Select>
                            <Button type="primary" style={{ marginTop: '20px' }} onClick={handleAddToCart}>
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
        )}
        </>
    );
};

export default ProductDetail;
