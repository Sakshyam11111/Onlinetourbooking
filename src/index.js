import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});

ReactDOM.render(<App />, document.getElementById('root'));