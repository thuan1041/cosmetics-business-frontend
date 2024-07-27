import React, { useState, useEffect } from 'react';
import { Button, Pagination, Card, Row, Col } from 'antd';
import 'antd/dist/reset.css';
import { Link } from 'react-router-dom';
const { Meta } = Card;

const ProductPagination = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Số sản phẩm trên mỗi trang
  const totalProducts = products.length; // Tổng số sản phẩm từ props

  useEffect(() => {
    // Khi currentPage thay đổi, có thể thực hiện các hành động cần thiết
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Tính chỉ mục của sản phẩm hiển thị
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container mx-auto px-4">
      <Row gutter={[16, 16]} justify="center">
        {currentItems.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={5} key={product.id}>
            <Link to={`/product/${product.id}`}>
              <Card
                hoverable
                cover={<img alt={product.name} src={product.imagePaths[0]} className="object-cover h-32 w-full" />}
                actions={[
                  <Button type="primary" block>
                    Add to Cart
                  </Button>
                ]}
                className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Meta
                  title={<div className="text-sm font-semibold">{product.name}</div>}
                  description={
                    <div className="text-xs text-gray-600">
                      <p>Category: {product.category}</p>
                      <p className="font-bold">Price: ${product.price.toFixed(2)}</p>
                    </div>
                  }
                />
              </Card>
            </Link>
          </Col>
        ))}

      </Row>
      <Row justify="center" style={{ margin: 20 }}>
        <Pagination
          current={currentPage}
          total={totalProducts}
          pageSize={itemsPerPage}
          onChange={handlePageChange}
          showSizeChanger={false}
          className="mt-8"
        />
      </Row>
    </div>
  );
};

export default ProductPagination;