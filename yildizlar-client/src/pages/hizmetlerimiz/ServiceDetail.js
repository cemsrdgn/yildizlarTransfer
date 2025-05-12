import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../styles/ServiceDetail.css';
import ContactCard from '../../components/ContactCard';

// This would normally come from a database or API
const serviceDetails = {
  // Ev ve Ofis Taşımacılığı
  'ev-tasima': {
    title: 'Ev Taşıma Hizmetleri',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: 'https://images.unsplash.com/photo-1600518464441-9306a5461596?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Yıldızlar Nakliyat olarak evden eve nakliye hizmetimiz ile eşyalarınızı güvenle taşıyoruz. Profesyonel ekibimiz ve modern ekipmanlarımızla taşınma sürecinizi sorunsuz hale getiriyoruz.',
    features: [
      'Profesyonel paketleme hizmeti',
      'Sigortalı taşıma',
      'Demontaj ve montaj hizmetleri',
      'Hijyenik ve güvenli taşıma araçları',
      'Yük asansörü imkanı',
      'Yerinde keşif ve ön planlama'
    ],
    process: [
      'Müşteri temsilcimiz ile iletişime geçin',
      'Ücretsiz keşif ve ekspertiz',
      'Taşınma planı oluşturulması',
      'Profesyonel paketleme ve hazırlık',
      'Güvenli taşıma ve teslim',
      'Montaj ve yerleştirme'
    ]
  },
  'ofis-tasima': {
    title: 'Ofis Taşıma Hizmetleri',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: 'Yıldızlar Nakliyat, işletmenizin ofis taşıma sürecini minimum kesinti ile profesyonelce yönetir. İş akışınızı aksatmadan, güvenli ve hızlı taşıma hizmeti sunuyoruz.',
    features: [
      'Hafta sonu taşıma seçeneği',
      'Elektronik ekipman ve doküman güvenliği',
      'Server ve bilgisayar sistemleri taşıma uzmanlığı',
      'Demontaj ve montaj hizmetleri',
      'Sigortalı taşıma',
      'Detaylı planlama ve koordinasyon'
    ],
    process: [
      'Ücretsiz keşif ve teklif',
      'Detaylı taşıma planı oluşturma',
      'Ekipman ve dokümanların hazırlanması',
      'Profesyonel paketleme',
      'Demontaj işlemleri',
      'Güvenli taşıma ve yerleştirme',
      'Montaj ve kurulum'
    ]
  },
  // Diğer hizmet detayları da benzer şekilde eklenebilir...
};

function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  // Eğer servis bulunamazsa
  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="container">
          <h2>Hizmet bulunamadı</h2>
          <p>İstediğiniz hizmet detayına ulaşılamadı.</p>
          <Link to="/hizmetlerimiz" className="back-button">Hizmetler Sayfasına Dön</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      <div className="detail-hero" style={{ backgroundImage: `url(${service.image})` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>{service.title}</h1>
          <p>{service.category}</p>
        </div>
      </div>

      <div className="detail-content">
        <div className="container">
          <Link to="/hizmetlerimiz" className="back-button">
            <i className="arrow-left"></i> Tüm Hizmetler
          </Link>

          <div className="service-description">
            <h2>Hizmet Detayları</h2>
            <p>{service.description}</p>
          </div>

          <div className="service-features">
            <h3>Hizmet Özellikleri</h3>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="service-process">
            <h3>Hizmet Süreci</h3>
            <ol className="process-steps">
              {service.process.map((step, index) => (
                <li key={index}>
                  <span className="step-number">{index + 1}</span>
                  <span className="step-text">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail; 