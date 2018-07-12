import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burgerbuilder-fcfac.firebaseio.com/'
});

export default instance;