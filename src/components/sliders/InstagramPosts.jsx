import React, { useState, useEffect } from 'react';
import fetchInstagramData from '../../services/InstagramAPI';

const InstagramPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchInstagramData();
        setPosts(data);
      };
  
      fetchData();
    }, []);

  return (
    <div>
      <h1>Últimos posts de Instagram</h1>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <img src={post.media_url} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InstagramPosts