function clock() {
  let timetext = document.querySelector('.clock'); /* h1 태그 갖고오기 */
  let today = new Date(); /* 날짜와 시간 */
  let H = today.getHours();
  let M = today.getMinutes();
  let S = today.getSeconds();

  timetext.innerHTML = 'today ' + H + ':' + M + ':' + S; /* html에 출력 */
}
clock();
setInterval(clock, 1000); /* 1초마다 clock함수 실행 */

$(function () {
  const $crosshair = $('.crosshair');
  let mouseX = 0,
    mouseY = 0;
  let currentX = 0,
    currentY = 0;

  $(document).on('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Lerp 보간값 (0.1이면 10%씩 부드럽게 이동)
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    $crosshair.css({
      left: currentX + 'px',
      top: currentY + 'px',
    });

    requestAnimationFrame(animate);
  }

  animate();
});

gsap.registerPlugin(ScrollTrigger);

// let panels = gsap.utils.toArray('#section');

// panels.forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel, // 트리거하는 요소
//     start: 'top top', // 시작 위치
//     pin: true, // 트리거 작동시 핀 고정
//     scrub: 0.5, // 스크롤 속도
//     pinSpacing: false, // 핀 지정 간격 자동
//   });
// });

const textElements = gsap.utils.toArray('#maintext .b_txt');
textElements.forEach((text) => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: text,
      start: 'center 30%',
      end: 'center 30%',
      scrub: true,
    },
  });
});
