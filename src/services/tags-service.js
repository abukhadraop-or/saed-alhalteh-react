import appConfig from 'config';
import http from './http-service';

const apiEndpoint = `${appConfig.apiUrl}/tags`;

/**
 * Get posts from the API.
 *
 * @return {Promise} Promise to get the tags from the API.
 */
const getTags = () => {
  return http.get(apiEndpoint);
};

export default getTags;
