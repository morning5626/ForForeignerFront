// src/components/Logo.tsx
import React from 'react';
import LogoImage from '../assets/LogoImage.jpg'; // ← 실제 로고 이미지 경로로 변경

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <img src={LogoImage} alt="Logo" className="w-30 h-10" /> {/*길이, 넓이 설정*/}
      
    </div>
  );
};

export default Logo;
