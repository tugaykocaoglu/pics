import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID CTzQnxHz20KX0cTBzQT8UCL5ebjeeYSWVyywViT0_oA',
  },
});
