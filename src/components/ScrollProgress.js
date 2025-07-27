import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setWidth(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '5px',
      zIndex: 2000,
      background: 'transparent'
    }}>
      <div style={{
        height: '100%',
        width: `${width}%`,
        background: 'linear-gradient(90deg, #4568dc 0%, #b06ab3 100%)',
        transition: 'width 0.2s'
      }} />
    </div>
  );
};

export default ScrollProgress;