import React from 'react';
import '../../styles/Corporate.css';
import corporateImage from '../../assets/corporateGorsel.png';
import ContactCard from '../../components/ContactCard';

// Araç görsellerini import ediyoruz
import aracGorsel1 from '../../assets/araclarimiz/aracGorsel1.jpeg';
import aracGorsel2 from '../../assets/araclarimiz/aracGorsel2.jpeg';
import aracGorsel3 from '../../assets/araclarimiz/aracGorsel3.jpeg';

function Araclarimiz() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${corporateImage})`
  };

  return (
    <div className="corporate-page">
      <div className="corporate-hero" style={heroStyle}>
        <div className="corporate-hero-overlay">
          <h1>Araçlarımız</h1>
          <p>Modern ve güvenli araç filomuz</p>
        </div>
      </div>

      <div className="container">
        <div className="corporate-section vehicles">
          <div className="section-title">
            <h2>Araç Filomuz</h2>
            <div className="title-underline"></div>
          </div>
          
          <p className="vehicles-intro">
            Yıldızlar Transfer olarak, tüm transfer ihtiyaçlarınızı karşılamak için modern ve bakımlı araç filomuzla hizmetinizdeyiz. Araçlarımız düzenli olarak bakımdan geçirilmekte ve müşterilerimizin güvenliği için tüm önlemler alınmaktadır.
          </p>
          
          <div className="vehicles-gallery">
            {/* Gerçek araç fotoğraflarını ekliyoruz */}
            <div className="vehicle-item">
              <img src={aracGorsel1} alt="Yıldızlar Transfer Araç 1" className="vehicle-image" />
              <div className="vehicle-caption">
                <p>Hafif ve orta ölçekli taşımalar için ideal</p>
              </div>
            </div>
            
            <div className="vehicle-item">
              <img src={aracGorsel2} alt="Yıldızlar Transfer Araç 2" className="vehicle-image" />
              <div className="vehicle-caption">
                <p>Büyük ölçekli ve özel eşya taşımaları için</p>
              </div>
            </div>
            
            <div className="vehicle-item">
              <img src={aracGorsel3} alt="Yıldızlar Transfer Araç 3" className="vehicle-image" />
              <div className="vehicle-caption">
                <p>Ağır yük ve uzun mesafe taşımacılığı için</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="corporate-section vehicle-features">
          <div className="section-title">
            <h2>Araç Filomuzun Özellikleri</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="vehicles-features">
            <ul>
              <li>Modern ve bakımlı araçlar</li>
              <li>Konforlu yolculuk imkanı</li>
              <li>Farklı ihtiyaçlara uygun çeşitli araç tipleri</li>
              <li>Düzenli bakım ve kontrol</li>
              <li>Güvenli ve ekonomik transfer çözümleri</li>
              <li>Klimalı ve konforlu iç donanım</li>
              <li>Tecrübeli ve profesyonel sürücüler</li>
              <li>7/24 ulaşılabilir araç temin imkanı</li>
            </ul>
          </div>
          
          <div className="advantages-grid">
            <div className="advantage-box">
              <div className="value-icon trust-icon"></div>
              <h3>Güvenlik</h3>
              <p>Tüm araçlarımızda yolculuğunuz için gerekli güvenlik önlemleri alınmıştır.</p>
            </div>
            
            <div className="advantage-box">
              <div className="value-icon trust-icon"></div>
              <h3>Konfor</h3>
              <p>Yolculuğunuzun konforlu geçmesi için araçlarımız özenle hazırlanmıştır.</p>
            </div>
            
            <div className="advantage-box">
              <div className="value-icon trust-icon"></div>
              <h3>Düzenli Bakım</h3>
              <p>Araçlarımız düzenli olarak bakım ve kontrolden geçirilmektedir.</p>
            </div>
            
            <div className="advantage-box">
              <div className="value-icon trust-icon"></div>
              <h3>Çeşitlilik</h3>
              <p>Farklı ihtiyaçlarınıza uygun araç seçenekleri sunuyoruz.</p>
            </div>
          </div>
        </div>
        
        <ContactCard />
      </div>
    </div>
  );
}

export default Araclarimiz; 