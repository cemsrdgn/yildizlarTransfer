import React from 'react';
import '../styles/ContactCard.css';

function ContactCard() {
  return (
    <div className="contact-card">
      <h2>Hemen Bizimle İletişime Geçin</h2>
      <p>En iyi nakliye hizmetini almak için bizi arayın veya ofisimizi ziyaret edin</p>
      <a 
        href="https://wa.me/905321234567?text=Merhaba%2C%20nakliye%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-button"
      >
        <i className="whatsapp-icon"></i>
        WHATSAPP İLE TEKLİF AL
      </a>
    </div>
  );
}

export default ContactCard; 