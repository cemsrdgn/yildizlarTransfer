import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  
  const phoneNumber = "05321234567"; // Telefon numarası
  const whatsappMessage = "Merhaba, nakliye hizmeti hakkında bilgi almak istiyorum."; // WhatsApp mesajı
  
  const slogans = [
    {
      title: "Premium Taşımacılık Ağı",
      description: "Daha iyi bir taşımacılık yöntemi keşfedin"
    },
    {
      title: "Güvenilir Nakliye Çözümleri",
      description: "Eşyalarınız bizimle güvende"
    },
    {
      title: "Profesyonel Hizmet",
      description: "Uzman kadromuzla yanınızdayız"
    }
  ];

  // İlk render'da animasyonların başlaması için
  useEffect(() => {
    setAnimationStarted(true);
  }, []);

  // Slogan değişimi için
  useEffect(() => {
    if (!animationStarted) return;
    
    const interval = setInterval(() => {
      setFadeIn(false);
      
      setTimeout(() => {
        setCurrentSlogan((prev) => (prev + 1) % slogans.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [animationStarted, slogans.length]);
  
  // WhatsApp bağlantısını oluştur
  const getWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className={`slogan-container ${fadeIn ? 'fade-in' : 'fade-out'}`}>
            <h1 className="slide-in-left">{slogans[currentSlogan].title}</h1>
            <p className="slide-in-right">{slogans[currentSlogan].description}</p>
          </div>
          <a 
            href={getWhatsAppLink()} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="get-started-btn slide-in-bottom"
          >
            <i className="whatsapp-hero-icon"></i>
            TEKLİF AL
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home; 