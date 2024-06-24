import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <Link to={`/product/${product.id}`}>Xem chi tiết</Link>
    </div>
  );
};

export default ProductItem;