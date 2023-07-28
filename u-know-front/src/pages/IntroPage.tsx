import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../pages/StylePages/IntroPage.css';
import heroImage from '../assets/fondo-uk.png';

const IntroPage: React.FC = () => {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleButtonClick = () => {
    setIsButtonPressed(true);
    setTimeout(() => {
      setIsButtonPressed(false);
      window.location.href = '/home';
    }, 200); // Redirigimos a la página de inicio después de 200ms 
  };

  const springStyle = useSpring({
    transform: isButtonPressed ? 'scale(0.95)' : 'scale(1)',
  });

  return (
    <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <animated.button
        className="app-button"
        style={springStyle}
        onClick={handleButtonClick}
      >
        Ver contenidos
      </animated.button>
    </div>
  );
};

export default IntroPage;
