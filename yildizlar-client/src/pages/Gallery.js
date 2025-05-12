import React, { useState } from 'react';
import '../styles/Gallery.css';
import ContactCard from '../components/ContactCard';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Galeri için örnek resimler
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      alt: 'Ofis Taşıma Hizmeti',
      category: 'Ofis'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1600518464441-9306a5461596?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      alt: 'Ev Taşıma Hizmeti',
      category: 'Ev'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      alt: 'Lojistik Hizmeti',
      category: 'Lojistik'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1620041310639-dfa7d95821c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      alt: 'Şehirler Arası Nakliye',
      category: 'Lojistik'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1581615160292-8a82d18434a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      alt: 'Depolama Hizmeti',
      category: 'Depolama'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1584813470613-611b7c86c6d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      alt: 'Parça Eşya Taşıma',
      category: 'Ev'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1517705925264-65f99697f71f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      alt: 'Özel Eşya Depolama',
      category: 'Depolama'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      alt: 'Kurumsal Lojistik',
      category: 'Lojistik'
    }
  ];

  // Resim tıklama işlevi - lightbox'ı açar
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Arka planı kilitle
  };

  // Lightbox'ı kapat
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Arka plan kaydırmayı etkinleştir
  };

  // Lightbox dışına tıklandığında kapat
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('lightbox')) {
      closeLightbox();
    }
  };

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Galeri</h1>
          <p>Hizmetlerimize ve araçlarımıza ait görseller</p>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-item-overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
        
        <ContactCard />
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={handleBackdropClick}>
          <button className="close-button" onClick={closeLightbox}>×</button>
          <div className="lightbox-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="image-caption">
              <p>{selectedImage.alt}</p>
              <span className="image-category">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Gallery; 