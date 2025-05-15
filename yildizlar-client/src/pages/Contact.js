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
            <div className="hours-block">
              <h3>Çalışma Saatlerimiz</h3>
              <div className="hours-grid">
                <div className="hours-column">
                  <div className="hours-row">
                    <span className="time">Haftanın 7 günü 24 saat hizmet vermekteyiz.</span>
                  </div>
                
                </div>
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
            <p>Ergenekon Mahallesi Pırlanta caddesi 13/5</p>
            <p>Yenimahalle, Ankara</p>
          </div>
          
          <div className="contact-box">
            <div className="icon-wrapper">
              <i className="contact-icon phone-icon"></i>
            </div>
            <h3>Telefonlarımız</h3>
            <p><a href="tel:+905397926417">(0539) 792 64 17</a></p>
            <p><a href="tel:+905415673950">(0541) 567 39 50</a></p>
          </div>
        </div>

        <div className="map-section">
          <div className="section-title">
            <h2>Konum Bilgimiz</h2>
            <div className="title-underline"></div>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195.52599673630628!2d32.75877532733087!3d39.96790765089723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34923ede4c45b%3A0xcd8c12e3e7339b0c!2zUMSxcmxhbnRhIFNrLiBObzoxMywgRXJnZW5la29uLCAwNjM3MCBZZW5pbWFoYWxsZS9BbmthcmE!5e0!3m2!1str!2str!4v1716503835025!5m2!1str!2str" 
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
          <p>En iyi transfer hizmetini almak için bizi arayın veya ofisimizi ziyaret edin</p>
          <a 
            href="https://wa.me/905397926417?text=Merhaba%2C%20transfer%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." 
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