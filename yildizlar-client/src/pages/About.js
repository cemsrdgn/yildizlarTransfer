import React from 'react';
import '../styles/Corporate.css';
import corporateImage from '../assets/corporateGorsel.png';

function About() {
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
              
              <div className="highlight-box">
                <div className="highlight-icon values-icon"></div>
                <h3>Değerlerimiz</h3>
                <p>Güvenilirlik, Dürüstlük, Profesyonellik, Müşteri Odaklılık, Zamanında Teslimat, Sürekli Gelişim.</p>
              </div>
            </div>
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
        
        <div className="corporate-section vehicles">
          <div className="section-title">
            <h2>Araçlarımız</h2>
            <div className="title-underline"></div>
          </div>
          
          <p className="vehicles-intro">Yıldızlar Transfer olarak, tüm transfer ihtiyaçlarınızı karşılamak için modern ve bakımlı araç filomuzla hizmetinizdeyiz. Araçlarımız düzenli olarak bakımdan geçirilmekte ve müşterilerimizin güvenliği için tüm önlemler alınmaktadır.</p>
          
          <div className="vehicles-gallery">
            {/* Araç fotoğrafları için yer tutucu alanı */}
            <div className="vehicle-placeholder">
              <div className="placeholder-icon"></div>
              <p>Araç fotoğrafı eklemek için bu alanı kullanabilirsiniz</p>
            </div>
            
            <div className="vehicle-placeholder">
              <div className="placeholder-icon"></div>
              <p>Araç fotoğrafı eklemek için bu alanı kullanabilirsiniz</p>
            </div>
            
            <div className="vehicle-placeholder">
              <div className="placeholder-icon"></div>
              <p>Araç fotoğrafı eklemek için bu alanı kullanabilirsiniz</p>
            </div>
          </div>
          
          <div className="vehicles-features">
            <h3>Araç Filomuzun Özellikleri</h3>
            <ul>
              <li>Modern ve bakımlı araçlar</li>
              <li>Konforlu yolculuk imkanı</li>
              <li>Farklı ihtiyaçlara uygun çeşitli araç tipleri</li>
              <li>Düzenli bakım ve kontrol</li>
              <li>Güvenli ve ekonomik transfer çözümleri</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 