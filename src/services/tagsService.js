import appConfig from 'config';
import http from './httpService';

const apiEndpoint = `${appConfig.apiUrl}/tags`;

export default function getPosts() {
  return http.get(apiEndpoint);
}
