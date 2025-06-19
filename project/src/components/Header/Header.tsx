import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../../types';
import Logo from '../Logo';


interface HeaderProps {
  links: Link[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); // 언어 드롭다운 상태

  // 언어 변경 함수
  const changeLanguage = (lang: string) => {
    const frame = document.querySelector("iframe.goog-te-menu-frame") as HTMLIFrameElement;
    if (!frame) {
      alert("Google 번역 기능이 아직 로드되지 않았습니다.");
      return;
    }

    const innerDoc = frame.contentDocument || frame.contentWindow?.document;
    const langLinks = innerDoc?.querySelectorAll(".goog-te-menu2-item span.text");

    langLinks?.forEach((el) => {
      if (el.textContent?.includes(lang)) {
        (el as HTMLElement).click();
      }
    });
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* 로고 */}
        <RouterLink to="/" className="flex items-center">
          <Logo />
        </RouterLink>

        {/* 네비게이션 링크 (데스크탑용) */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <RouterLink
              key={link.id}
              to={link.url}
              className="text-gray-700 hover:text-[#f5a9a9] transition-colors"
            >
              {link.title}
            </RouterLink>
          ))}

          {/* 언어 선택 드롭다운 */}
          <div className="relative">
            <button
              className="bg-white border border-gray-300 px-3 py-1 rounded-md flex items-center"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <Globe className="w-4 h-4 mr-1" />
              <span>언어 선택</span>
            </button>
            {isLangOpen && (
              <div className="absolute bg-white shadow-md mt-2 rounded w-28 z-50">
                <button
                  className="w-full px-4 py-2 hover:bg-gray-100 text-left"
                  onClick={() => changeLanguage('English')}
                >
                  영어
                </button>
                <button
                  className="w-full px-4 py-2 hover:bg-gray-100 text-left"
                  onClick={() => changeLanguage('Japanese')}
                >
                  일본어
                </button>
                <button
                  className="w-full px-4 py-2 hover:bg-gray-100 text-left"
                  onClick={() => changeLanguage('Korean')}
                >
                  한국어
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <RouterLink
                key={link.id}
                to={link.url}
                className="text-gray-700 hover:text-[#f5a9a9] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </RouterLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
