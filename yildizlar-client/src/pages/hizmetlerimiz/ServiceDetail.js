import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../styles/ServiceDetail.css';
import ContactCard from '../../components/ContactCard';

// Import images for Yurt İçi Ev ve Ofis Taşımacılığı
import evdenEveNakliyatImg from '../../assets/yurtIciEvVeOfisTasimaciligi/evdenEveNakliyat.jpg';
import ekspertizHizmetleriImg from '../../assets/yurtIciEvVeOfisTasimaciligi/ekspertizHizmetleri.jpg';
import buroOfisTasimaciligiImg from '../../assets/yurtIciEvVeOfisTasimaciligi/buroOfisTasimaciligi.jpg';
import kasaTasimaciligiImg from '../../assets/yurtIciEvVeOfisTasimaciligi/kasaTasimaciligi.webp';
import piyanoTasimaciligiImg from '../../assets/yurtIciEvVeOfisTasimaciligi/piyanoTasimaciligi.webp';
import kiymetliEsyalarImg from '../../assets/yurtIciEvVeOfisTasimaciligi/kiymetliVeDegerliEsyalarTasimaciligi.jpg';
import aracTasimaciligiImg from '../../assets/yurtIciEvVeOfisTasimaciligi/aracTasimaciligi.jpg';
import evcilHayvanTransferiImg from '../../assets/yurtIciEvVeOfisTasimaciligi/evcilHayvantransferi.jpg';
import sigortaHizmetleriImg from '../../assets/yurtIciEvVeOfisTasimaciligi/sigortaHizmetleri.png';
import ambalajlamaPaketlemeImg from '../../assets/yurtIciEvVeOfisTasimaciligi/ambalajlamaVePaketleme.jpg';
import yuklemeBosaltmaImg from '../../assets/yurtIciEvVeOfisTasimaciligi/yuklemeVeBosaltmaDestek.jpg';
import operasyonSonrasiImg from '../../assets/yurtIciEvVeOfisTasimaciligi/operasyonSonrasıHizmetler.png';

// Import images for Yurt İçi Depolama Hizmetleri
import depoYonetimiImg from '../../assets/yurtIcıDepolamaHizmetleri/depoYonetimi.jpeg';
import kiralikDepoAlaniImg from '../../assets/yurtIcıDepolamaHizmetleri/kiralikDepoAlani.jpg';
import paketlemeSandiklamaImg from '../../assets/yurtIcıDepolamaHizmetleri/paketlemeVeSandiklama.jpg';
import kurumsalDepolamaImg from '../../assets/yurtIcıDepolamaHizmetleri/kurumsalOzelDepolama.jpg';
import ambalajlamaPaletlemeImg from '../../assets/yurtIcıDepolamaHizmetleri/ambalajlamaVePaketlemeVePaletleme.png';
import envanterYonetimiImg from '../../assets/yurtIcıDepolamaHizmetleri/envanterStokYonetimi.jpg';
import kisiselDepoImg from '../../assets/yurtIcıDepolamaHizmetleri/kisiselDepoYonetimi.webp';
import guvenlikliDepoImg from '../../assets/yurtIcıDepolamaHizmetleri/güvenlikliDepoYönetimi.png';
import etiketlemeBarkodlamaImg from '../../assets/yurtIcıDepolamaHizmetleri/etiketlemeVeBarkodlama.jpg';

// Import images for Lojistik Destek Hizmetleri
import projeTasimaciligiImg from '../../assets/lojistikDestekHizmetleri/projeTasimaciligi.jpg';
import tasimaDagitimImg from '../../assets/lojistikDestekHizmetleri/tasimaDestekDagitim.jpg';
import montajDemontajImg from '../../assets/lojistikDestekHizmetleri/montajDemontaj.jpg';
import ambalajPaketlemeImg from '../../assets/lojistikDestekHizmetleri/ambalajVePaketleme.png';
import konteynerTasimaImg from '../../assets/lojistikDestekHizmetleri/konteynerTasimaVePaket.jpg';
import asansorHizmetleriImg from '../../assets/lojistikDestekHizmetleri/asansorHizmetleri.jpg';
import bakimOnarimImg from '../../assets/lojistikDestekHizmetleri/bakımVeOnarim.jpg';
import teknikBilgiImg from '../../assets/lojistikDestekHizmetleri/teknikBilgiVeVeri.jpg';
import teknikDestekImg from '../../assets/lojistikDestekHizmetleri/teknikDestek.jpg';
import forkliftHizmetleriImg from '../../assets/lojistikDestekHizmetleri/forkliftHizmetleri.jpg';

// This would normally come from a database or API
const serviceDetails = {
  // Ev ve Ofis Taşımacılığı
  'evden-eve-nakliyat': {
    title: 'Evden Eve Nakliyat Hizmetleri',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: evdenEveNakliyatImg,
    slogan: 'Eşyalarınızı özenle taşıyoruz',
    description: 'Yıldızlar Nakliyat olarak evden eve nakliye hizmetimiz ile eşyalarınızı güvenle taşıyoruz. Profesyonel ekibimiz ve modern ekipmanlarımızla taşınma sürecinizi sorunsuz hale getiriyoruz. Sizin için tüm paketleme, taşıma, montaj ve demontaj işlemlerini titizlikle gerçekleştiriyor, yeni evinizde sorunsuz bir başlangıç yapmanızı sağlıyoruz.',
    keyPoints: [
      'Ücretsiz ekspertiz ve taşıma planı',
      'Profesyonel paketleme ve ambalajlama',
      'Sigortalı taşımacılık güvencesi',
      'Demontaj ve montaj hizmetleri',
      'Hijyenik araçlarla güvenli taşıma',
      'Yerleştirme ve düzenleme desteği'
    ]
  },
  'ekspertiz-hizmetleri': {
    title: 'Ekspertiz Hizmetleri',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: ekspertizHizmetleriImg,
    slogan: 'Eşyalarınızın değerini biliyoruz',
    description: 'Taşınacak eşyalarınızın detaylı envanterini çıkarıyor, değerleme yapıyor ve sigorta kapsamını belirliyoruz. Uzman ekibimiz ile eşyalarınızın güvenliği için en uygun çözümleri sunuyoruz. Değerli eşyalarınız bizimle güvende, içiniz rahat olsun.',
    keyPoints: [
      'Detaylı envanter ve değerleme raporu',
      'Özel ve değerli eşya tespiti',
      'Profesyonel risk analizi',
      'Kapsamlı sigorta planlaması',
      'Taşıma öncesi durum tespiti',
      'Taşıma sonrası kontrol raporlaması'
    ]
  },
  'buro-ofis-tasimaciligi': {
    title: 'Büro ve Ofis Taşımacılığı',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: buroOfisTasimaciligiImg,
    slogan: 'İşinizi aksatmadan taşıyoruz',
    description: 'İş süreçlerinizi aksatmadan, hafta sonu tercihinize göre ofis mobilyalarınızı ve elektronik cihazlarınızı taşıyoruz. Özel ekipmanlarımız ve uzman ekibimizle ofis taşıma sürecinizi yönetiyoruz. Şirketinizin değerli ekipmanları güvenle yeni adresine ulaşır, siz sadece işinize odaklanın.',
    keyPoints: [
      'Hafta sonu ve mesai dışı taşıma imkanı',
      'Elektronik ekipman güvenliği',
      'Server ve IT sistemleri taşıma uzmanlığı',
      'Ofis mobilyaları demontaj ve montajı',
      'Arşiv ve doküman taşıma güvenliği',
      'Minimum iş kaybı garantisi'
    ]
  },
  'kasa-tasimaciligi': {
    title: 'Kasa Taşımacılığı',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: kasaTasimaciligiImg,
    slogan: 'Değerleriniz bizimle güvende',
    description: 'Özel güvenlik önlemleri ve profesyonel ekipmanlarla kasa ve kasalarınızı güvenle taşıyoruz. Güvenlik personelimiz ve özel araçlarımızla değerli eşyalarınızı koruyoruz. En değerli varlıklarınızı taşırken maksimum güvenlik önlemleri alıyoruz.',
    keyPoints: [
      'Özel güvenlik personeli eşliğinde taşıma',
      'GPS takip sistemli araçlar',
      'Sigortalı ve garantili taşıma',
      'Profesyonel ekipmanlarla güvenli yükleme',
      'Yüksek tonajlı kasa taşıma uzmanlığı',
      '24 saat güvenlik kamerası kontrolü'
    ]
  },
  'piyano-tasimaciligi': {
    title: 'Piyano Taşımacılığı',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: piyanoTasimaciligiImg,
    slogan: 'Müziğinizi güvenle taşıyoruz',
    description: 'Piyano ve diğer müzik aletlerinizi özel ekipmanlar ve uzman ekibimizle güvenle taşıyoruz. Hassas enstrümanlarınız için özel taşıma çözümleri sunuyoruz. Müzikal değerlerinize verdiğimiz önem ve hassasiyetle, piyanonuzun her notası korunur.',
    keyPoints: [
      'Özel piyano taşıma ekipmanları',
      'Titreşim ve darbeye karşı koruma',
      'Uzman piyano taşıma personeli',
      'Taşıma sonrası akort düzenlemesi',
      'İklim kontrollü araçlar',
      'Her türlü piyano için özel taşıma çözümleri'
    ]
  },
  'kiymetli-esyalar': {
    title: 'Kıymetli ve Değerli Eşyalar Taşımacılığı',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: kiymetliEsyalarImg,
    slogan: 'Değerli eşyalarınız emin ellerde',
    description: 'Antika, sanat eseri ve değerli eşyalarınız için özel güvenlik önlemleri ile taşıma hizmeti sunuyoruz. Her türlü değerli eşyanız için özel çözümler üretiyoruz. Kuşaktan kuşağa aktarılan kıymetli parçalarınızı, sanat eserlerinizi ve antikalarınızı özenle korur ve taşırız.',
    keyPoints: [
      'Değere özel sigorta garantisi',
      'Özel koruyucu ambalajlama',
      'İklim ve nem kontrollü taşıma',
      'Güvenlik personeli eşliğinde taşıma',
      'Sanat eserleri için uzman taşıma ekibi',
      'Antika mobilyalar için özel koruma'
    ]
  },
  'arac-tasimaciligi': {
    title: 'Araç Taşımacılığı',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: aracTasimaciligiImg,
    slogan: 'Araçlarınız güvenle yeni adresine',
    description: 'Özel araç taşıma ekipmanlarımızla araçlarınızı güvenle ve hasarsız bir şekilde taşıyoruz. Her türlü araç için özel taşıma çözümleri sunuyoruz. Lüks, klasik veya standart aracınız olsun, hepsi bizimle güvende.',
    keyPoints: [
      'Kapalı ve açık kasa araç taşıma seçenekleri',
      'Lüks ve klasik araçlar için özel çözümler',
      'Tam sigorta garantisi',
      'Şehirler arası güvenli nakliye',
      'GPS takip sistemi',
      'Hasarsız teslim taahhüdü'
    ]
  },
  'evcil-hayvan-transferi': {
    title: 'Evcil Hayvan Transferi',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: evcilHayvanTransferiImg,
    slogan: 'Dostlarınız bizimle rahat',
    description: 'Evcil hayvanlarınızı özel araçlarımız ve uzman ekibimizle güvenli ve konforlu bir şekilde taşıyoruz. Her türlü evcil hayvan için özel taşıma çözümleri sunuyoruz. Ailenizin bir parçası olan sevimli dostlarınızı stressiz ve konforlu bir yolculukla buluşturuyoruz.',
    keyPoints: [
      'Uzman veteriner danışmanlığı',
      'Klimalı özel hayvan taşıma araçları',
      'Stres azaltıcı konforlu kafesler',
      'Düzenli mola ve besleme planı',
      'Evcil hayvan sigorta güvencesi',
      'Tüm tür hayvanlar için uygun taşıma'
    ]
  },
  'sigorta-hizmetleri': {
    title: 'Sigorta Hizmetleri',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: sigortaHizmetleriImg,
    slogan: 'Güvenceniz bizim taahhüdümüz',
    description: 'Eşyalarınızın güvenliği için kapsamlı sigorta seçenekleri sunuyoruz. Her türlü taşıma işlemi için uygun sigorta paketleri ile hizmetinizdeyiz. Beklenmedik durumlara karşı tam koruma sağlıyor, içinizin rahat olmasını garanti ediyoruz.',
    keyPoints: [
      'Değere özel sigorta paketleri',
      'Hızlı hasar tespiti ve tazminat',
      'Tüm eşya grupları için koruma',
      'Anlaşmalı sigorta şirketleri',
      'Ön ekspertiz ile doğru değerleme',
      'Kapsamlı taşıma sigortası'
    ]
  },
  'ambalajlama-paketleme': {
    title: 'Ambalajlama ve Paketleme',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: ambalajlamaPaketlemeImg,
    slogan: 'Eşyalarınız özenle paketleniyor',
    description: 'Profesyonel paketleme malzemeleri ve uzman ekibimizle eşyalarınızı güvenle paketliyoruz. Her türlü eşya için özel paketleme çözümleri sunuyoruz. Hassas, kırılgan veya değerli - tüm eşyalarınız için özel paketleme çözümlerimizle hasarsız taşınma garantisi veriyoruz.',
    keyPoints: [
      'Yüksek kalite paketleme malzemeleri',
      'Kırılgan eşyalar için özel koruma',
      'Uzun süreli depolama için dayanıklı paketleme',
      'Eşya türüne özgü ambalajlama teknikleri',
      'Çevreci ve geri dönüştürülebilir malzemeler',
      'Etiketleme ve envanter yönetimi'
    ]
  },
  'yukleme-bosaltma': {
    title: 'Yükleme Boşaltma ve Destek',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: yuklemeBosaltmaImg,
    slogan: 'Ağır işleri bize bırakın',
    description: 'Eşyalarınızın güvenli yüklenmesi ve boşaltılması için profesyonel destek hizmeti sunuyoruz. Modern ekipmanlarımız ve uzman ekibimizle yanınızdayız. Fiziksel güç gerektiren tüm işleri uzman ekibimize bırakın, siz sadece yeni evinizin keyfini çıkarın.',
    keyPoints: [
      'Güçlü ve deneyimli taşıma personeli',
      'Modern yükleme ekipmanları',
      'Dar alanlar için özel çözümler',
      'Ağır eşyalar için hidrolik taşıyıcılar',
      'Hassas eşyalar için özenli taşıma',
      'Kat çıkma ve yük asansörü hizmetleri'
    ]
  },
  'operasyon-sonrasi': {
    title: 'Operasyon Sonrası Hizmetler',
    category: 'Yurt İçi Ev ve Ofis Taşımacılığı',
    image: operasyonSonrasiImg,
    slogan: 'Tam hizmet, tam memnuniyet',
    description: 'Taşıma sonrası montaj, yerleştirme ve temizlik hizmetleri ile tam destek sağlıyoruz. Müşteri memnuniyeti için kapsamlı sonrası hizmetler sunuyoruz. Taşınma işleminin ardından tüm eşyalarınızın kurulumu, yerleştirilmesi ve çevre temizliği ile hizmetimizi tamamlıyoruz.',
    keyPoints: [
      'Mobilya ve elektronik eşya kurulumu',
      'Teknik montaj hizmetleri',
      'Taşıma sonrası temizlik',
      'Paketleme malzemelerinin toplanması',
      'Eşya yerleştirme desteği',
      'Eşya hasarı kontrolü ve raporlama'
    ]
  },
  // Depolama Hizmetleri
  'depo-yonetimi': {
    title: 'Depo Yönetimi',
    category: 'Yurt İçi Depolama Hizmetleri',
    image: depoYonetimiImg,
    slogan: 'Eşyalarınız profesyonel yönetimde',
    description: 'Profesyonel depo yönetimi hizmetimizle eşyalarınız güvenli ve düzenli bir şekilde depolanır. Uzman ekibimiz, eşyalarınızın yerleşiminden korunmasına, envanter takibinden güvenliğine kadar tüm süreçleri titizlikle yönetir. Modern depolama tesislerimizde size özel çözümler sunuyoruz.',
    keyPoints: [
      'Tam donanımlı profesyonel depo tesisleri',
      '24 saat güvenlik ve kamera kontrolü',
      'Uzman depo yönetim ekibi',
      'Dijital envanter takip sistemi',
      'Özel eşya yerleşim planlaması',
      'Düzenli bakım ve kontrol hizmetleri'
    ]
  },
  'kiralik-depo': {
    title: 'Kiralık Depo Alanı',
    category: 'Yurt İçi Depolama Hizmetleri',
    image: kiralikDepoAlaniImg,
    slogan: 'Her ihtiyaca uygun depo çözümleri',
    description: 'İhtiyacınıza uygun boyutlarda, güvenli ve iklim kontrollü kiralık depo alanları sunuyoruz. Kısa ve uzun vadeli kiralama seçenekleriyle eşyalarınızı istediğiniz süre boyunca güvenle saklayabilirsiniz. Farklı boyutlardaki depo birimlerimizle hem kişisel hem de kurumsal ihtiyaçlarınıza çözüm üretiyoruz.',
    keyPoints: [
      'Farklı boyutlarda depo birimleri',
      'Esnek kiralama süreleri ve ödeme planları',
      'İklim ve nem kontrolü',
      'Kolay erişim imkanı',
      '7/24 güvenlik sistemleri',
      'Sigortalı depolama alanları'
    ]
  },
  'paketleme-sandiklama': {
    title: 'Paketleme ve Sandıklama',
    category: 'Yurt İçi Depolama Hizmetleri',
    image: paketlemeSandiklamaImg,
    slogan: 'Eşyalarınız özel koruma altında',
    description: 'Her türlü eşyanız için özel paketleme ve sandıklama hizmetleri sunuyoruz. Hassas, kırılgan veya değerli eşyalarınız profesyonel ekipmanlarla koruma altına alınır. Uzun süreli depolama için özel sandıklar ve dayanıklı ambalaj malzemeleri kullanıyoruz.',
    keyPoints: [
      'Yüksek kalite paketleme malzemeleri',
      'Özel ahşap sandıklar ve koruyucu sistemler',
      'Hassas eşyalar için özel çözümler',
      'Antika ve sanat eserleri için özel paketleme',
      'İklim değişikliklerine dayanıklı ambalajlama',
      'Uzun ömürlü sandıklar ve kutular'
    ]
  },
  'kurumsal-depolama': {
    title: 'Kurumsal Özel Depolama',
    category: 'Yurt İçi Depolama Hizmetleri',
    image: kurumsalDepolamaImg,
    slogan: 'Şirketinize özel depolama çözümleri',
    description: 'Şirketinizin ihtiyaçlarına özel, güvenli ve profesyonel kurumsal depolama çözümleri sunuyoruz. Ofis mobilyaları, dosyalar, arşivler ve ekipmanlarınız özel alanlarda güvenle saklanır. Kurumsal müşterilerimize özel raporlama ve stok yönetim sistemleri ile işlerinizi kolaylaştırıyoruz.',
    keyPoints: [
      'Şirketinize özel depo alanı tahsisi',
      'Kurumsal arşiv ve dosya depolama sistemleri',
      'Ofis mobilyaları için özel koruma',
      'Elektronik ekipman depolama hizmetleri',
      'Dijital envanter yönetimi ve raporlama',
      'Yerinde inceleme ve teslimat hizmetleri'
    ]
  },
  'ambalajlama-paletleme': {
    title: 'Ambalajlama, Paketleme ve Paletleme',
    category: 'Yurt İçi Depolama Hizmetleri',
    image: ambalajlamaPaletlemeImg,
    slogan: 'Profesyonel paketleme sistemleri',
    description: 'Eşyalarınızın güvenliği için profesyonel ambalajlama, paketleme ve paletleme hizmetleri sunuyoruz. Her türlü ürün için özel çözümler üreten ekibimiz, en hassas eşyalarınızdan en ağır yüklerinize kadar her şeyi güvenle paketler ve hazırlar.',
    keyPoints: [
      'Endüstriyel paletleme sistemleri',
      'Özel ambalaj malzemeleri ile koruma',
      'Stretch film ve koruyucu malzemeler',
      'Ağır yükler için özel paletleme',
      'İhracat standartlarında paketleme',
      'Çevre dostu ambalaj malzemeleri'
    ]
  },
  'envanter-yonetimi': {
    title: 'Envanter Stok Yönetimi',
    category: 'Yurt İçi Depolama Hizmetleri',
    image: envanterYonetimiImg,
    slogan: 'Eşyalarınızın tam kontrolü',
    description: 'Dijital envanter takip sistemimizle stok yönetimi hizmeti sunuyoruz. Tüm eşyalarınız kayıt altında ve size özel online panel ile anlık erişim imkanı sağlıyoruz. Detaylı raporlama ve bildirim sistemleri ile eşyalarınızın durumu her an kontrolünüz altında.',
    keyPoints: [
      'Online envanter takip sistemi',
      'QR kod ve barkod ile hızlı erişim',
      'Detaylı stok raporları',
      'Mobil uygulama ile anlık kontrol',
      'Otomatik bildirim sistemleri',
      'Güvenli veri saklama ve yedekleme'
    ]
  },
  'kisisel-depo': {
    title: 'Kişisel Depo Yönetimi',
    category: 'Yurt İçi Depolama Hizmetleri',
    image: kisiselDepoImg,
    slogan: 'Size özel depolama çözümleri',
    description: 'Bireysel ihtiyaçlarınız için özel, güvenli ve uygun fiyatlı kişisel depolama hizmetleri sunuyoruz. Her boyutta depo seçeneği ile eşyalarınızı istediğiniz süre boyunca saklayabilir, dilediğiniz zaman erişebilirsiniz. Mevsimlik eşyalar, hobi malzemeleri veya fazla ev eşyalarınız için ideal çözüm.',
    keyPoints: [
      'Farklı boyutlarda kişisel depolar',
      'Ekonomik fiyatlandırma seçenekleri',
      'Esnek kiralama süreleri',
      'Kolay erişim ve güvenlik',
      'Temiz ve düzenli depolama alanları',
      'Kilit ve alarm sistemleri'
    ]
  },
  'guvenlikli-depo': {
    title: 'Güvenlikli Depo Yönetimi',
    category: 'Yurt İçi Depolama Hizmetleri',
    image: guvenlikliDepoImg,
    slogan: 'Maksimum güvenlik garantisi',
    description: 'En yüksek güvenlik standartlarına sahip depolama hizmetimizle değerli eşyalarınız 7/24 koruma altında. Gelişmiş alarm sistemleri, kamera kontrolü, özel güvenlik personeli ve yangın önleme sistemleri ile eşyalarınızı her türlü riske karşı koruyoruz.',
    keyPoints: [
      '7/24 güvenlik kamerası izleme',
      'Gelişmiş alarm ve güvenlik sistemleri',
      'Yangın algılama ve söndürme sistemleri',
      'Özel güvenlik personeli',
      'Biometrik giriş kontrolleri',
      'Sigorta güvencesi'
    ]
  },
  'etiketleme-barkodlama': {
    title: 'Etiketleme ve Barkodlama',
    category: 'Yurt İçi Depolama Hizmetleri',
    image: etiketlemeBarkodlamaImg,
    slogan: 'Her eşyanız kontrol altında',
    description: 'Modern barkod sistemi ile tüm eşyalarınız etiketlenir ve takip edilir. Aradığınız eşyaya anında ulaşım ve stok takibi kolaylığı sağlayan sistemimiz ile depo karmaşasına son veriyoruz. QR kod teknolojisi ile eşyalarınızın detaylı bilgilerine anında erişebilirsiniz.',
    keyPoints: [
      'Modern barkod ve QR kod sistemleri',
      'Dayanıklı etiketler ve özel kodlama',
      'Mobil okuyucular ile hızlı erişim',
      'Detaylı eşya bilgisi ve takip',
      'Envanter sistemi entegrasyonu',
      'Kolay arama ve bulma imkanı'
    ]
  },
  // Lojistik Destek Hizmetleri
  'proje-tasimaciligi': {
    title: 'Proje Taşımacılığı',
    category: 'Lojistik Destek Hizmetleri',
    image: projeTasimaciligiImg,
    slogan: 'Büyük projeler, büyük çözümler',
    description: 'Büyük ölçekli projelerde özel ekipman ve uzman ekibimizle nakliye hizmeti sunuyoruz. Fabrika taşıma, makine yerleştirme, ağır yük taşıma gibi projelerde ihtiyacınız olan tüm lojistik desteği sağlıyoruz. Her projeye özel planlama ve risk değerlendirmesi ile sorunsuz taşıma garantisi.',
    keyPoints: [
      'Proje öncesi keşif ve mühendislik desteği',
      'Özel ekipman ve araç filosu',
      'Ağır ve büyük boyutlu eşya taşıma uzmanlığı',
      'Endüstriyel makine taşıma ve kurulum',
      'Fabrika taşıma ve yerleştirme hizmetleri',
      'Proje yönetimi ve risk analizi'
    ]
  },
  'tasima-dagitim': {
    title: 'Taşıma, Dağıtım ve Destek',
    category: 'Lojistik Destek Hizmetleri',
    image: tasimaDagitimImg,
    slogan: 'Tam zamanında, her yere',
    description: 'Yurt içi taşıma, dağıtım ve lojistik destek hizmetlerimizle işlerinizi kolaylaştırıyoruz. Müşterilerinize ürünlerinizi tam zamanında ulaştırıyor, tedarik zinciri sürecinizi optimize ediyoruz. Modern araç filomuz ve deneyimli sürücülerimizle güvenli ve hızlı taşımacılık.',
    keyPoints: [
      'Şehirler arası taşıma ve dağıtım',
      'Düzenli rota planlaması ve optimizasyon',
      'GPS takip sistemi ile anlık izleme',
      'Soğuk zincir taşımacılığı',
      'Parça ve toplu yük taşıma seçenekleri',
      'Tedarik zinciri danışmanlığı'
    ]
  },
  'montaj-demontaj': {
    title: 'Montaj ve Demontaj',
    category: 'Lojistik Destek Hizmetleri',
    image: montajDemontajImg,
    slogan: 'Kurulum ve söküm için uzman eller',
    description: 'Profesyonel ekibimizle her türlü mobilya ve ekipmanın montaj ve demontaj işlemlerini gerçekleştiriyoruz. Özel aletler ve teknik bilgi gerektiren tüm işlemlerde yanınızdayız. Ev, ofis ve endüstriyel alanlar için kapsamlı kurulum ve söküm hizmetleri sunuyoruz.',
    keyPoints: [
      'Her türlü mobilya montaj ve demontajı',
      'Endüstriyel ekipman kurulumu',
      'Özel aletler ve profesyonel ekipmanlar',
      'Teknik eğitimli montaj ekibi',
      'Zarar görmeden söküm garantisi',
      'Kurulum sonrası test ve kontrol'
    ]
  },
  'ambalaj-paketleme': {
    title: 'Ambalaj ve Paketleme',
    category: 'Lojistik Destek Hizmetleri',
    image: ambalajPaketlemeImg,
    slogan: 'Güvenli paketleme, hasarsız taşıma',
    description: 'Her türlü eşya için özel ambalajlama ve paketleme hizmetleri sunuyoruz. Profesyonel malzemeler ve teknikler ile eşyalarınızı taşıma ve depolama sırasında oluşabilecek hasarlara karşı koruyoruz. Hassas, kırılgan ve değerli eşyalarınız için özel çözümler üretiyoruz.',
    keyPoints: [
      'Eşya türüne özel paketleme malzemeleri',
      'Hava kabarcıklı naylonlar ve koruyucu köpükler',
      'Özel karton kutular ve sandıklar',
      'Hassas eşyalar için şok emici sistemler',
      'Uzun süreli depolama için dayanıklı ambalajlar',
      'Çevre dostu paketleme malzemeleri'
    ]
  },
  'konteyner-tasima': {
    title: 'Konteyner Taşıma ve Paket',
    category: 'Lojistik Destek Hizmetleri',
    image: konteynerTasimaImg,
    slogan: 'Global standartlarda konteyner çözümleri',
    description: 'Konteyner taşımacılığı ve paketleme hizmetleri sunuyoruz. Uluslararası standartlarda güvenli ve hızlı konteyner hizmetleri ile yurt içi ve yurt dışı nakliye ihtiyaçlarınızı karşılıyoruz. Konteyner içi yükleme optimizasyonu ile maliyet avantajı sağlıyoruz.',
    keyPoints: [
      'Standart ve özel boyutlarda konteyner temini',
      'Konteyner içi yükleme ve istifleme hizmeti',
      'Güvenli sabitleme ve kilitleme sistemleri',
      'Konteyner izleme ve takip hizmetleri',
      'Gümrük işlemlerinde destek',
      'İntermodal taşımacılık çözümleri'
    ]
  },
  'asansor-hizmetleri': {
    title: 'Asansör Hizmetleri',
    category: 'Lojistik Destek Hizmetleri',
    image: asansorHizmetleriImg,
    slogan: 'Yükseklere güvenle ulaşın',
    description: 'Yüksek katlı binalarda eşya taşıma için özel yük asansörü hizmetleri sunuyoruz. Dar merdiven ve koridorlardan taşınamayacak büyüklükteki eşyalarınız için pratik ve güvenli çözümler. Modern asansör sistemlerimiz ile eşyalarınızı hasarsız ve hızlı şekilde taşıyoruz.',
    keyPoints: [
      'Dış cephe asansör sistemleri',
      'Her kata güvenli ulaşım',
      'Yüksek taşıma kapasitesi',
      'Profesyonel operatör ekibi',
      'Hızlı kurulum ve söküm',
      'Tüm güvenlik önlemleri ile hizmet'
    ]
  },
  'bakim-onarim': {
    title: 'Bakım ve Onarım',
    category: 'Lojistik Destek Hizmetleri',
    image: bakimOnarimImg,
    slogan: 'Ekipmanlarınız uzman ellerde',
    description: 'Depolama ve taşıma ekipmanları için bakım ve onarım hizmetleri sunuyoruz. Düzenli bakım programları ile ekipmanlarınızın ömrünü uzatıyor, arıza riskini minimize ediyoruz. Teknik servis ekibimiz, en kısa sürede müdahale ile iş kaybınızı önlüyor.',
    keyPoints: [
      'Periyodik bakım programları',
      'Hızlı arıza tespiti ve onarım',
      'Yerinde teknik servis hizmeti',
      'Orijinal yedek parça temini',
      'Taşıma ekipmanları için özel bakım',
      'Bakım raporu ve takip sistemi'
    ]
  },
  'teknik-bilgi': {
    title: 'Teknik Bilgi ve Veri',
    category: 'Lojistik Destek Hizmetleri',
    image: teknikBilgiImg,
    slogan: 'Bilgi güçtür, veri yönetimi esastır',
    description: 'Lojistik süreçleriniz için teknik bilgi ve veri analizi hizmetleri sunuyoruz. Optimizasyon ve verimlilik artışı için uzman danışmanlık ile operasyonlarınızı geliştiriyor, maliyet avantajı sağlıyoruz. İleri analitik yöntemler ile süreç iyileştirme desteği veriyoruz.',
    keyPoints: [
      'Lojistik süreç analizi ve optimizasyon',
      'Rota planlama ve verimlilik danışmanlığı',
      'Maliyet analizi ve iyileştirme',
      'Filo yönetimi ve optimizasyonu',
      'Depo yerleşim ve alan optimizasyonu',
      'Teknolojik çözümler ve uygulama desteği'
    ]
  },
  'teknik-destek': {
    title: 'Teknik Destek',
    category: 'Lojistik Destek Hizmetleri',
    image: teknikDestekImg,
    slogan: '7/24 yanınızdayız',
    description: 'Taşıma ve depolama süreçleriniz için 7/24 teknik destek hizmeti sunuyoruz. Acil durumlarda hızlı müdahale ekibimiz, sorunları minimum kesinti ile çözüyor. Telefon, e-posta ve online destek kanalları ile her an yanınızdayız.',
    keyPoints: [
      '7/24 çağrı merkezi ve yardım hattı',
      'Acil durum müdahale ekibi',
      'Online teknik destek portalı',
      'Uzaktan tanı ve destek sistemleri',
      'Periyodik kontrol ve önleyici destek',
      'Hızlı çözüm garantisi'
    ]
  },
  'forklift-hizmetleri': {
    title: 'Forklift Hizmetleri',
    category: 'Lojistik Destek Hizmetleri',
    image: forkliftHizmetleriImg,
    slogan: 'Ağır işlerin profesyonel çözümü',
    description: 'Ağır yüklerin taşınması için profesyonel forklift hizmetleri sunuyoruz. Uzman operatörler ve modern ekipmanlar ile güvenli yükleme ve indirme işlemleri gerçekleştiriyoruz. Farklı kapasite ve özelliklerde forklift seçenekleri ile her türlü ihtiyaca çözüm.',
    keyPoints: [
      'Sertifikalı forklift operatörleri',
      'Farklı tonajlarda forklift temini',
      'Kapalı ve açık alan operasyonları',
      'Saatlik, günlük veya proje bazlı kiralama',
      'Özel ataşmanlar ile çözümler',
      'İş güvenliği standartlarına tam uyum'
    ]
  }
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

          <div className="service-slogan">
            <h2>{service.slogan}</h2>
          </div>

          <div className="service-description">
            <p>{service.description}</p>
          </div>
          
          <div className="service-key-points">
            <h3>Hizmet Özellikleri</h3>
            <ul className="key-points-list">
              {service.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default ServiceDetail; 