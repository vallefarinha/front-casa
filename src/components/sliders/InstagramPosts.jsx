import React, { useState, useEffect } from "react";
import InstagramAPI from "../../services/InstagramAPI";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowButton from '../arrowbuttons/ArrowButton';

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataPosts = await InstagramAPI();
      const posts = dataPosts.data.data;
      const last5Posts = posts.slice(0, 5);
      setPosts(last5Posts);
    };

    fetchData();
  }, []);

  const CustomPrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="prev-arrow absolute bottom-[-45px] left-[40%] lg:left-[44%] z-10">
      <ArrowButton rotate="left" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div onClick={onClick} className="next-arrow absolute bottom-[-45px] right-[40%]  lg:right-[44%] z-10">
      <ArrowButton />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  const handlePostClick = (permalink) => {
    window.open(permalink, "_blank"); 
  };

  return (
    <div className="container mx-auto mt-10 mb-16">
      <h3 className="text-sm text-LetterColor pl-3 ">Nuestras redes sociales</h3>
      <h1 className="text-xl md:text-3xl text-LetterColor font-poppinsSemiBold mb-5 text-start pl-3">Acompaña nuestras <span className="text-primaryColor font-poppinsBold">actividades</span></h1>
      <Slider {...settings}>
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative overflow-hidden rounded-lg group w-auto h-[338px]  bg-inherit shadow-xl shadow-LetterColor cursor-pointer"
            onClick={() => handlePostClick(post.permalink)}
          >
            {post.media_type === "IMAGE" && (
              <div className="relative w-full h-full flex justify-around">
                <img
                  src={post.media_url}
                  alt={post.caption}
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-LetterColor opacity-0 transition-opacity group-hover:opacity-90 flex items-center justify-center p-4">
                  <p className="text-white text-center text-sm">{post.caption}</p>
                </div>
              </div>
            )}
            {post.media_type === "VIDEO" && (
              <div className="relative w-full h-full flex justify-around">
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  className="object-cover w-auto h-[100%]"
                >
                  <source src={post.media_url} type="video/mp4" />
                  Tu navegador no soporta este video.
                </video>
                <div className="absolute top-1/4 left-0 right-0 bg-LetterColor opacity-0 transition-opacity group-hover:opacity-90 p-4">
                  <p className="text-white text-center text-sm">{post.caption}</p>
                </div>
              </div>
            )}
            {post.media_type === "CAROUSEL_ALBUM" && (
              <div className="relative w-full h-full flex justify-around">
                <img
                  src={post.media_url}
                  alt={post.caption}
                  className="object-cover w-auto h-[100%]"
                />
                <div className="absolute inset-0 bg-LetterColor opacity-0 transition-opacity group-hover:opacity-90 flex items-center justify-center p-4">
                  <p className="text-white text-center text-sm">{post.caption}</p>
                </div>
              </div>
            )}
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramPosts;
