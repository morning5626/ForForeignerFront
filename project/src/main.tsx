import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Router'; // Router.tsx에서 <Routes> 정의됨

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
