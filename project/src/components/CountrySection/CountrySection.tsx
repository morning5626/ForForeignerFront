import React from 'react';

interface CountrySectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
}

const CountrySection: React.FC<CountrySectionProps> = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="w-full py-8 flex justify-center items-center">
      {/* 이미지 + 텍스트가 포함된 박스 */}
      <div className="relative w-[85%] h-[500px] md:h-[600px] lg:h-[700px]">
        <img
          src={imageSrc}
          alt="Background"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-white text-lg md:text-2xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CountrySection;
