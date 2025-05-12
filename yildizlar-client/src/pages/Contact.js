import React from 'react';
import '../styles/Contact.css';
import contactBgImage from '../assets/contactUsGorsel.png';

function Contact() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactBgImage})`
  };

  return (
    <div className="contact-page">
      <div className="contact-hero" style={heroStyle}>
        <div className="contact-hero-overlay">
          <h1>Bize Ulaşın</h1>
          <p>Hizmet ve teklif almak için bizimle iletişime geçin</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-info-section">
          <div className="section-title">
            <h2>İletişim Bilgilerimiz</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="contact-company-info">
            <div className="address-block">
              <h3>Adresimiz</h3>
              <p>İstanbul Yolu 45. km No:35</p>
              <p>Sincan, Ankara</p>
              <p>Türkiye</p>
            </div>
            
            <div className="hours-block">
              <h3>Çalışma Saatlerimiz</h3>
              <div className="hours-row">
                <span className="day">Pazartesi - Cuma:</span>
                <span className="time">08:00 - 18:00</span>
              </div>
              <div className="hours-row">
                <span className="day">Cumartesi:</span>
                <span className="time">09:00 - 16:00</span>
              </div>
              <div className="hours-row">
                <span className="day">Pazar:</span>
                <span className="time">Kapalı</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-boxes">
          <div className="contact-box">
            <div className="icon-wrapper">
              <i className="contact-icon address-icon"></i>
            </div>
            <h3>Adresimiz</h3>
            <p>İstanbul Yolu 45. km No:35</p>
            <p>Sincan, Ankara</p>
          </div>
          
          <div className="contact-box">
            <div className="icon-wrapper">
              <i className="contact-icon phone-icon"></i>
            </div>
            <h3>Telefonumuz</h3>
            <p><a href="tel:+905321234567">(0532) 123 45 67</a></p>
            <p><a href="tel:+903121234567">(0312) 123 45 67</a></p>
          </div>
          
          <div className="contact-box">
            <div className="icon-wrapper">
              <i className="contact-icon email-icon"></i>
            </div>
            <h3>E-posta</h3>
            <p><a href="mailto:info@yildizlarnakliyat.com">info@yildizlarnakliyat.com</a></p>
            <p><a href="mailto:satis@yildizlarnakliyat.com">satis@yildizlarnakliyat.com</a></p>
          </div>
        </div>

        <div className="map-section">
          <div className="section-title">
            <h2>Konum Bilgimiz</h2>
            <div className="title-underline"></div>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.5842116705034!2d32.72386237643757!3d39.97645828397439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347936e595de5%3A0x7a2a9d5b791c19d9!2sSincan%2C%20Ankara!5e0!3m2!1str!2str!4v1716331947980!5m2!1str!2str" 
              width="600" 
              height="450" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Yıldızlar Nakliyat Konum"
            ></iframe>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Hemen Bizimle İletişime Geçin</h3>
          <p>En iyi nakliye hizmetini almak için bizi arayın veya ofisimizi ziyaret edin</p>
          <a 
            href="https://wa.me/905321234567?text=Merhaba%2C%20nakliye%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-cta-button"
          >
            <i className="whatsapp-icon"></i>
            WHATSAPP İLE TEKLİF AL
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact; 