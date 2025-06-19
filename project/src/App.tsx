import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import InfoSection from './components/InfoSection/InfoSection';
import AppDemo from './components/AppDemo/AppDemo';
import FeatureSection from './components/FeatureSection/FeatureSection';
import MobilePreview from './components/MobilePreview/MobilePreview';
import CountrySection from './components/CountrySection/CountrySection';
import Footer from './components/Footer/Footer';
import { navLinks, heroSlides, features } from './data/mockData';
import traditional_lottetower from './assets/traditional_lottetower.jpg';
import GoogleTranslate from './components/GoogleTranslate'; // 경로는 파일 위치에 맞게 조정


function App() {
  return (
    <div className="min-h-screen bg-[#fbefef]">
      <Header links={navLinks} />
      <GoogleTranslate /> {/* 🔹 번역 위젯 추가 */}
      <Hero slides={heroSlides} />

      <CountrySection
        title="외국인에 의한, 외국인을 위한 ForForeigner"
        subtitle="한국의 모든 것, 생활부터 언어까지 한번에"
        imageSrc={traditional_lottetower}
      />

      <InfoSection
        title="한국인에게 얼죽아란?"
        subtitle="퀴즈 게임으로 문화를 공부해요!"
        description={[
          "한겨울에도 아아를 마시는 한국인,",
          "이런 한국의 커피 문화가 궁금하다면?"
        ]}
        buttonText="문화 알아가기"
        buttonUrl="#examples"
      />

      <MobilePreview
        title="한국인 친구들의 줄임말이 어려울 때"
        description={["지금 퀴즈를 통해 줄임말에 대해 배워가요!"]}
      />

      <AppDemo />

      <InfoSection
        title="커뮤니티에서 정보를 공유해봐요!"
        subtitle="4가지의 게시판으로 다양하게"
        description={['로그인 후 글을 작성해보세요.']}
        buttonText="커뮤니티 이용하기"
        buttonUrl="/features"
        reverse
        showFeatureBoxes
      />

      <FeatureSection
        title="ForForeigner와 함께"
        subtitle="한국어 학습과 문화 적응을 위한 완벽한 동반자"
        features={features}
      />

      <Footer />
    </div>
  );
}

export default App;


