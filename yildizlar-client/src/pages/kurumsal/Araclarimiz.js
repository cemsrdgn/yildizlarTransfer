import React from 'react';
import '../../styles/Corporate.css';
import ContactCard from '../../components/ContactCard';

function Araclarimiz() {
  // Vehicle data
  const vehicles = [
    {
      id: 1,
      name: 'Geniş Hacimli Kamyonlar',
      capacity: '30 metreküp',
      description: 'Büyük ev ve ofis taşımaları için ideal, yüksek hacimli kamyonlarımız',
      image: 'https://images.unsplash.com/photo-1620041310639-dfa7d95821c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Orta Boy Kamyonlar',
      capacity: '20 metreküp',
      description: 'Orta büyüklükteki ev taşımaları için ekonomik çözüm',
      image: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Küçük Kamyonlar',
      capacity: '10 metreküp',
      description: 'Stüdyo daire veya parça eşya taşımaları için uygun',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Özel Eşya Taşıma Araçları',
      capacity: 'Değişken',
      description: 'Piyano, sanat eserleri gibi özel ve değerli eşyalarınız için özel donanımlı araçlar',
      image: 'https://images.unsplash.com/photo-1563902624-541a3c8acd20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="corporate-page">
      <div className="corporate-hero">
        <div className="corporate-hero-overlay">
          <h1>Araç Filomuz</h1>
          <p>Güçlü araç filomuzla hizmetinizdeyiz</p>
        </div>
      </div>

      <div className="container">
        <div className="corporate-content">
          <div className="section-title">
            <h2>Araç Filomuz</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="corporate-text">
            <p>
              Yıldızlar Nakliyat olarak her türlü taşıma ihtiyacınız için geniş ve modern bir araç filosuna 
              sahibiz. Tüm araçlarımız düzenli bakımdan geçirilmekte ve yük güvenliği için özel olarak 
              tasarlanmıştır. Eşyalarınızın güvenli ve hasarsız bir şekilde taşınması bizim için çok önemlidir.
            </p>
            
            <p>
              Taşıma ihtiyacınızın büyüklüğüne göre farklı kapasitelerdeki araçlarımızla size en uygun 
              çözümü sunuyoruz. Her türlü ev, ofis veya özel eşya taşımacılığı için optimize edilmiş 
              araçlarımızla kaliteli hizmet vermeyi taahhüt ediyoruz.
            </p>
          </div>
          
          <div className="vehicles-grid">
            {vehicles.map((vehicle) => (
              <div key={vehicle.id} className="vehicle-card">
                <div className="vehicle-image">
                  <img src={vehicle.image} alt={vehicle.name} />
                </div>
                <div className="vehicle-details">
                  <h3>{vehicle.name}</h3>
                  <div className="vehicle-capacity">
                    <span className="capacity-label">Kapasite:</span>
                    <span className="capacity-value">{vehicle.capacity}</span>
                  </div>
                  <p>{vehicle.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="section-title">
            <h2>Araç Özelliklerimiz</h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon safe-icon"></div>
              <div className="feature-text">
                <h3>Güvenlik</h3>
                <p>Eşyalarınızın güvenliği için özel iç tasarıma sahip araçlar</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon modern-icon"></div>
              <div className="feature-text">
                <h3>Modern Filo</h3>
                <p>Düzenli bakımları yapılan modern araçlar</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon capacity-icon"></div>
              <div className="feature-text">
                <h3>Yüksek Kapasite</h3>
                <p>Farklı boyutlarda taşıma ihtiyaçlarına uygun araçlar</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon tracking-icon"></div>
              <div className="feature-text">
                <h3>Takip Sistemi</h3>
                <p>Eşyalarınızın nerede olduğunu her an takip edebilme imkanı</p>
              </div>
            </div>
          </div>
          
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default Araclarimiz; 