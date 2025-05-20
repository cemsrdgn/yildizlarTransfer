import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="footer-title">Yıldızlar Transfer</h3>
            <p className="footer-description">
              Ankara merkezli transfer ve nakliye hizmetleri sunan firmamız, müşteri memnuniyetini ön planda tutarak kaliteli hizmet sunmaktadır.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <i className="address-icon"></i>
                <p>Ergenekon Mahallesi Pırlanta caddesi 13/5</p>
                <p>Yenimahalle, Ankara</p>
              </div>
              <div className="contact-item">
                <i className="phone-icon"></i>
                <p><a href="tel:+905397926417">(0539) 792 64 17</a></p>
              </div>
            </div>
            <div className="social-media-icons">
              <a 
                href="https://www.instagram.com/yildizlar_transfer?igsh=MXd2dG0zYmtneDRmZw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram Sayfamız"
              >
                <i className="social-icon instagram-icon"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@yildizlar_transfer" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok Sayfamız"
              >
                <i className="social-icon tiktok-icon"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section links">
            <h3 className="footer-title">Hızlı Linkler</h3>
            <ul className="footer-links">
              <li><Link to="/">Ana Sayfa</Link></li>
              <li><Link to="/kurumsal/biz-kimiz">Biz Kimiz</Link></li>
              <li><Link to="/hizmetlerimiz">Hizmetlerimiz</Link></li>
              <li><Link to="/kurumsal/araclarimiz">Araçlarımız</Link></li>
              <li><Link to="/galeri">Galeri</Link></li>
              <li><Link to="/iletisim">İletişim</Link></li>
            </ul>
          </div>
          
          <div className="footer-section services">
            <h3 className="footer-title">Hizmetlerimiz</h3>
            <ul className="footer-links">
              <li><Link to="/hizmetlerimiz/ev-ofis-tasimaciligi">Ev ve Ofis Taşımacılığı</Link></li>
              <li><Link to="/hizmetlerimiz/depolama-hizmetleri">Depolama Hizmetleri</Link></li>
              <li><Link to="/hizmetlerimiz/lojistik-destek">Lojistik Destek</Link></li>
            </ul>
          </div>
          
          <div className="footer-section cta">
            <h3 className="footer-title">İletişime Geçin</h3>
            <p className="cta-text">Transfer hizmetlerimiz hakkında bilgi almak için hemen bize ulaşın.</p>
            <a 
              href="https://wa.me/905397926417?text=Merhaba%2C%20transfer%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-button"
            >
              <i className="whatsapp-icon"></i>
              WhatsApp ile Teklif Al
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Yıldızlar Transfer. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 