document.addEventListener("DOMContentLoaded", function () {
  const hiddenText = document.getElementById("hidden-text");
  const hiddenButton = document.getElementById("hidden-button");

  hiddenButton.addEventListener("click", function () {
    // hiddenText 요소의 display 속성을 토글
    hiddenText.style.display =
      hiddenText.style.display === "none" ? "block" : "none";

    // 버튼에 clicked 클래스 토글
    hiddenButton.classList.toggle("clicked");
  });
});

// 네브바 숨겼다 나타내기
let navBar = document.getElementById("nav-bar");

window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;

  if (scrollPosition >= 570) {
    navBar.style.top = "0"; // 네브바를 보이도록 함
  } else {
    navBar.style.top = "-60px"; // 네브바를 숨김
  }
});

// 이미지 로고
// document.addEventListener('DOMContentLoaded', function () {
//   // 3초 뒤에 로고를 서서히 나타나게 함
//   setTimeout(function () {
//     document.querySelector('.logo').style.opacity = 1;
//   }, 1000);

//   // 6초 뒤에 로고를 서서히 사라지게 함
//   setTimeout(function () {
//     document.querySelector('.logo').style.opacity = 0;
//   }, 5000);

//   // 9초 뒤에 h1 텍스트를 서서히 나타나게 함
//   setTimeout(function () {
//     document.querySelector('h1').style.opacity = 1;
//   }, 5000);
// });
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('chanelLogo').style.opacity = '1';
  }, 1000);

  setTimeout(function () {
    document.getElementById('mainTitle').style.opacity = '1';
  }, 3000);
});