import appConfig from 'config';
import http from './httpService';

const apiEndpoint = `${appConfig.apiUrl}/articles`;

export default function getPosts() {
  return http.get(apiEndpoint);
}
