import React, { useState, useEffect } from "react";
import NewCard from "../components/cards/NewCard";
import InstagramAPI from "../services/InstagramAPI";

const OurBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataPosts = await InstagramAPI();
        setPosts(dataPosts);
      } catch (error) {
        console.error("Error fetching Instagram data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-wrap md:gap-5 lg:gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className=" flex overflow-hidden rounded-lg group w-[350px] h-[170px] lg:w-[476px] lg:h-[238px] bg-inherit shadow-xl shadow-LetterColor cursor-pointer mx-auto"
            onClick={() => handlePostClick(post.permalink)}
          >
            {post.media_type === "IMAGE" && (
              <div className="flex w-full">
                <div className="w-1/2">
                  <img
                    src={post.media_url}
                    alt={post.caption}
                    className="object-contain w-full h-full "
                  />
                </div>
                <div className="w-1/2 flex py-3 px-4 overflow-y-auto">
                  <p className="text-LetterColor font-poppinsRegular text-start text-sm  flex flex-wrap">
                    {post.caption}
                  </p>
                </div>
              </div>
            )}
            {post.media_type === "VIDEO" && (
              <div className="flex w-full">
                <div className="w-1/2">
                  <video
                    controls
                    autoPlay
                    muted
                    loop
                    className="object-contain w-full h-[100%]"
                  >
                    <source src={post.media_url} type="video/mp4" />
                    Tu navegador no soporta este video.
                  </video>
                </div>
                <div className="w-1/2 flex py-3 px-4 overflow-y-auto">
                  <p className="text-LetterColor font-poppinsRegular text-start text-sm  flex flex-wrap">
                    {post.caption}
                  </p>
                </div>
              </div>
            )}

            {post.media_type === "CAROUSEL_ALBUM" && (
              <div className="flex w-full">
                <div className=" w-1/2 ">
                  <img
                    src={post.media_url}
                    alt={post.caption}
                    className="object-contain w-full h-full "
                  />
                </div>
                <div className="w-1/2 flex py-3 px-4 overflow-y-auto">
                  <p className="text-LetterColor font-poppinsRegular text-start text-sm  flex flex-wrap">
                    {post.caption}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
