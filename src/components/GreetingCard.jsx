import React, { useState } from 'react';
import '../styles/greetingCard.css';

function GreetingCard({ onComplete, albumPages = [] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [displayPage, setDisplayPage] = useState(0);

  const pages = [
    { type: 'cover' },
    {
      type: 'message',
      title: 'Mi Amor',
      text: 'Hoy es tu día especial y quiero que sepas lo mucho que significas para mí. Cada momento a tu lado es un regalo que atesoro en mi corazón.',
      decoration: '💕',
    },
    {
      type: 'message',
      title: 'Eres Todo Para Mí',
      text: 'Tu sonrisa ilumina mis días, tu risa es música para mis oídos y tu amor es el motor que impulsa mi vida.',
      decoration: '🌟',
    },
    {
      type: 'message',
      title: 'En Este Día Especial',
      text: 'Quiero que sepas que eres la persona más maravillosa que he conocido. Cada día contigo es una aventura.',
      decoration: '💫',
    },
    {
      type: 'wishes',
      title: 'Mis Deseos Para Ti',
      wishes: [
        'Que todos tus sueños se hagan realidad',
        'Que la felicidad te acompañe siempre',
        'Que el amor te rodee cada día',
        'Que cada año sea mejor que el anterior',
      ],
      decoration: '🎉',
    },
    {
      type: 'final',
      title: 'Te Amo',
      text: '¡Felices 19 años, mi amor! Que este nuevo año esté lleno de momentos inolvidables, risas y amor.',
      signature: 'Con todo mi amor 💖',
    }
  ];

  const handleNext = () => {
    if (isFlipping) return;
    
    if (currentPage < pages.length - 1) {
      if (currentPage === 0) {
        setIsFlipping('forward');
        setTimeout(() => {
          setCurrentPage(1);
          setDisplayPage(1);
          setIsFlipping(false);
        }, 700);
        return;
      }
      
      setIsFlipping('forward');
      
      setTimeout(() => {
        setDisplayPage(prev => prev + 1);
        setCurrentPage(prev => prev + 1);
      }, 350);
      
      setTimeout(() => {
        setIsFlipping(false);
      }, 700);
    } else if (onComplete) {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (isFlipping || currentPage === 0) return;
    
    if (currentPage === 1) {
      setCurrentPage(0);
      setDisplayPage(0);
      return;
    }
    
    setIsFlipping('backward');
    
    setTimeout(() => {
      setDisplayPage(prev => prev - 1);
      setCurrentPage(prev => prev - 1);
    }, 350);
    
    setTimeout(() => {
      setIsFlipping(false);
    }, 700);
  };

  if (currentPage === 0) {
    return (
      <div className="greeting-card-container">
        <div className="birthday-decorations">
          <div className="birthday-decoration">🎈</div>
          <div className="birthday-decoration">🎉</div>
          <div className="birthday-decoration">🎁</div>
          <div className="birthday-decoration">🎊</div>
          <div className="birthday-decoration">🎂</div>
          <div className="birthday-decoration">✨</div>
          <div className="birthday-decoration">💝</div>
          <div className="birthday-decoration">🌟</div>
        </div>

        <div className="book-wrapper">
          <div className={`polaroid-container ${isFlipping ? 'closing' : ''}`} onClick={handleNext}>
            <div className="polaroid-card">
              <div className="polaroid-video">
                <video 
                  src={`${process.env.PUBLIC_URL}/videos/video1.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="polaroid-text">
                <p className="polaroid-label">TE AMO</p>
                <p className="polaroid-script">Mi amor</p>
              </div>
            </div>
          </div>

          <div className="progress-indicator">
            {pages.map((_, idx) => (
              <div key={idx} className={`progress-dot ${idx === currentPage ? 'active' : ''} ${idx < currentPage ? 'completed' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const leftImageIndex = currentPage - 1;
  const nextLeftImageIndex = currentPage;
  
  const leftImage = albumPages[leftImageIndex] || { src: `${process.env.PUBLIC_URL}/images/foto1.jpg`, text: 'Recuerdo especial' };
  const nextLeftImage = albumPages[nextLeftImageIndex] || { src: `${process.env.PUBLIC_URL}/images/foto2.jpg`, text: 'Siguiente recuerdo' };

  return (
    <div className="greeting-card-container">
      <div className="birthday-decorations">
        <div className="birthday-decoration">🎈</div>
        <div className="birthday-decoration">🎉</div>
        <div className="birthday-decoration">🎁</div>
        <div className="birthday-decoration">🎊</div>
        <div className="birthday-decoration">🎂</div>
        <div className="birthday-decoration">✨</div>
        <div className="birthday-decoration">💝</div>
        <div className="birthday-decoration">🌟</div>
      </div>

      <div className="book-wrapper">
        <div className="book-container">
          <div className="book-opened">
            <div className="book-page-left book-page-current" onClick={handlePrev}>
              <div className="page-photo">
                <img src={leftImage.src} alt="Memory" />
              </div>
              <p className="photo-caption">{leftImage.text}</p>
            </div>

            <div className="book-page-left book-page-next" onClick={handlePrev}>
              <div className="page-photo">
                <img src={nextLeftImage.src} alt="Next Memory" />
              </div>
              <p className="photo-caption">{nextLeftImage.text}</p>
            </div>

            <div className={`book-page-right ${isFlipping === 'forward' ? 'page-flipping-forward' : ''} ${isFlipping === 'backward' ? 'page-flipping-backward' : ''}`} onClick={handleNext}>
              {pages[displayPage].type === 'message' && (
                <div className="message-content">
                  <div className="message-icon">{pages[displayPage].decoration}</div>
                  <h2 className="message-title">{pages[displayPage].title}</h2>
                  <p className="message-text">{pages[displayPage].text}</p>
                  <div className="message-divider"></div>
                </div>
              )}

              {pages[displayPage].type === 'wishes' && (
                <div className="wishes-content">
                  <div className="wishes-icon">{pages[displayPage].decoration}</div>
                  <h2 className="wishes-title">{pages[displayPage].title}</h2>
                  <ul className="wishes-list">
                    {pages[displayPage].wishes.map((wish, i) => (
                      <li key={i}>
                        <span className="wish-bullet">✨</span>
                        <span>{wish}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pages[displayPage].type === 'final' && (
                <div className="final-content">
                  <h2 className="final-title">{pages[displayPage].title}</h2>
                  <p className="final-text">{pages[displayPage].text}</p>
                  <p className="final-signature">{pages[displayPage].signature}</p>
                  <div className="final-hearts">
                    <span>💕</span>
                    <span>💖</span>
                    <span>💕</span>
                  </div>
                </div>
              )}

              <div className="page-number">{displayPage + 1} / {pages.length}</div>
            </div>
          </div>
        </div>

        <div className="progress-indicator">
          {pages.map((_, idx) => (
            <div 
              key={idx} 
              className={`progress-dot ${idx === currentPage ? 'active' : ''} ${idx < currentPage ? 'completed' : ''}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GreetingCard;