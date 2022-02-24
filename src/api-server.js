import axios from 'axios';

export default class API {
  static imageSend(body) {
    return axios.post('https://self-check-api.shop:8001/api/object', body);
  }

  static ocrSend(body) {
    return axios.post('https://self-check-api.shop:8001/api/ocr', body);
  }

  static sizeSend(body) {
    return axios.post('https://self-check-api.shop:8001/api/size', body);
  }

  static volumnSend(body) {
    return axios.post('https://self-check-api.shop:8001/api/volumn', body);
  }

  static adminSend() {
    return axios.get('https://self-check-api.shop/api/admin/');
  }
}
