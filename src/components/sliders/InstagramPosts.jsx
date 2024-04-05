import React, { useState, useEffect } from "react";
import InstagramAPI from "../../services/InstagramAPI";

const InstagramPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await InstagramAPI();
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Últimos posts de Instagram</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="relative overflow-hidden rounded-lg group w-auto h-[70%] bg-inherit shadow-xl shadow-LetterColor"
          >
            {post.media_type === "IMAGE" && (
              <div className="relative w-full h-full flex justify-around">
                <img
                  src={post.media_url}
                  alt={post.caption}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-LetterColor opacity-0 transition-opacity group-hover:opacity-90 flex items-center justify-center">
                  <p className="text-white text-center">{post.caption}</p>
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
                <div className="absolute top-1/4 left-0 right-0 bg-LetterColor opacity-0 transition-opacity group-hover:opacity-90">
                  <p className="text-white text-center">{post.caption}</p>
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
                <div className="absolute inset-0 bg-LetterColor opacity-0 transition-opacity group-hover:opacity-90 flex items-center justify-center">
                  <p className="text-white text-center">{post.caption}</p>
                </div>
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramPosts;
