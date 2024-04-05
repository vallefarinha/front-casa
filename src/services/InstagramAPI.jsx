import axios from 'axios';

const fetchInstagramData = async () => {
  try {
    const accessToken = 'TINSTAGRAM_APP_ACCESS_TOKEN';
    const response = await axios.get(`https://graph.instagram.com/me/media?fields=media_url&access_token=${accessToken}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Instagram data:', error);
    return []; 
  }
};

export default fetchInstagramData;
