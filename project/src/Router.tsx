import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // ✅ 메인 페이지

import Signup from './pages/Signup';
import Login from './pages/Login';
import Findaccount from './pages/Findaccount';

export default function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />                {/* 메인 페이지 */}
        
        <Route path="/signup" element={<Signup />} />       {/* 회원가입 */}
        <Route path="/login" element={<Login />} />         {/* 로그인 */}
        <Route path="/find" element={<Findaccount />} />    {/* 아이디/비번 찾기 */}
      </Routes>
    </BrowserRouter>
  );
}
