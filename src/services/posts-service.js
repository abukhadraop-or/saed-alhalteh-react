import appConfig from 'config';
import http from './http-service';

const apiEndpoint = `${appConfig.apiUrl}/articles`;

/**
 * Get posts from the API.
 *
 * @return {Promise} Promise to get the posts from the API.
 */
const getPosts = () => {
  return http.get(apiEndpoint);
};

export default getPosts;
