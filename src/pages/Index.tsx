
import { useState, useEffect } from 'react';
import Portfolio from '../components/Portfolio';

const Index = () => {
  const [showHello, setShowHello] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      setTimeout(() => {
        setShowHello(false);
      }, 1500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showHello) {
    return <Portfolio />;
  }

  return (
    // <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(to_bottom,_#000000_0%,_#000000_80%,_#0a0a33_100%)]">
      <div className={`hello-container ${animate ? 'animate-disappear' : ''} overflow-visible`}>
        {/* <h1 className="hello-text text-8xl md:text-9xl leading-none font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent"> */}
        <h1 className="hello-text text-[6rem] md:text-[8rem] leading-none pt-20 font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">

          hello !
        </h1>
        {animate && (
          <div className="magic-dust">
            {[...Array(10)].map((_, i) => (
              <div key={i} className={`dust-particle particle-${i}`}></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
