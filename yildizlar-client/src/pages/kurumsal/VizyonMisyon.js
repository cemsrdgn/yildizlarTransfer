import React from 'react';
import '../../styles/Corporate.css';
import corporateImage from '../../assets/corporateGorsel.png';
import ContactCard from '../../components/ContactCard';

function VizyonMisyon() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${corporateImage})`
  };

  return (
    <div className="corporate-page">
      <div className="corporate-hero" style={heroStyle}>
        <div className="corporate-hero-overlay">
          <h1>Vizyon ve Misyonumuz</h1>
          <p>Hedeflerimiz ve değerlerimiz</p>
        </div>
      </div>

      <div className="container">
        <div className="corporate-section vision-mission">
          <div className="section-title">
            <h2>Kurumsal Değerlerimiz</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="corporate-content">
            <div className="corporate-highlights">
              <div className="highlight-box">
                <div className="highlight-icon vision-icon"></div>
                <h3>Vizyonumuz</h3>
                <p>Transfer ve nakliye sektöründe Ankara'nın ve Türkiye'nin önde gelen firmalarından biri olmak, müşterilerimize her zaman güvenilir ve kaliteli hizmet sunmak.</p>
              </div>
              
              <div className="highlight-box">
                <div className="highlight-icon mission-icon"></div>
                <h3>Misyonumuz</h3>
                <p>Müşterilerimizin ihtiyaçlarını en hızlı ve güvenli şekilde karşılamak, profesyonel ekibimiz ve modern araç filomuzla kusursuz hizmet vermek.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="corporate-section values-details">
          <div className="section-title">
            <h2>Temel Değerlerimiz</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="values-grid">
            <div className="value-box">
              <div className="value-icon trust-icon"></div>
              <h3>Güvenilirlik</h3>
              <p>Sözümüzü tutar, verdiğimiz her taahhüdü yerine getiririz. Güven bizim için en önemli değerdir.</p>
            </div>
            
            <div className="value-box">
              <div className="value-icon honesty-icon"></div>
              <h3>Dürüstlük</h3>
              <p>Her müşterimize karşı açık ve dürüst bir iletişim politikası izleriz.</p>
            </div>
            
            <div className="value-box">
              <div className="value-icon professional-icon"></div>
              <h3>Profesyonellik</h3>
              <p>İşimizi en iyi şekilde yapmak için sürekli kendimizi geliştiririz.</p>
            </div>
            
            <div className="value-box">
              <div className="value-icon customer-focus-icon"></div>
              <h3>Müşteri Odaklılık</h3>
              <p>Tüm süreçlerimizde müşteri memnuniyeti en önemli önceliğimizdir.</p>
            </div>
            
            <div className="value-box">
              <div className="value-icon punctuality-icon"></div>
              <h3>Zamanında Teslimat</h3>
              <p>Söz verdiğimiz zamanda, işimizi eksiksiz tamamlarız.</p>
            </div>
            
            <div className="value-box">
              <div className="value-icon improvement-icon"></div>
              <h3>Sürekli Gelişim</h3>
              <p>Kendimizi sürekli yenileyerek daha iyi hizmet vermeyi amaçlarız.</p>
            </div>
          </div>
        </div>
        
        <ContactCard />
      </div>
    </div>
  );
}

export default VizyonMisyon; 