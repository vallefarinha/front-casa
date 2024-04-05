import axios from 'axios';

const InstagramAPI = async () => {
  try {
    const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
    const response = await axios.get(`https://graph.instagram.com/me/media?fields=media_url,caption,media_type&access_token=${accessToken}`);
    const posts = response.data.data;

    const last5Posts = posts.slice(0, 5);

    return last5Posts;
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    return []; 
  }
};

export default InstagramAPI;
