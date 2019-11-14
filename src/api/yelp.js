import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
});