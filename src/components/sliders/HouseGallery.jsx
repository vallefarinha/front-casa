import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ArrowButton from '../arrowbuttons/ArrowButton';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1020/1000/600/',
    thumbnail: 'https://picsum.photos/id/1020/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1021/1000/600/',
    thumbnail: 'https://picsum.photos/id/1021/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1022/1000/600/',
    thumbnail: 'https://picsum.photos/id/1022/250/150/',
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
      />
    </div>
  );
};

export default HouseGallery;
