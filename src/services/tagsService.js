import { apiUrl } from '../config.json';
import http from './httpService';

const apiEndpoint = `${apiUrl}/tags`;

export default function getPosts() {
  return http.get(apiEndpoint);
}
