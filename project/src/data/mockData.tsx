import { Link, Slide, Feature } from '../types';
import { BookOpen, MessageCircle, Headphones, Globe, BookOpenCheck, UserCheck } from 'lucide-react';

    

//베너 사진 
import koreanstudy from '../assets/koreanstudy.jpg';
import Bibimbap1 from '../assets/Bibimbap1.jpg';
import LotteTower from '../assets/LotteTower.jpg';

// 아이콘 구성 요소
const BookOpenIcon = () => <BookOpen className="w-6 h-6 text-[#f5a9a9]" />;
const MessageCircleIcon = () => <MessageCircle className="w-6 h-6 text-[#f5a9a9]" />;
const HeadphonesIcon = () => <Headphones className="w-6 h-6 text-[#f5a9a9]" />;
const GlobeIcon = () => <Globe className="w-6 h-6 text-[#f5a9a9]" />;
const BookOpenCheckIcon = () => <BookOpenCheck className="w-6 h-6 text-[#f5a9a9]" />;
const UserCheckIcon = () => <UserCheck className="w-6 h-6 text-[#f5a9a9]" />;

//상단바 메뉴
export const navLinks: Link[] = [
  { id: 1, title: 'About Us', url: '#about' },
  { id: 2, title: 'Quiz', url: '#quiz' },
  { id: 3, title: 'Community', url: '#community' },
  { id: 4, title: 'Log In', url: '/login' },
  { id: 5, title: 'Sign Up', url: '/signup' },
];
//슬라이드 1
export const heroSlides: Slide[] = [
  {
    id: 1,
    title: '한국어 공부 함께해요',
    subtitle: '어려운 한국어 같이 배우기',
    date: '2025.08.17',
    time: '14:00-18:00',
    location: '이태원 외국인 주민센터 2F 제2강의실',
    image: koreanstudy, //  네이버 이미지 사용   
  },
  //슬라이드2
  {
    id: 2,
    title: '롯데타워 투어',
    subtitle: '한국의 랜드마크 롯데타워를 같이 투어해요',
    date: '2025.6.15.',
    time: '10:00-12:00',
    location: '롯데타워 정문 입구',
    image: LotteTower, //롯데타워 이미지 사용
    
  },
  //슬라이드3
  {
    id: 3,
    title: '한국 전통 음식 체험',
    subtitle: '비빔밥 만들기',
    date: '2025.7.22.',
    time: '09:00-17:00',
    location: '서울시 종로구 외국인 주민센터 3F',
    image: Bibimbap1, //  비빔밥 이미지 사용
  },
];
//6가지 서비스 기능 소개
export const features: Feature[] = [
  {
    id: 1,
    title: '퀴즈 학습',
    description: '게임과 같은 퀴즈로 유행어, 역사,문화, K-Drama에 대해 재미있게 배우세요.',
    icon: <BookOpenIcon />
  },
  {
    id: 2,
    title: '커뮤니티',
    description: '전세계 다양한 사람들과 한국에 관한 무한한 정보를 공유하세요.',
    icon: <MessageCircleIcon />
  },
  {
    id: 3,
    title: '한국어 가이드',
    description: '다양한 상황 속 한국어 공부를 통해 회화를 연습해봐요.',
    icon: <HeadphonesIcon />
  },
  {
    id: 4,
    title: '문화 이해',
    description: '한국 문화와 관습에 대한 심층적인 정보를 제공합니다.',
    icon: <GlobeIcon />
  },
  {
    id: 5,
    title: '단계별 학습',
    description: '초보자부터 고급 학습자까지 단계별 맞춤 커리큘럼을 제공합니다.',
    icon: <BookOpenCheckIcon />
  },
  {
    id: 6,
    title: '비자 및 서류 정보',
    description: '한국 비자 및 서류 등의 한국 정착 준비를 도와드립니다.',
    icon: <UserCheckIcon />
  },
];
