import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';

const FadeInOutImage = () => {
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const fadeInOutProps = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    reverse: true,
    config: {
      duration: 2500,
    },
    onRest: () => {
      setShowButton(true);
    },
  });

  const buttonFadeProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 4000, 
    },
  });

  const buttonHoverProps = useSpring({
    transform: isHovered ? 'scale(1.05) translateY(-5px)' : 'scale(1)',
    background: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
    border: isHovered ? '2px solid rgba(255, 255, 255, 0.6)' : '2px solid white',
    borderRadius: isHovered ? '30px' : '50px',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
  });

  const buttonClickProps = useSpring({
    transform: isClicked ? 'scale(0.9)' : 'scale(1)',
  });

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <animated.img
        src="/src/assets/fondo-uk.png"
        alt="Fade-In/Fade-Out Image"
        style={{ width: 'auto', height: '100%', ...fadeInOutProps }}
      />
      <Link to="/home" >
      {showButton && (
        <animated.button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseDown={() => setClicked(true)}
          onMouseUp={() => setClicked(false)}
          style={{
            ...buttonFadeProps,
            ...buttonHoverProps,
            ...buttonClickProps,
            position: 'absolute',
            bottom: '400px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 20px',
            background: 'transparent',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          Ver contenido
        </animated.button>
        )}
      </Link>
    </div>
  );
};

export default FadeInOutImage;
