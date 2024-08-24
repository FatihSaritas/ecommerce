//! slider start
let slideIndex = 1;
// slideIndex değişkeni, şu anda gösterilen slaytın indeksini tutar.

showSlides(slideIndex);
//showSlides(slideIndex) işlevi çağrılarak, ilk slayt gösterilir.

setInterval(() => {
  showSlides((slideIndex += 1));
}, 4000);
// burda set intervalı her 4 saniyede bir fotoğrafı otamatik değiştirmesi için kullandık fonskiyonu çağırarıak sürekli 1 arttırdık

function plusSlide(n) {
  showSlides((slideIndex += n));
}
// plusSlide(n) işlevi, n kadar ileri veya geri giderek slaytı değiştirir.

function currentSlide(n) {
  showSlides((slideIndex = n));
}
//currentSlide(n) işlevi, belirli bir slayta atlamak için kullanılır.

function showSlides(n) {
  const slides = document.getElementsByClassName('slider-item');
  // bu eriştiğimiz fotoğralı item olarak oluşturdugumuz slider ekranı
  const dots = document.getElementsByClassName('slider-dot');
  // bu eriştiğimiz fotoğraf altındaki dotslar yani nokta singeleri

  if (n > slides.length) {
    slideIndex = 1;
  }
  // bu sorgu slider öğesini sınırlandırmaya yarar uzunluktan buyuk olursa tekrar başa 1 döner

  if (n < 1) {
    slideIndex = slides.length;
  }
  //1 den küçük olursa eğer tekrar slider uzunluğuna döner yani kaç tane varsa onun uzunluğu 3 foto oldugundan 3cüye gider eksilmede

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  //for döngüleri, tüm slaytları gizler ve tüm noktaları aktif olmayan duruma getirir.

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  // tüm noktaları aktif olmayan duruma getirir.

  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex - 1].className += ' active';

  //slides ve dots değişkenleri,
  //slider - item ve slider - dot sınıfına sahip HTML öğelerini seçer.

  //Bu iki satır,
  //geçerli slaytı ve nokta göstergesini görünür hale getirmek ve aktif durumuna getirmek için kullanılır.
}

//! slider end
