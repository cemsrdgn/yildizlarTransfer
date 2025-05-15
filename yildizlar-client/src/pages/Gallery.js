import React, { useState } from 'react';
import '../styles/Gallery.css';
import ContactCard from '../components/ContactCard';

// Import all gallery images
import img1 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.51 (1).jpeg';
import img2 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.51 (2).jpeg';
import img3 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.51 (3).jpeg';
import img4 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.51 (4).jpeg';
import img5 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.51 (5).jpeg';
import img6 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.51 (6).jpeg';
import img7 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.51 (7).jpeg';
import img8 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.51.jpeg';
import img9 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (1).jpeg';
import img10 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (10).jpeg';
import img11 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (11).jpeg';
import img12 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (2).jpeg';
import img13 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (3).jpeg';
import img14 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (4).jpeg';
import img15 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (5).jpeg';
import img16 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (6).jpeg';
import img17 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (7).jpeg';
import img18 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (8).jpeg';
import img19 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52 (9).jpeg';
import img20 from '../assets/galeri/WhatsApp Image 2025-05-12 at 06.59.52.jpeg';
import img21 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.19.jpeg';
import img22 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.20.jpeg';
import img23 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.24 (1).jpeg';
import img24 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.24 (2).jpeg';
import img25 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.24 (3).jpeg';
import img26 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.24 (4).jpeg';
import img27 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.24 (5).jpeg';
import img28 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.24 (6).jpeg';
import img29 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.24 (7).jpeg';
import img30 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.24.jpeg';
import img31 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (1).jpeg';
import img32 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (10).jpeg';
import img33 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (11).jpeg';
import img34 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (12).jpeg';
import img35 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (13).jpeg';
import img36 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (14).jpeg';
import img37 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (15).jpeg';
import img38 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (16).jpeg';
import img39 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (17).jpeg';
import img40 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (18).jpeg';
import img41 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (19).jpeg';
import img42 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (2).jpeg';
import img43 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (21).jpeg';
import img44 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (22).jpeg';
import img45 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (23).jpeg';
import img46 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (24).jpeg';
import img47 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (25).jpeg';
import img48 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (3).jpeg';
import img49 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (4).jpeg';
import img50 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (5).jpeg';
import img51 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (6).jpeg';
import img52 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (7).jpeg';
import img53 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (8).jpeg';
import img54 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25 (9).jpeg';
import img55 from '../assets/galeri/WhatsApp Image 2025-05-12 at 07.00.25.jpeg';

// Import videos
import video1 from '../assets/galeri/videos/video1.mp4';
import video2 from '../assets/galeri/videos/video2.mp4';

function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  // Videos array
  const galleryVideos = [
    {
      id: 'v1',
      src: video1,
      alt: 'Taşıma Video 1',
      type: 'video',
      poster: img1 // Using first image as poster for video
    },
    {
      id: 'v2',
      src: video2,
      alt: 'Taşıma Video 2',
      type: 'video',
      poster: img2 // Using second image as poster for video
    }
  ];

  // Images array - all imported images
  const galleryImages = [
    { id: 1, src: img1, alt: 'Galeri Görsel 1', type: 'image' },
    { id: 2, src: img2, alt: 'Galeri Görsel 2', type: 'image' },
    { id: 3, src: img3, alt: 'Galeri Görsel 3', type: 'image' },
    { id: 4, src: img4, alt: 'Galeri Görsel 4', type: 'image' },
    { id: 5, src: img5, alt: 'Galeri Görsel 5', type: 'image' },
    { id: 6, src: img6, alt: 'Galeri Görsel 6', type: 'image' },
    { id: 7, src: img7, alt: 'Galeri Görsel 7', type: 'image' },
    { id: 8, src: img8, alt: 'Galeri Görsel 8', type: 'image' },
    { id: 9, src: img9, alt: 'Galeri Görsel 9', type: 'image' },
    { id: 10, src: img10, alt: 'Galeri Görsel 10', type: 'image' },
    { id: 11, src: img11, alt: 'Galeri Görsel 11', type: 'image' },
    { id: 12, src: img12, alt: 'Galeri Görsel 12', type: 'image' },
    { id: 13, src: img13, alt: 'Galeri Görsel 13', type: 'image' },
    { id: 14, src: img14, alt: 'Galeri Görsel 14', type: 'image' },
    { id: 15, src: img15, alt: 'Galeri Görsel 15', type: 'image' },
    { id: 16, src: img16, alt: 'Galeri Görsel 16', type: 'image' },
    { id: 17, src: img17, alt: 'Galeri Görsel 17', type: 'image' },
    { id: 18, src: img18, alt: 'Galeri Görsel 18', type: 'image' },
    { id: 19, src: img19, alt: 'Galeri Görsel 19', type: 'image' },
    { id: 20, src: img20, alt: 'Galeri Görsel 20', type: 'image' },
    { id: 21, src: img21, alt: 'Galeri Görsel 21', type: 'image' },
    { id: 22, src: img22, alt: 'Galeri Görsel 22', type: 'image' },
    { id: 23, src: img23, alt: 'Galeri Görsel 23', type: 'image' },
    { id: 24, src: img24, alt: 'Galeri Görsel 24', type: 'image' },
    { id: 25, src: img25, alt: 'Galeri Görsel 25', type: 'image' },
    { id: 26, src: img26, alt: 'Galeri Görsel 26', type: 'image' },
    { id: 27, src: img27, alt: 'Galeri Görsel 27', type: 'image' },
    { id: 28, src: img28, alt: 'Galeri Görsel 28', type: 'image' },
    { id: 29, src: img29, alt: 'Galeri Görsel 29', type: 'image' },
    { id: 30, src: img30, alt: 'Galeri Görsel 30', type: 'image' },
    { id: 31, src: img31, alt: 'Galeri Görsel 31', type: 'image' },
    { id: 32, src: img32, alt: 'Galeri Görsel 32', type: 'image' },
    { id: 33, src: img33, alt: 'Galeri Görsel 33', type: 'image' },
    { id: 34, src: img34, alt: 'Galeri Görsel 34', type: 'image' },
    { id: 35, src: img35, alt: 'Galeri Görsel 35', type: 'image' },
    { id: 36, src: img36, alt: 'Galeri Görsel 36', type: 'image' },
    { id: 37, src: img37, alt: 'Galeri Görsel 37', type: 'image' },
    { id: 38, src: img38, alt: 'Galeri Görsel 38', type: 'image' },
    { id: 39, src: img39, alt: 'Galeri Görsel 39', type: 'image' },
    { id: 40, src: img40, alt: 'Galeri Görsel 40', type: 'image' },
    { id: 41, src: img41, alt: 'Galeri Görsel 41', type: 'image' },
    { id: 42, src: img42, alt: 'Galeri Görsel 42', type: 'image' },
    { id: 43, src: img43, alt: 'Galeri Görsel 43', type: 'image' },
    { id: 44, src: img44, alt: 'Galeri Görsel 44', type: 'image' },
    { id: 45, src: img45, alt: 'Galeri Görsel 45', type: 'image' },
    { id: 46, src: img46, alt: 'Galeri Görsel 46', type: 'image' },
    { id: 47, src: img47, alt: 'Galeri Görsel 47', type: 'image' },
    { id: 48, src: img48, alt: 'Galeri Görsel 48', type: 'image' },
    { id: 49, src: img49, alt: 'Galeri Görsel 49', type: 'image' },
    { id: 50, src: img50, alt: 'Galeri Görsel 50', type: 'image' },
    { id: 51, src: img51, alt: 'Galeri Görsel 51', type: 'image' },
    { id: 52, src: img52, alt: 'Galeri Görsel 52', type: 'image' },
    { id: 53, src: img53, alt: 'Galeri Görsel 53', type: 'image' },
    { id: 54, src: img54, alt: 'Galeri Görsel 54', type: 'image' },
    { id: 55, src: img55, alt: 'Galeri Görsel 55', type: 'image' }
  ];

  // Combine videos and images, with videos first
  const allMedia = [...galleryVideos, ...galleryImages];

  // Open lightbox for media
  const openLightbox = (media) => {
    setSelectedMedia(media);
    setIsVideo(media.type === 'video');
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  // Handle backdrop click
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
          <div className="video-container">
            {galleryVideos.map((video) => (
              <div 
                key={video.id} 
                className="gallery-item video-item"
                onClick={() => openLightbox(video)}
              >
                <video src={video.src} poster={video.poster} preload="metadata" />
                <div className="video-overlay">
                  <div className="play-icon">▶</div>
                </div>
              </div>
            ))}
          </div>
          
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        
        <ContactCard />
      </div>

      {/* Lightbox */}
      {selectedMedia && (
        <div className="lightbox" onClick={handleBackdropClick}>
          <button className="close-button" onClick={closeLightbox}>×</button>
          <div className="lightbox-content">
            {isVideo ? (
              <video src={selectedMedia.src} controls autoPlay />
            ) : (
              <img src={selectedMedia.src} alt={selectedMedia.alt} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery; 