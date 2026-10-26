import axios from 'axios';

// 서버 주소는 환경변수(.env.development 등)에서 읽는다. 없으면 로컬 기본값 사용.
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL || 'http://localhost:8081';
axios.defaults.withCredentials = true; // 쿠키 전송 설정

export default axios;