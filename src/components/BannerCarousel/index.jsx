import React from 'react';
import { Carousel } from 'antd';

const BannerCarousel = () => {
  const bannerImages = [
    'https://theme.hstatic.net/200000073977/1001213648/14/slide_3_img.jpg?v=768',
    'https://theme.hstatic.net/200000073977/1001213648/14/slide_1_img.jpg?v=768',
    'https://theme.hstatic.net/200000073977/1001213648/14/slide_4_img.jpg?v=768',
    'https://theme.hstatic.net/200000073977/1001213648/14/slide_2_img.jpg?v=768',
  ];

  return (
    <Carousel autoplay>
      {bannerImages.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Banner ${index}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default BannerCarousel;