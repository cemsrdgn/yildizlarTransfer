import React from 'react';
import '../../styles/Corporate.css';
import corporateImage from '../../assets/corporateGorsel.png';
import ContactCard from '../../components/ContactCard';

function BizKimiz() {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${corporateImage})`
  };

  return (
    <div className="corporate-page">
      <div className="corporate-hero" style={heroStyle}>
        <div className="corporate-hero-overlay">
          <h1>Biz Kimiz</h1>
          <p>Ankara'nın Güvenilir Transfer Çözüm Ortağı</p>
        </div>
      </div>

      <div className="container">
        <div className="corporate-section about-us">
          <div className="section-title">
            <h2>Yıldızlar Transfer</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="corporate-content">
            <p className="corporate-intro">
              <strong>Yıldızlar Transfer</strong>, Ankara merkezli olarak transfer ve nakliye sektöründe yılların tecrübesiyle hizmet vermektedir. Müşteri memnuniyetini temel ilke edinen firmamız, her geçen gün hizmet kalitesini artırarak sektördeki güvenilir konumunu pekiştirmektedir.
            </p>
          </div>
        </div>
        
        <div className="corporate-section why-us">
          <div className="section-title">
            <h2>Neden Biz?</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="why-us-grid">
            <div className="why-us-item">
              <div className="why-us-icon experience-icon"></div>
              <h3>Deneyimli Ekip</h3>
              <p>Yılların tecrübesine sahip, profesyonel ve güler yüzlü ekibimizle hizmetinizdeyiz.</p>
            </div>
            
            <div className="why-us-item">
              <div className="why-us-icon customer-icon"></div>
              <h3>Müşteri Memnuniyeti</h3>
              <p>Müşteri memnuniyetini her zaman ön planda tutarak, beklentilerinizi aşmayı hedefliyoruz.</p>
            </div>
            
            <div className="why-us-item">
              <div className="why-us-icon quality-icon"></div>
              <h3>Kaliteli Hizmet</h3>
              <p>Modern ekipmanlarımız ve özenli çalışma prensibimizle kaliteli hizmet sunuyoruz.</p>
            </div>
            
            <div className="why-us-item">
              <div className="why-us-icon price-icon"></div>
              <h3>Uygun Fiyat</h3>
              <p>Ekonomik fiyatlarla yüksek kalitede hizmet anlayışımızla bütçenizi koruyoruz.</p>
            </div>
            
            <div className="why-us-item">
              <div className="why-us-icon time-icon"></div>
              <h3>Zamanında Teslimat</h3>
              <p>Söz verdiğimiz zamanda, güvenli ve hızlı bir şekilde teslimat yapıyoruz.</p>
            </div>
            
            <div className="why-us-item">
              <div className="why-us-icon solution-icon"></div>
              <h3>Çözüm Odaklı Yaklaşım</h3>
              <p>Her türlü transfer ihtiyacınızda size özel çözümler sunuyoruz.</p>
            </div>
          </div>
        </div>
        
        <ContactCard />
      </div>
    </div>
  );
}

export default BizKimiz; 