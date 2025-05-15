import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import ContactCard from '../components/ContactCard';

function Home() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  
  const phoneNumber = "5397926417"; // Telefon numarası
  const whatsappMessage = "Merhaba, transfer hizmeti hakkında bilgi almak istiyorum."; // WhatsApp mesajı
  
  const slogans = [
    {
      title: "Premium Taşımacılık Ağı",
      description: "Daha iyi bir taşımacılık yöntemi keşfedin"
    },
    {
      title: "Güvenilir Transfer Çözümleri",
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

  const services = [
    {
      id: 'ev-ofis',
      title: 'Ev ve Ofis Taşımacılığı',
      description: 'Evden eve ve ofis taşımacılığında profesyonel çözümler sunuyoruz.',
      icon: 'home-office-icon'
    },
    {
      id: 'depolama',
      title: 'Depolama Hizmetleri',
      description: 'Güvenli ve temiz depolama alanlarımızla eşyalarınız güvende.',
      icon: 'storage-icon'
    },
    {
      id: 'lojistik',
      title: 'Lojistik Destek',
      description: 'Her türlü lojistik ihtiyacınızda yanınızdayız.',
      icon: 'logistics-icon'
    }
  ];

  const advantages = [
    {
      title: 'Profesyonel Ekip',
      description: 'Alanında uzman kadromuzla hızlı ve güvenli hizmet',
      icon: 'team-icon'
    },
    {
      title: 'Modern Araç Filosu',
      description: 'Bakımlı ve donanımlı araçlarla güvenli taşımacılık',
      icon: 'vehicle-icon'
    },
    {
      title: '7/24 Hizmet',
      description: 'İhtiyaç duyduğunuz her an yanınızdayız',
      icon: 'time-icon'
    },
    {
      title: 'Uygun Fiyatlar',
      description: 'Ekonomik fiyatlarla kaliteli hizmet anlayışı',
      icon: 'price-icon'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
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

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="section-title">
              <h2>Yıldızlar Transfer'e Hoş Geldiniz</h2>
              <div className="title-underline"></div>
            </div>
            <p className="welcome-text">
              Ankara merkezli Yıldızlar Transfer olarak, tüm transfer ve nakliye ihtiyaçlarınızda güvenilir çözüm ortağınız olmaktan gurur duyuyoruz. Profesyonel ekibimiz ve modern araç filomuzla her zaman yanınızdayız.
            </p>
            <div className="welcome-cta">
              <Link to="/kurumsal/biz-kimiz" className="btn-primary">Bizi Tanıyın</Link>
              <a href={`tel:+90${phoneNumber}`} className="btn-secondary">Hemen Arayın</a>
            </div>
          </div>
          <div className="welcome-image">
            <div className="image-placeholder">
              <span>Kurumsal Görsel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-overview">
        <div className="container">
          <div className="section-title">
            <h2>Hizmetlerimiz</h2>
            <div className="title-underline"></div>
          </div>
          <p className="section-subtitle">Tüm transfer ve nakliye ihtiyaçlarınız için profesyonel çözümler sunuyoruz</p>
          
          <div className="services-grid">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <div className={`service-icon ${service.icon}`}></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={`/hizmetlerimiz/${service.id === 'ev-ofis' ? 'ev-ofis-tasimaciligi' : service.id === 'depolama' ? 'depolama-hizmetleri' : 'lojistik-destek'}`} className="service-link">
                  Detaylı Bilgi <i className="arrow-icon"></i>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="services-cta">
            <Link to="/hizmetlerimiz" className="btn-primary">Tüm Hizmetlerimiz</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-title">
            <h2>Neden Bizi Tercih Etmelisiniz?</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="advantages-grid">
            {advantages.map((advantage, index) => (
              <div key={index} className="advantage-item">
                <div className={`advantage-icon ${advantage.icon}`}></div>
                <div className="advantage-content">
                  <h3>{advantage.title}</h3>
                  <p>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Contact Card */}
      <ContactCard />
    </div>
  );
}

export default Home; 