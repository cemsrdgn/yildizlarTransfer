import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import yildizlarLogo from '../assets/yildizlarTransferLogo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const whatsappButtonRef = useRef(null);
  const dropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const phoneNumber = "5397926417"; // Telefon numarası
  const whatsappMessage = "Merhaba, transfer hizmeti hakkında bilgi almak istiyorum."; // WhatsApp mesajı

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

  // Dropdown dışı tıklamayı kontrol et
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
    setDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  // Dropdown menüyü toggle et
  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
    setServicesDropdownOpen(false); // Diğer dropdown açıksa kapat
  };

  // Services dropdown toggle
  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setServicesDropdownOpen(!servicesDropdownOpen);
    setDropdownOpen(false); // Diğer dropdown açıksa kapat
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
          <div className="logo-container">
            <img src={yildizlarLogo} alt="Yıldızlar Transfer Logo" className="company-logo" />
            <h2>YILDIZLAR TRANSFER</h2>
          </div>
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
          <li className="has-dropdown" ref={servicesDropdownRef}>
            <a href="#" onClick={toggleServicesDropdown} className={servicesDropdownOpen ? 'active' : ''}>
              HİZMETLERİMİZ
              <i className={`dropdown-arrow ${servicesDropdownOpen ? 'open' : ''}`}></i>
            </a>
            <div className={`dropdown-menu ${servicesDropdownOpen ? 'open' : ''}`}>
              <Link to="/hizmetlerimiz/ev-ofis-tasimaciligi" onClick={closeMenu}>Yurt İçi Ev ve Ofis Taşımacılığı</Link>
              <Link to="/hizmetlerimiz/depolama-hizmetleri" onClick={closeMenu}>Yurt İçi Depolama Hizmetleri</Link>
              <Link to="/hizmetlerimiz/lojistik-destek" onClick={closeMenu}>Lojistik Destek Hizmetleri</Link>
            </div>
          </li>
          <li className="has-dropdown" ref={dropdownRef}>
            <a href="#" onClick={toggleDropdown} className={dropdownOpen ? 'active' : ''}>
              KURUMSAL
              <i className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`}></i>
            </a>
            <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              <Link to="/kurumsal/biz-kimiz" onClick={closeMenu}>Biz Kimiz?</Link>
              <Link to="/kurumsal/vizyon-misyon" onClick={closeMenu}>Vizyon ve Misyonumuz</Link>
              <Link to="/kurumsal/araclarimiz" onClick={closeMenu}>Araçlarımız</Link>
            </div>
          </li>
          <li><Link to="/galeri" onClick={closeMenu}>GALERİ</Link></li>
          <li><Link to="/iletisim" onClick={closeMenu}>BİZE ULAŞIN</Link></li>
        </ul>
      </nav>
      
      <div className={`contact-info ${menuOpen ? 'open' : ''}`}>
        <a href={`tel:+90${phoneNumber}`} className="phone-number">
          <i className="phone-icon"></i>
          <span>(0539) 792 64 17</span>
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