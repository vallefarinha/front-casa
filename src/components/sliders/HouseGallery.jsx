import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ArrowButton from '../arrowbuttons/ArrowButton';
import casa1 from '../../assets/images/casa/20240402_201015.png';
import casa2 from '../../assets/images/casa/IMG_6272.png';
import casa4 from '../../assets/images/casa/IMG_6274.png';
import casa5 from '../../assets/images/casa/IMG_6275.png';
import casa6 from '../../assets/images/casa/IMG_6277.png';
import casa7 from '../../assets/images/casa/IMG_6279.png';
import casa8 from '../../assets/images/casa/IMG_6282.png';
import casa9 from '../../assets/images/casa/IMG_6286.png';
import casa10 from '../../assets/images/casa/IMG_6291.png';
import casa11 from '../../assets/images/casa/IMG_6292.png';
import casa12 from '../../assets/images/casa/IMG_6293.png';
import casa13 from '../../assets/images/casa/IMG_6295.png';
import casa14 from '../../assets/images/casa/IMG_6297.png';
import casa15 from '../../assets/images/casa/IMG_6299.png';

const images = [
  {
    original: casa1,
    thumbnail: casa1,
  },
  {
    original: casa2,
    thumbnail: casa2,
  },
  {
    original: casa4,
    thumbnail:casa4,
  },
  {
    original: casa5,
    thumbnail: casa5,
  },
  {
    original: casa6,
    thumbnail: casa6,
  },
  {
    original: casa7,
    thumbnail: casa7,
  },
  {
    original: casa8,
    thumbnail: casa8,
  },
  {
    original: casa9,
    thumbnail: casa9,
  },
  {
    original: casa10,
    thumbnail: casa10,
  },
  {
    original: casa11,
    thumbnail: casa11,
  },
  {
    original: casa12,
    thumbnail: casa12,
  },
  {
    original: casa13,
    thumbnail: casa13,
  },
  {
    original: casa14,
    thumbnail: casa14,
  },
  {
    original: casa15,
    thumbnail: casa15,
  },
];

const CustomLeftNav = ({ onClick, disabled }) => (
  <div
    onClick={onClick}
    disabled={disabled}
    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 cursor-pointer z-10"
  >
    <ArrowButton rotate="left"/>
  </div>
);

const CustomRightNav = ({ onClick, disabled }) => (
  <div
    onClick={onClick}
    disabled={disabled}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 cursor-pointer z-10"
  >
    <ArrowButton />
  </div>
);

const HouseGallery = () => {
  return (
    <div className="gallery-container relative">
      <ImageGallery
        items={images}
        showNav={true}
        showBullets={false}
        renderLeftNav={(onClick, disabled) => (
          <CustomLeftNav onClick={onClick} disabled={disabled} />
        )}
        renderRightNav={(onClick, disabled) => (
          <CustomRightNav onClick={onClick} disabled={disabled} />
        )}
        renderItem={renderItem}
      />
    </div>
  );
};

export default HouseGallery;

const renderItem = (item) => {
  return (
    <div className="image-gallery-image">
      <img
        src={item.original}
        alt={item.originalAlt}
        srcSet={item.srcSet}
        sizes={item.sizes}
        style={{ objectFit: 'cover', objectPosition: 'center', maxWidth: '100%', maxHeight: '100%' }}
      />
    </div>
  );
};