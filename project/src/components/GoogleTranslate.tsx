import React, { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const addScript = () => {
      if (document.getElementById('google-translate-script')) return;

      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.id = 'google-translate-script';
      script.async = true;
      document.body.appendChild(script);
    };

    let retries = 0;
    const initTranslate = () => {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'ko',
            includedLanguages: 'ko,en,ja',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      } else if (retries < 20) {
        retries++;
        setTimeout(initTranslate, 300);
      } else {
        console.error('Google 번역 로딩 실패');
      }
    };

    window.googleTranslateElementInit = initTranslate;
    addScript();
  }, []);

  return <div id="google_translate_element" className="hidden"></div>;
};

export default GoogleTranslate;











{/*import React, { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate: React.FC = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.id = 'google-translate-script';
      document.body.appendChild(script);
    };

    let retries = 0;
    const maxRetries = 20;

    const waitForGoogle = () => {
      if (
        window.google &&
        window.google.translate &&
        window.google.translate.TranslateElement
      ) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'ko',
            includedLanguages: 'ko,en,ja',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          'google_translate_element'
        );
      } else if (retries < maxRetries) {
        retries++;
        setTimeout(waitForGoogle, 300); // 0.3초마다 재확인
      } else {
        console.error('⚠️ Google 번역 로드 실패');
      }
    };

    window.googleTranslateElementInit = waitForGoogle;
    addGoogleTranslateScript();
  }, []);

  return <div id="google_translate_element" className="hidden"></div>;
};

export default GoogleTranslate;
*/}