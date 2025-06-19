import React from 'react';

const AppDemo: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white"> {/*유행어,역사,K-drama 퀴즈 소개*/}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-lg text-[#f5a9a9] font-medium mb-2">다양한 주제로 퀴즈를 도전하세요!</h2>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            너무나 어려운 한국어 <br className="md:hidden" />쉽고 재밌게
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            게임하듯 퀴즈를 통해 한국어 공부를 해봐요. <br className="md:hidden" />
            <br />
            틀린 문제는 오답 풀이를 통해, <br className="md:hidden" />
            복습하여 다시 공부할 수 있어요.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* 박스 1 */}
          <div className="w-full max-w-xs">
            <div className="bg-[#fbefef] rounded-3xl p-6 shadow-lg transform transition-all hover:scale-105">
              <div className="rounded-xl overflow-hidden bg-white shadow mb-4">
                <div className="px-4 py-3 bg-blue-100 flex items-center">
                  <div className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="text-sm text-blue-800 font-medium">유행어</div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">너의 헤어스타일은 느좋이야!</p>
                  <p className="text-sm text-gray-800 mb-3">Your hair style is so __ !</p>
                  <div className="flex justify-end">
                    
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600">
                간단한 문장으로 단어의 쓰임을<br /> 배워보세요.
              </p>
            </div>
          </div>

          {/* 박스 2 */}
          <div className="w-full max-w-xs">
            <div className="bg-[#fbefef] rounded-3xl p-6 shadow-lg transform transition-all hover:scale-105">
              <div className="rounded-xl overflow-hidden bg-white shadow mb-4">
                <div className="px-4 py-3 bg-blue-100 flex items-center">
                  <div className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="text-sm text-blue-800 font-medium">역사</div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-1">한국인이 한일전에 왜 이렇게 열광하는거야?</p>
                  <p className="text-sm text-gray-500">
                    1. 식민지 역사 2. 일본과의 축구 연맹 3. 아시아의 라이벌
                  </p>
                  
                </div>
              </div>
              <p className="text-center text-sm text-gray-600">
                다양한 퀴즈를 통해서 역사를 학습하세요.
              </p>
            </div>
          </div>

          {/* 박스 3 */}
          <div className="w-full max-w-xs hidden md:block">
            <div className="bg-[#fbefef] rounded-3xl p-6 shadow-lg transform transition-all hover:scale-105">
              <div className="rounded-xl overflow-hidden bg-white shadow mb-4">
                <div className="px-4 py-3 bg-blue-100 flex items-center">
                  <div className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="text-sm text-blue-800 font-medium">k-DRAMA</div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-1">다음중 한국 막장 드라마는 무엇일까?</p>
                  <p className="text-sm text-gray-500">
                    1.재벌 2세와 가난한 여주인공의 사랑<br />
                    2. 학교 로맨스<br />
                    3. 바람난 남편과 시어머니의 괴롭힘
                  </p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600">
                K-DRAMA에 대해<br /> 재미있게 배워보세요!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;
