import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Link } from 'react-router-dom';
import "../../src/pages/StylePages/Intropage.css";

const FadeInOutImage = () => {
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const fadeInOutProps = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    reverse: true,
    config: {
      duration: 6000,
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
    border: isHovered ? '2px solid rgba(255, 255, 255, 0.6)' : '2px solid black',
    borderRadius: isHovered ? '30px' : '50px',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
  });

  const buttonClickProps = useSpring({
    transform: isClicked ? 'scale(0.9)' : 'scale(1)',
  });

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       {/*  <animated.img
          src="/src/assets/fondo-uk.png"
          alt="Fade-In/Fade-Out Image"
          style={{ width: 'auto', height: '100%', ...fadeInOutProps }}
        /> */}



<div>

      <div className="background background0"></div>
      <div className="background background1"></div>
      <div className="background background2"></div>
      <div className="background background3"></div>
      <div className="background background4"></div>
      <div className="background background5"></div>
      <div className="background background6"></div>
      <div className="background background7"></div>
      <div className="criterion">
        <div className="text text0">U</div>
        <div className="text text1">K</div>
        <div className="text text2">N</div>
        <div className="text text3">O</div>
        <div className="text text4">W</div>
        <div className="text text5">!</div>
        <div className="text text6">!</div>
        <div className="text text7">🚀</div>
        <div className="frame frame0"></div>
        <div className="frame frame1"></div>
        <div className="frame frame2"></div>
        <div className="frame frame3"></div>
        <div className="frame frame4"></div>
        <div className="frame frame5"></div>
        <div className="frame frame6"></div>
        <div className="frame frame7"></div>
        <div className="particle particle00"></div>
        <div className="particle particle01"></div>
        <div className="particle particle02"></div>
        <div className="particle particle03"></div>
        <div className="particle particle04"></div>
        <div className="particle particle05"></div>
        <div className="particle particle06"></div>
        <div className="particle particle07"></div>
        <div className="particle particle08"></div>
        <div className="particle particle09"></div>
        <div className="particle particle010"></div>
        <div className="particle particle011"></div>
        <div className="particle particle10"></div>
        <div className="particle particle11"></div>
        <div className="particle particle12"></div>
        <div className="particle particle13"></div>
        <div className="particle particle14"></div>
        <div className="particle particle15"></div>
        <div className="particle particle16"></div>
        <div className="particle particle17"></div>
        <div className="particle particle18"></div>
        <div className="particle particle19"></div>
        <div className="particle particle110"></div>
        <div className="particle particle111"></div>
        <div className="particle particle20"></div>
        <div className="particle particle21"></div>
        <div className="particle particle22"></div>
        <div className="particle particle23"></div>
        <div className="particle particle24"></div>
        <div className="particle particle25"></div>
        <div className="particle particle26"></div>
        <div className="particle particle27"></div>
        <div className="particle particle28"></div>
        <div className="particle particle29"></div>
        <div className="particle particle210"></div>
        <div className="particle particle211"></div>
        <div className="particle particle30"></div>
        <div className="particle particle31"></div>
        <div className="particle particle32"></div>
        <div className="particle particle33"></div>
        <div className="particle particle34"></div>
        <div className="particle particle35"></div>
        <div className="particle particle36"></div>
        <div className="particle particle37"></div>
        <div className="particle particle38"></div>
        <div className="particle particle39"></div>
        <div className="particle particle310"></div>
        <div className="particle particle311"></div>
        <div className="particle particle40"></div>
        <div className="particle particle41"></div>
        <div className="particle particle42"></div>
        <div className="particle particle43"></div>
        <div className="particle particle44"></div>
        <div className="particle particle45"></div>
        <div className="particle particle46"></div>
        <div className="particle particle47"></div>
        <div className="particle particle48"></div>
        <div className="particle particle49"></div>
        <div className="particle particle410"></div>
        <div className="particle particle411"></div>
        <div className="particle particle50"></div>
        <div className="particle particle51"></div>
        <div className="particle particle52"></div>
        <div className="particle particle53"></div>
        <div className="particle particle54"></div>
        <div className="particle particle55"></div>
        <div className="particle particle56"></div>
        <div className="particle particle57"></div>
        <div className="particle particle58"></div>
        <div className="particle particle59"></div>
        <div className="particle particle510"></div>
        <div className="particle particle511"></div>
        <div className="particle particle60"></div>
        <div className="particle particle61"></div>
        <div className="particle particle62"></div>
        <div className="particle particle63"></div>
        <div className="particle particle64"></div>
        <div className="particle particle65"></div>
        <div className="particle particle66"></div>
        <div className="particle particle67"></div>
        <div className="particle particle68"></div>
        <div className="particle particle69"></div>
        <div className="particle particle610"></div>
        <div className="particle particle611"></div>
        <div className="particle particle70"></div>
        <div className="particle particle71"></div>
        <div className="particle particle72"></div>
        <div className="particle particle73"></div>
        <div className="particle particle74"></div>
        <div className="particle particle75"></div>
        <div className="particle particle76"></div>
        <div className="particle particle77"></div>
        <div className="particle particle78"></div>
        <div className="particle particle79"></div>
        <div className="particle particle710"></div>
        <div className="particle particle711"></div>
      </div>
    </div>

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
            color: 'black',
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
