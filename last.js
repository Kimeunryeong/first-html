document.addEventListener("DOMContentLoaded", function () {
  const hiddenTexts = document.getElementsByClassName("hidden-text");
  const hiddenButtons = document.getElementsByClassName("hidden-button");

  // hiddenButtons에 대해 이벤트 리스너 등록
  for (let i = 0; i < hiddenButtons.length; i++) {
    hiddenButtons[i].addEventListener("click", function () {
      // 현재 클릭된 hiddenButton의 index를 통해 해당 hiddenText 찾기
      const currentHiddenText = hiddenTexts[i];

      // hiddenText 요소의 display 속성을 토글
      currentHiddenText.style.display =
        currentHiddenText.style.display === "none" ? "block" : "none";

      // 버튼에 clicked 클래스 토글
      hiddenButtons[i].classList.toggle("clicked");
    });
  }
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

