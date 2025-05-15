import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Services.css';
import ContactCard from '../components/ContactCard';

// Import images for Yurt İçi Ev ve Ofis Taşımacılığı
import evdenEveNakliyatImg from '../assets/yurtIciEvVeOfisTasimaciligi/evdenEveNakliyat.jpg';
import ekspertizHizmetleriImg from '../assets/yurtIciEvVeOfisTasimaciligi/ekspertizHizmetleri.jpg';
import buroOfisTasimaciligiImg from '../assets/yurtIciEvVeOfisTasimaciligi/buroOfisTasimaciligi.jpg';
import kasaTasimaciligiImg from '../assets/yurtIciEvVeOfisTasimaciligi/kasaTasimaciligi.webp';
import piyanoTasimaciligiImg from '../assets/yurtIciEvVeOfisTasimaciligi/piyanoTasimaciligi.webp';
import kiymetliEsyalarImg from '../assets/yurtIciEvVeOfisTasimaciligi/kiymetliVeDegerliEsyalarTasimaciligi.jpg';
import aracTasimaciligiImg from '../assets/yurtIciEvVeOfisTasimaciligi/aracTasimaciligi.jpg';
import evcilHayvanTransferiImg from '../assets/yurtIciEvVeOfisTasimaciligi/evcilHayvantransferi.jpg';
import sigortaHizmetleriImg from '../assets/yurtIciEvVeOfisTasimaciligi/sigortaHizmetleri.png';
import ambalajlamaPaketlemeImg from '../assets/yurtIciEvVeOfisTasimaciligi/ambalajlamaVePaketleme.jpg';
import yuklemeBosaltmaImg from '../assets/yurtIciEvVeOfisTasimaciligi/yuklemeVeBosaltmaDestek.jpg';
import operasyonSonrasiImg from '../assets/yurtIciEvVeOfisTasimaciligi/operasyonSonrasıHizmetler.png';

// Import images for Yurt İçi Depolama Hizmetleri
import depoYonetimiImg from '../assets/yurtIcıDepolamaHizmetleri/depoYonetimi.jpeg';
import kiralikDepoAlaniImg from '../assets/yurtIcıDepolamaHizmetleri/kiralikDepoAlani.jpg';
import paketlemeSandiklamaImg from '../assets/yurtIcıDepolamaHizmetleri/paketlemeVeSandiklama.jpg';
import kurumsalDepolamaImg from '../assets/yurtIcıDepolamaHizmetleri/kurumsalOzelDepolama.jpg';
import ambalajlamaPaletlemeDepoImg from '../assets/yurtIcıDepolamaHizmetleri/ambalajlamaVePaketlemeVePaletleme.png';
import envanterYonetimiImg from '../assets/yurtIcıDepolamaHizmetleri/envanterStokYonetimi.jpg';
import kisiselDepoImg from '../assets/yurtIcıDepolamaHizmetleri/kisiselDepoYonetimi.webp';
import guvenlikliDepoImg from '../assets/yurtIcıDepolamaHizmetleri/güvenlikliDepoYönetimi.png';
import etiketlemeBarkodlamaImg from '../assets/yurtIcıDepolamaHizmetleri/etiketlemeVeBarkodlama.jpg';

// Import images for Lojistik Destek Hizmetleri
import projeTasimaciligiImg from '../assets/lojistikDestekHizmetleri/projeTasimaciligi.jpg';
import tasimaDagitimImg from '../assets/lojistikDestekHizmetleri/tasimaDestekDagitim.jpg';
import montajDemontajImg from '../assets/lojistikDestekHizmetleri/montajDemontaj.jpg';
import ambalajPaketlemeImg from '../assets/lojistikDestekHizmetleri/ambalajVePaketleme.png';
import konteynerTasimaImg from '../assets/lojistikDestekHizmetleri/konteynerTasimaVePaket.jpg';
import asansorHizmetleriImg from '../assets/lojistikDestekHizmetleri/asansorHizmetleri.jpg';
import bakimOnarimImg from '../assets/lojistikDestekHizmetleri/bakımVeOnarim.jpg';
import teknikBilgiImg from '../assets/lojistikDestekHizmetleri/teknikBilgiVeVeri.jpg';
import teknikDestekImg from '../assets/lojistikDestekHizmetleri/teknikDestek.jpg';
import forkliftHizmetleriImg from '../assets/lojistikDestekHizmetleri/forkliftHizmetleri.jpg';

// Fake data for services
const servicesData = {
  'ev-ofis': [
    {
      id: 1,
      title: 'Evden Eve Nakliyat',
      description: 'Profesyonel ekibimizle ev eşyalarınızı güvenle ve hızlı bir şekilde taşıyoruz. Paketleme ve montaj hizmetleri dahildir.',
      image: evdenEveNakliyatImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/evden-eve-nakliyat'
    },
    {
      id: 2,
      title: 'Ekspertiz Hizmetleri',
      description: 'Taşınacak eşyalarınızın detaylı envanterini çıkarıyor, değerleme yapıyor ve sigorta kapsamını belirliyoruz.',
      image: ekspertizHizmetleriImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/ekspertiz-hizmetleri'
    },
    {
      id: 3,
      title: 'Büro, Ofis Taşımacılığı',
      description: 'İş süreçlerinizi aksatmadan, hafta sonu tercihinize göre ofis mobilyalarınızı ve elektronik cihazlarınızı taşıyoruz.',
      image: buroOfisTasimaciligiImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/buro-ofis-tasimaciligi'
    },
    {
      id: 4,
      title: 'Kasa Taşımacılığı',
      description: 'Özel güvenlik önlemleri ve profesyonel ekipmanlarla kasa ve kasalarınızı güvenle taşıyoruz.',
      image: kasaTasimaciligiImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/kasa-tasimaciligi'
    },
    {
      id: 5,
      title: 'Piyano Taşımacılığı',
      description: 'Piyano ve diğer müzik aletlerinizi özel ekipmanlar ve uzman ekibimizle güvenle taşıyoruz.',
      image: piyanoTasimaciligiImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/piyano-tasimaciligi'
    },
    {
      id: 6,
      title: 'Kıymetli ve Değerli Eşyalar Taşımacılığı',
      description: 'Antika, sanat eseri ve değerli eşyalarınız için özel güvenlik önlemleri ile taşıma hizmeti sunuyoruz.',
      image: kiymetliEsyalarImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/kiymetli-esyalar'
    },
    {
      id: 7,
      title: 'Araç Taşımacılığı',
      description: 'Özel araç taşıma ekipmanlarımızla araçlarınızı güvenle ve hasarsız bir şekilde taşıyoruz.',
      image: aracTasimaciligiImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/arac-tasimaciligi'
    },
    {
      id: 8,
      title: 'Evcil Hayvan Transferi',
      description: 'Evcil hayvanlarınızı özel araçlarımız ve uzman ekibimizle güvenli ve konforlu bir şekilde taşıyoruz.',
      image: evcilHayvanTransferiImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/evcil-hayvan-transferi'
    },
    {
      id: 9,
      title: 'Sigorta Hizmetleri',
      description: 'Eşyalarınızın güvenliği için kapsamlı sigorta seçenekleri sunuyoruz.',
      image: sigortaHizmetleriImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/sigorta-hizmetleri'
    },
    {
      id: 10,
      title: 'Ambalajlama ve Paketleme',
      description: 'Profesyonel paketleme malzemeleri ve uzman ekibimizle eşyalarınızı güvenle paketliyoruz.',
      image: ambalajlamaPaketlemeImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/ambalajlama-paketleme'
    },
    {
      id: 11,
      title: 'Yükleme Boşaltma ve Destek',
      description: 'Eşyalarınızın güvenli yüklenmesi ve boşaltılması için profesyonel destek hizmeti sunuyoruz.',
      image: yuklemeBosaltmaImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/yukleme-bosaltma'
    },
    {
      id: 12,
      title: 'Operasyon Sonrası Hizmetler',
      description: 'Taşıma sonrası montaj, yerleştirme ve temizlik hizmetleri ile tam destek sağlıyoruz.',
      image: operasyonSonrasiImg,
      path: '/hizmetlerimiz/ev-ofis-tasimaciligi/operasyon-sonrasi'
    }
  ],
  'depolama': [
    {
      id: 1,
      title: 'Depo Yönetimi',
      description: 'Profesyonel depo yönetimi hizmetimizle eşyalarınız güvenle ve düzenli bir şekilde depolanır. Tüm süreçler uzman ekibimiz tarafından yönetilir.',
      image: depoYonetimiImg,
      path: '/hizmetlerimiz/depolama-hizmetleri/depo-yonetimi'
    },
    {
      id: 2,
      title: 'Kiralık Depo Alanı',
      description: 'İhtiyacınıza uygun boyutlarda, güvenli ve iklim kontrollü kiralık depo alanları sunuyoruz. Kısa ve uzun vadeli kiralama seçenekleri mevcuttur.',
      image: kiralikDepoAlaniImg,
      path: '/hizmetlerimiz/depolama-hizmetleri/kiralik-depo'
    },
    {
      id: 3,
      title: 'Paketleme ve Sandıklama',
      description: 'Her türlü eşyanız için özel paketleme ve sandıklama hizmetleri sunuyoruz. Hassas eşyalarınız profesyonel ekipmanlarla koruma altına alınır.',
      image: paketlemeSandiklamaImg,
      path: '/hizmetlerimiz/depolama-hizmetleri/paketleme-sandiklama'
    },
    {
      id: 4,
      title: 'Kurumsal Özel Depolama',
      description: 'Şirketinizin ihtiyaçlarına özel, güvenli ve profesyonel kurumsal depolama çözümleri sunuyoruz. Ofis mobilyaları, dosyalar ve ekipmanlar güvende.',
      image: kurumsalDepolamaImg,
      path: '/hizmetlerimiz/depolama-hizmetleri/kurumsal-depolama'
    },
    {
      id: 5,
      title: 'Ambalajlama, Paketleme ve Paletleme',
      description: 'Eşyalarınızın güvenliği için profesyonel ambalajlama, paketleme ve paletleme hizmetleri sunuyoruz. Her türlü ürün için özel çözümler.',
      image: ambalajlamaPaletlemeDepoImg,
      path: '/hizmetlerimiz/depolama-hizmetleri/ambalajlama-paletleme'
    },
    {
      id: 6,
      title: 'Envanter Stok Yönetimi',
      description: 'Dijital envanter takip sistemimizle stok yönetimi hizmeti sunuyoruz. Tüm eşyalarınız kayıt altında ve anlık erişim imkanı.',
      image: envanterYonetimiImg,
      path: '/hizmetlerimiz/depolama-hizmetleri/envanter-yonetimi'
    },
    {
      id: 7,
      title: 'Kişisel Depo Yönetimi',
      description: 'Bireysel ihtiyaçlarınız için özel, güvenli ve uygun fiyatlı kişisel depolama hizmetleri sunuyoruz. Her boyutta depo seçeneği mevcuttur.',
      image: kisiselDepoImg,
      path: '/hizmetlerimiz/depolama-hizmetleri/kisisel-depo'
    },
    {
      id: 8,
      title: 'Güvenlikli Depo Yönetimi',
      description: 'En yüksek güvenlik standartlarına sahip depolama hizmetimizle değerli eşyalarınız 7/24 koruma altında. Gelişmiş alarm sistemleri ve kamera kontrolü.',
      image: guvenlikliDepoImg,
      path: '/hizmetlerimiz/depolama-hizmetleri/guvenlikli-depo'
    },
    {
      id: 9,
      title: 'Etiketleme ve Barkodlama',
      description: 'Modern barkod sistemi ile tüm eşyalarınız etiketlenir ve takip edilir. Aradığınız eşyaya anında ulaşım ve stok takibi kolaylığı.',
      image: etiketlemeBarkodlamaImg,
      path: '/hizmetlerimiz/depolama-hizmetleri/etiketleme-barkodlama'
    }
  ],
  'lojistik': [
    {
      id: 1,
      title: 'Proje Taşımacılığı',
      description: 'Büyük ölçekli projelerde özel ekipman ve uzman ekibimizle nakliye hizmeti sunuyoruz. Hassas ve büyük eşyalar için özel çözümler.',
      image: projeTasimaciligiImg,
      path: '/hizmetlerimiz/lojistik-destek/proje-tasimaciligi'
    },
    {
      id: 2,
      title: 'Taşıma, Dağıtım ve Destek',
      description: 'Yurt içi taşıma, dağıtım ve lojistik destek hizmetleri sunuyoruz. Tam zamanında teslim ve güvenli nakliye garantisi.',
      image: tasimaDagitimImg,
      path: '/hizmetlerimiz/lojistik-destek/tasima-dagitim'
    },
    {
      id: 3,
      title: 'Montaj ve Demontaj',
      description: 'Profesyonel ekibimizle her türlü mobilya ve ekipmanın montaj ve demontaj işlemlerini gerçekleştiriyoruz. Teknik uzmanlık gerektiren çözümler.',
      image: montajDemontajImg,
      path: '/hizmetlerimiz/lojistik-destek/montaj-demontaj'
    },
    {
      id: 4,
      title: 'Ambalaj ve Paketleme',
      description: 'Her türlü eşya için özel ambalajlama ve paketleme hizmetleri sunuyoruz. Profesyonel malzemeler ve teknikler ile güvenli koruma.',
      image: ambalajPaketlemeImg,
      path: '/hizmetlerimiz/lojistik-destek/ambalaj-paketleme'
    },
    {
      id: 5,
      title: 'Konteyner Taşıma ve Paket',
      description: 'Konteyner taşımacılığı ve paketleme hizmetleri sunuyoruz. Uluslararası standartlarda güvenli ve hızlı konteyner hizmetleri.',
      image: konteynerTasimaImg,
      path: '/hizmetlerimiz/lojistik-destek/konteyner-tasima'
    },
    {
      id: 6,
      title: 'Asansör Hizmetleri',
      description: 'Yüksek katlı binalarda eşya taşıma için özel yük asansörü hizmetleri sunuyoruz. Güvenli ve hızlı yükseltme çözümleri.',
      image: asansorHizmetleriImg,
      path: '/hizmetlerimiz/lojistik-destek/asansor-hizmetleri'
    },
    {
      id: 7,
      title: 'Bakım ve Onarım',
      description: 'Depolama ve taşıma ekipmanları için bakım ve onarım hizmetleri sunuyoruz. Düzenli bakım ile ekipman ömrünü uzatın.',
      image: bakimOnarimImg,
      path: '/hizmetlerimiz/lojistik-destek/bakim-onarim'
    },
    {
      id: 8,
      title: 'Teknik Bilgi ve Veri',
      description: 'Lojistik süreçleriniz için teknik bilgi ve veri analizi hizmetleri sunuyoruz. Optimizasyon ve verimlilik için uzman danışmanlık.',
      image: teknikBilgiImg,
      path: '/hizmetlerimiz/lojistik-destek/teknik-bilgi'
    },
    {
      id: 9,
      title: 'Teknik Destek',
      description: 'Taşıma ve depolama süreçleriniz için 7/24 teknik destek hizmeti sunuyoruz. Acil durum çözümleri ve sürekli yardım.',
      image: teknikDestekImg,
      path: '/hizmetlerimiz/lojistik-destek/teknik-destek'
    },
    {
      id: 10,
      title: 'Forklift Hizmetleri',
      description: 'Ağır yüklerin taşınması için profesyonel forklift hizmetleri sunuyoruz. Uzman operatörler ve modern ekipmanlar ile güvenli yükleme ve indirme.',
      image: forkliftHizmetleriImg,
      path: '/hizmetlerimiz/lojistik-destek/forklift-hizmetleri'
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