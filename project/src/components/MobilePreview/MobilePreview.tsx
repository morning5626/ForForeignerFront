import React from 'react';

interface MobilePreviewProps {
  title: string;
  description: string[];
  imageSrc?: string;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="max-w-sm mx-auto">
              <div className="relative w-64 h-[500px] mx-auto">
                {/* 휴대폰 프레임 */}
                <div className="absolute inset-0 bg-gray-200 rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-300">
                  {/* 화면 콘텐츠 */}
                  <div className="h-full bg-blue-100 flex flex-col">
                    {/* 이름 표시줄 */}
                    <div className="bg-blue-200 px-4 py-2 flex items-center justify-between">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                      <div className="text-xs text-black-600 font-medium">김상혁</div>
                      <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    </div>
                    
                    {/* 채팅 */}
<div className="flex-1 p-4 space-y-4 overflow-y-auto">
  {/* 👤 생축! + 프로필 */}
  <div className="flex items-start gap-2 max-w-[80%]">
    {/* 프로필 이미지 */}
    <img
      src="https://i.pravatar.cc/40?img=12" //  원하는 이미지 URL로 교체 가능
      alt="Profile"
      className="w-6 h-6 rounded-full"
    />
    {/* 말풍선 */}
    <div className="bg-white p-3 rounded-lg">
      <p className="text-xs text-black-700">
        생축!! <br></br>오늘 놀러 ㄱㄱ?
      </p>
    </div>
  </div>

  {/* 답장 메시지 (오른쪽 말풍선) */}
  <div className="bg-yellow-300 p-3 rounded-lg max-w-[80%] ml-auto">
    <p className="text-xs text-black">상혁아,<br></br> 그게 무슨 말이야...?</p>
  </div>
</div>

                    
                    {/* 키보드 */}
                    <div className="bg-gray-200 p-1">
                      <div className="grid grid-cols-10 gap-1">
                        {['ㅂ','ㅈ','ㄷ','ㄱ','ㅅ','ㅛ','ㅕ','ㅑ','ㅐ','ㅔ',
                          'ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ',
                          'ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ'].map((key) => (
                          <div key={key} className="bg-white rounded text-[8px] h-8 flex items-center justify-center">
                            {key}
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex justify-between mt-1">
                        <div className="bg-gray-300 rounded px-2 py-1 text-[8px]">한/영</div>
                        <div className="bg-white rounded px-4 py-1 text-[8px]">스페이스</div>
                        <div className="bg-gray-300 rounded px-2 py-1 text-[8px]">확인</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              {title}
            </h2>
            
            <div className="space-y-4 mb-8">
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            <button className="px-6 py-3 bg-[#f5a9a9] text-white rounded-lg hover:bg-opacity-90 transition-all transform hover:translate-y-[-2px]">
              퀴즈 시작하기!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePreview;