import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const whatsappButtonRef = useRef(null);
  const phoneNumber = "05321234567"; // Telefon numarası
  const whatsappMessage = "Merhaba, nakliye hizmeti hakkında bilgi almak istiyorum."; // WhatsApp mesajı

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Hamburger menü açıkken body scroll'u engelle
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }

    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  // Dikkat çekici animasyon için rastgele zamanlayıcı
  useEffect(() => {
    // Sayfa yüklendiğinde ilk animasyonu hemen gösterme
    const initialDelay = Math.random() * 5000 + 5000; // 5-10 saniye arası rastgele bir süre
    
    const timer = setTimeout(() => {
      startAttentionAnimation();
    }, initialDelay);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Animasyonu başlatan fonksiyon
  const startAttentionAnimation = () => {
    if (!animate) {
      setAnimate(true);
      
      // Animasyon bittikten sonra temizle ve yeni zamanlayıcı ayarla
      setTimeout(() => {
        setAnimate(false);
        
        // Yeni bir rastgele zamanlayıcı ayarla (5-15 saniye arası)
        const nextDelay = Math.random() * 5000 + 10000;
        setTimeout(() => {
          startAttentionAnimation();
        }, nextDelay);
      }, 1200); // Animasyon süresi (CSS'deki animation-duration ile eşleşmeli)
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Mobil menüyü tıklama sonrası kapatmak için
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // WhatsApp bağlantısını oluştur
  const getWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <Link to="/">
          <h2>YILDIZLAR NAKLIYAT</h2>
        </Link>
      </div>
      
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>ANA SAYFA</Link></li>
          <li><Link to="/hizmetlerimiz" onClick={closeMenu}>HİZMETLERİMİZ</Link></li>
          <li><Link to="/kurumsal" onClick={closeMenu}>KURUMSAL</Link></li>
          <li><Link to="/galeri" onClick={closeMenu}>GALERİ</Link></li>
          <li><Link to="/iletisim" onClick={closeMenu}>BİZE ULAŞIN</Link></li>
        </ul>
      </nav>
      
      <div className={`contact-info ${menuOpen ? 'open' : ''}`}>
        <a href={`tel:+90${phoneNumber}`} className="phone-number">
          <i className="phone-icon"></i>
          <span>(0532) 123 45 67</span>
        </a>
        <a 
          href={getWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`whatsapp-button ${animate ? 'attention-animation' : ''}`}
          ref={whatsappButtonRef}
        >
          <i className="whatsapp-icon"></i>
          TEKLİF AL
        </a>
      </div>
    </header>
  );
}

export default Header; 