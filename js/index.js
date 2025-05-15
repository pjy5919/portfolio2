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

document.addEventListener('DOMContentLoaded', () => {
  const lens = document.createElement('div');
  lens.className = 'lens';
  document.body.appendChild(lens);

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const lensRadius = lens.offsetWidth / 2;

    // 렌즈 위치 조정 (커서 중심 정렬)
    lens.style.left = x - lensRadius + 'px';
    lens.style.top = y - lensRadius + 'px';

    // 배경 위치 조절 (배경 이미지가 200% 확대된 상태이므로 위치 계산)
    lens.style.backgroundPosition = `calc(50% - ${
      (x - lensRadius) * 2
    }px) calc(50% - ${(y - lensRadius) * 2}px)`;

    // 배경 이미지는 body와 동일하게 설정
    lens.style.backgroundImage = getComputedStyle(
      document.body
    ).backgroundImage;

    lens.style.opacity = 1;
  });

  window.addEventListener('mouseleave', () => {
    lens.style.opacity = 0;
  });
});
