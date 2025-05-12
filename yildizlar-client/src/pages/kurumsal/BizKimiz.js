import React from 'react';
import '../../styles/Corporate.css';
import ContactCard from '../../components/ContactCard';

function BizKimiz() {
  return (
    <div className="corporate-page">
      <div className="corporate-hero">
        <div className="corporate-hero-overlay">
          <h1>Biz Kimiz?</h1>
          <p>Yıldızlar Nakliyat hakkında bilgi edinin</p>
        </div>
      </div>

      <div className="container">
        <div className="corporate-content">
          <div className="section-title">
            <h2>Hikayemiz</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="corporate-text">
            <p>
              Yıldızlar Nakliyat olarak 20 yılı aşkın süredir evden eve nakliyat, ofis taşımacılığı, 
              eşya depolama ve şehirlerarası nakliyat hizmetleri sunmaktayız. 2000 yılında kurulan 
              şirketimiz, müşteri memnuniyetini ön planda tutarak kaliteli ve güvenilir hizmet anlayışı 
              ile sektörde öncü firmalar arasında yer almaktadır.
            </p>
            
            <p>
              İlk günden bugüne kadar binlerce müşterimize hizmet verdik ve her zaman en iyi olmak için 
              çalıştık. Deneyimli ekibimiz, modern araç filomuz ve teknolojik altyapımız ile tüm taşıma 
              ihtiyaçlarınızda yanınızdayız.
            </p>
            
            <p>
              İstanbul merkez olmak üzere tüm Türkiye'ye hizmet vermekteyiz. Yıldızlar Nakliyat olarak 
              hizmet verdiğimiz her noktada aynı kalite ve güvenilirlik ile çalışmalarımızı sürdürüyoruz.
            </p>
          </div>
          
          <div className="corporate-values">
            <div className="section-title">
              <h2>Değerlerimiz</h2>
              <div className="title-underline"></div>
            </div>
            
            <div className="values-grid">
              <div className="value-box">
                <div className="value-icon trust-icon"></div>
                <h3>Güven</h3>
                <p>Müşterilerimizin güvenini kazanmak ve korumak en önemli önceliğimizdir.</p>
              </div>
              
              <div className="value-box">
                <div className="value-icon quality-icon"></div>
                <h3>Kalite</h3>
                <p>Her aşamada en yüksek kalite standartlarında hizmet sunuyoruz.</p>
              </div>
              
              <div className="value-box">
                <div className="value-icon expertise-icon"></div>
                <h3>Uzmanlık</h3>
                <p>Deneyimli ekibimiz her türlü taşıma işlemini profesyonelce gerçekleştirir.</p>
              </div>
              
              <div className="value-box">
                <div className="value-icon safety-icon"></div>
                <h3>Güvenlik</h3>
                <p>Eşyalarınızın güvenliği bizim için en önemli konulardan biridir.</p>
              </div>
            </div>
          </div>
          
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default BizKimiz; 