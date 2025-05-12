import React from 'react';
import '../../styles/Corporate.css';
import ContactCard from '../../components/ContactCard';

function VizyonMisyon() {
  return (
    <div className="corporate-page">
      <div className="corporate-hero">
        <div className="corporate-hero-overlay">
          <h1>Vizyon ve Misyonumuz</h1>
          <p>Hedeflerimiz ve değerlerimiz hakkında bilgi edinin</p>
        </div>
      </div>

      <div className="container">
        <div className="corporate-content">
          <div className="section-title">
            <h2>Vizyonumuz</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="corporate-text">
            <p>
              Yıldızlar Nakliyat olarak vizyonumuz, taşımacılık sektöründe en güvenilir, en kaliteli ve 
              en yenilikçi firma olmaktır. Türkiye'nin her noktasında aynı güven ve kalite standardında 
              hizmet sunarak, müşterilerimizin beklentilerinin ötesine geçmeyi hedefliyoruz.
            </p>
            
            <p>
              Modern teknolojileri kullanarak, taşımacılık ve lojistik süreçlerini daha verimli, daha güvenli 
              ve daha çevre dostu hale getirmek için sürekli olarak kendimizi geliştiriyoruz. Yenilikçi 
              çözümlerimiz ve müşteri odaklı yaklaşımımız ile sektörde öncü olmayı sürdüreceğiz.
            </p>
          </div>
          
          <div className="section-title">
            <h2>Misyonumuz</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="corporate-text">
            <p>
              Misyonumuz, müşterilerimize kusursuz bir taşıma deneyimi sunmak için her zaman en yüksek 
              kalite standartlarında hizmet vermektir. Eşyalarınızın güvenliği, taşıma sürecinin verimliliği 
              ve müşteri memnuniyeti bizim için en önemli önceliklerdir.
            </p>
            
            <p>
              Her müşterimizin özel ihtiyaçlarını anlamak, bu ihtiyaçlara göre özelleştirilmiş çözümler 
              sunmak ve tüm süreç boyunca şeffaf bir iletişim sağlamak temel ilkelerimizdir. Müşterilerimizin 
              taşınma stresini en aza indirgemek ve sorunsuz bir taşıma süreci yaşatmak için var gücümüzle 
              çalışıyoruz.
            </p>
          </div>
          
          <div className="section-title">
            <h2>Kalite Politikamız</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="corporate-text">
            <p>
              Yıldızlar Nakliyat olarak, her aşamada en yüksek kalite standartlarını sağlamak için sürekli 
              iyileştirme ve geliştirme felsefesini benimsiyoruz. Kalite politikamız şu temel ilkeler üzerine 
              kuruludur:
            </p>
            
            <ul className="quality-list">
              <li>Müşteri memnuniyetini her zaman ön planda tutmak</li>
              <li>Deneyimli ve profesyonel ekibimizi sürekli eğitmek</li>
              <li>Modern ekipman ve araçlarla çalışmak</li>
              <li>Taşıma süreçlerinde eşya güvenliğini maksimum düzeyde sağlamak</li>
              <li>Tüm hizmetlerimizde sigorta güvencesi sunmak</li>
              <li>Çevre dostu uygulamaları teşvik etmek</li>
              <li>Yasal mevzuatlara tam uyum sağlamak</li>
              <li>Sürekli kendimizi geliştirmek ve yeni teknolojileri takip etmek</li>
            </ul>
          </div>
          
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default VizyonMisyon; 