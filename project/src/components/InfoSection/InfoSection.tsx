import React, { useState } from 'react';
import {
  ArrowRight,
  MessageCircle,
  Sprout,
  BookOpen,
  User,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface InfoSectionProps {
  title: string;
  subtitle: string;
  description: string[];
  buttonText: string;
  buttonUrl: string;
  reverse?: boolean;
  showFeatureBoxes?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonUrl,
  reverse = false,
  showFeatureBoxes = false,
}) => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const correctAnswerIndex = 2; // '③ 얼죽아'

  const features = [
    {
      title: '자유게시판',
      desc: ['당신의 생각을', '자유롭게 나눠보세요!'],
      icon: <MessageCircle className="w-5 h-5 text-[#f5a9a9]" />,
      link: '/board/free',
    },
    {
      title: '뉴비게시판',
      desc: ['한국이 처음이라 어려운 당신,', '여기서 레벨업해요!'],
      icon: <Sprout className="w-5 h-5 text-[#f5a9a9]" />,
      link: '/board/newbie',
    },
    {
      title: '정보게시판',
      desc: ['한국 생활의 팁과 정보를', '여기 다 모였다!'],
      icon: <BookOpen className="w-5 h-5 text-[#f5a9a9]" />,
      link: '/board/info',
    },
    {
      title: 'MY게시판',
      desc: ['나만의 공간과 기록', '한눈에 확인해요!'],
      icon: <User className="w-5 h-5 text-[#f5a9a9]" />,
      link: '/board/my',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fbefef]">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          } items-center gap-8 md:gap-16`}
        >
          {/* 텍스트 영역 */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              {title}
            </h2>
            <h3 className="text-xl md:text-2xl text-gray-700 mb-6">
              {subtitle}
            </h3>

            <div className="space-y-4 mb-8">
              {description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <a
              href={buttonUrl}
              className="inline-flex items-center px-6 py-3 bg-[#f5a9a9] text-white rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1"
            >
              {buttonText}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          {/* 시각 영역 */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-md h-[440px] bg-pink-150 rounded-xl overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5a9a9] to-pink-300 opacity-20"></div>

              {showFeatureBoxes ? (
                <div className="absolute inset-0 grid grid-cols-2 gap-4 p-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white bg-opacity-80 rounded-lg shadow p-4 flex flex-col items-start cursor-pointer transform transition-all hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
                      onClick={() => navigate(feature.link)}
                    >
                      <div className="mb-2">{feature.icon}</div>
                      <h4 className="text-sm font-semibold text-gray-800">
                        {feature.title}
                      </h4>
                      {feature.desc.map((line, i) => (
                        <p key={i} className="text-xs text-gray-600">
                          {line}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] transition-all transform hover:scale-105">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
                      🧊 한국 문화 퀴즈
                    </h3>
                    <p className="text-base font-medium text-gray-700 mb-4 text-center">
                      Q. 한겨울에도 아이스 아메리카노를 마시는 <br></br>한국인들을 부르는 말은?
                    </p>
                    <ul className="space-y-3">
                      {['얼음족', '냉커족', '얼죽아', '시원파'].map((answer, index) => {
                        const isCorrect = selectedAnswer !== null && index === correctAnswerIndex;
                        const isSelected = selectedAnswer === index;
                        return (
                          <li
                            key={index}
                            onClick={() => setSelectedAnswer(index)}
                            className={`px-4 py-2 rounded-lg cursor-pointer border transition-all
                              ${
                                isSelected
                                  ? isCorrect
                                    ? 'bg-green-100 border-green-500 text-green-700 font-semibold'
                                    : 'bg-red-100 border-red-500 text-red-700 font-semibold'
                                  : 'bg-gray-50 hover:bg-pink-100 hover:border-pink-300'
                              }`}
                          >
                            {index + 1}. {answer}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
