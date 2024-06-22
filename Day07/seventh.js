document.addEventListener("DOMContentLoaded", (event) => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const slideNumber = slides.length;

  function showSlide(n) {
    slides.forEach((slide) => {
      slide.style.opacity = "0";
    });
    slides[n].style.opacity = "1";
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideNumber;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideNumber) % slideNumber;
    showSlide(currentSlide);
  }

  // 초기화
  showSlide(currentSlide);

  // 버튼 이벤트 리스너 연결
  document.querySelector(".prev_button").addEventListener("click", prevSlide);
  document.querySelector(".next_button").addEventListener("click", nextSlide);

  // 자동 슬라이드
  setInterval(nextSlide, 2000); // 2초마다 nextSlide 함수를 호출합니다.
});
