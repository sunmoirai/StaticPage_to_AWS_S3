import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 스타일이 있다면 유지, 없다면 이 줄 삭제 가능
import App from './App';

// HTML 파일(public/index.html)에 있는 id가 'root'인 요소를 찾습니다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// React 앱을 strict mode(엄격 모드)로 실행합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);