import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Services.css';
import ContactCard from '../components/ContactCard';

// Fake data for services
const servicesData = {
  'ev-ofis': [
    {
      id: 1,
      title: 'Ev Taşıma',
      description: 'Profesyonel ekibimizle ev eşyalarınızı güvenle ve hızlı bir şekilde taşıyoruz. Paketleme ve montaj hizmetleri dahildir.',
      image: 'https://images.unsplash.com/photo-1600518464441-9306a5461596?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/ev-tasima'
    },
    {
      id: 2,
      title: 'Ofis Taşıma',
      description: 'İş süreçlerinizi aksatmadan, hafta sonu tercihinize göre ofis mobilyalarınızı ve elektronik cihazlarınızı taşıyoruz.',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/ofis-tasima'
    },
    {
      id: 3,
      title: 'Parça Eşya Taşıma',
      description: 'Tek bir mobilya veya birkaç parça eşyanızı ekonomik ve hızlı bir şekilde istediğiniz adrese teslim ediyoruz.',
      image: 'https://images.unsplash.com/photo-1584813470613-611b7c86c6d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/parca-esya-tasima'
    }
  ],
  'depolama': [
    {
      id: 1,
      title: 'Kısa Süreli Depolama',
      description: 'Evinizi yenilerken veya taşınma sürecinizde eşyalarınızı güvenli ve iklim kontrollü depolarda saklıyoruz.',
      image: 'https://images.unsplash.com/photo-1581615160292-8a82d18434a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      path: '/hizmetlerimiz/depolama-hizmetleri/kisa-sureli'
    },
    {
      id: 2,
      title: 'Uzun Süreli Depolama',
      description: 'Uzun süreli saklama ihtiyaçlarınız için nem ve sıcaklık kontrollü ortamlarda eşyalarınızı güvenle muhafaza ediyoruz.',
      image: 'https://images.unsplash.com/photo-1600518464441-9306a5461596?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      path: '/hizmetlerimiz/depolama-hizmetleri/uzun-sureli'
    },
    {
      id: 3,
      title: 'Özel Eşya Depolama',
      description: 'Antika, sanat eseri veya değerli koleksiyon parçalarınız için özel güvenlik önlemleri ile depolama hizmeti sunuyoruz.',
      image: 'https://images.unsplash.com/photo-1517705925264-65f99697f71f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      path: '/hizmetlerimiz/depolama-hizmetleri/ozel-esya'
    }
  ],
  'lojistik': [
    {
      id: 1,
      title: 'Şehirler Arası Nakliye',
      description: 'Turkiye\'nin her noktasına güvenilir ve hızlı nakliye hizmeti sunuyoruz. Eşyalarınız zamanında ve güvenle teslim edilir.',
      image: 'https://images.unsplash.com/photo-1620041310639-dfa7d95821c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      path: '/hizmetlerimiz/lojistik-destek/sehirlerarasi-nakliye'
    },
    {
      id: 2,
      title: 'Kurumsal Lojistik',
      description: 'Şirketinizin tüm lojistik ihtiyaçlarını karşılıyoruz. Düzenli sevkiyat ve stok yönetimi çözümleri sunuyoruz.',
      image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      path: '/hizmetlerimiz/lojistik-destek/kurumsal-lojistik'
    },
    {
      id: 3,
      title: 'Özel Proje Taşımacılığı',
      description: 'Ağır yük veya özel taşıma gerektiren projeleriniz için özel çözümler sunuyoruz. Her türlü ekipman desteği ile hizmetinizdeyiz.',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      path: '/hizmetlerimiz/lojistik-destek/ozel-proje'
    }
  ]
};

function Services({ initialTab }) {
  const [activeTab, setActiveTab] = useState(initialTab || 'ev-ofis');
  const navigate = useNavigate();

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // Tab değiştirme işlevi
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    
    // URL'yi güncelle
    let url;
    switch (tab) {
      case 'ev-ofis':
        url = '/hizmetlerimiz/ev-ofis-tasimaciligi';
        break;
      case 'depolama':
        url = '/hizmetlerimiz/depolama-hizmetleri';
        break;
      case 'lojistik':
        url = '/hizmetlerimiz/lojistik-destek';
        break;
      default:
        url = '/hizmetlerimiz';
    }
    navigate(url);
  };

  // Kart detayına gitme işlevi
  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Hizmetlerimiz</h1>
          <p>Yurt içi ve yurt dışı taşımacılık ve depolama hizmetlerimizle yanınızdayız.</p>
        </div>
      </div>

      <div className="service-tabs-container">
        <div className="service-tabs">
          <button 
            className={`tab-btn ${activeTab === 'ev-ofis' ? 'active' : ''}`}
            onClick={() => handleTabChange('ev-ofis')}
          >
            Yurt İçi Ev ve Ofis Taşımacılığı
          </button>
          <button 
            className={`tab-btn ${activeTab === 'depolama' ? 'active' : ''}`}
            onClick={() => handleTabChange('depolama')}
          >
            Yurt İçi Depolama Hizmetleri
          </button>
          <button 
            className={`tab-btn ${activeTab === 'lojistik' ? 'active' : ''}`}
            onClick={() => handleTabChange('lojistik')}
          >
            Lojistik Destek Hizmetleri
          </button>
        </div>

        <div className="service-cards">
          {servicesData[activeTab].map((service) => (
            <div key={service.id} className="service-card" onClick={() => handleCardClick(service.path)}>
              <div className="card-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="detail-btn">Detaylar</button>
              </div>
            </div>
          ))}
        </div>

        <ContactCard />
      </div>
    </div>
  );
}

export default Services; 