// window.onload = function () {
//   // GNB
//   var gnb = document.querySelector(".gnb>ul");
//   gnb.onmouseover = function () {

//   }

//   // 메인 1단 메뉴
//   var menu = document.querySelectorAll(".main_cont1>ul>li>a");
//   var menu1 = menu[0];
//   var menu2 = menu[1];
//   var menu3 = menu[2];

//   menu1.onclick = function () {
//     if (menu1.classList.contains("tk_off") == true) {
//       menu1.classList.remove("tk_off");

//       var menuoff = document.querySelector(".tk_on");
//       menuoff.classList.remove("tk_on");
//       menuoff.classList.add("tk_off");

//       menu1.classList.add("tk_on");

//       menu1.nextElementSibling.style.display = "block";
//       menuoff.nextElementSibling.classList.add("form_off");
//     } else { };
//   };

//   menu2.onclick = function () {
//     if (menu2.classList.contains("tk_off") == true) {
//       menu2.classList.remove("tk_off");

//       var menuoff = document.querySelector(".tk_on");
//       menuoff.classList.remove("tk_on");
//       menuoff.classList.add("tk_off");

//       menu2.classList.add("tk_on");

//       menu2.nextElementSibling.classList.remove("form_off");
//       menuoff.nextElementSibling.classList.add("form_off");

//     } else { };
//   };

//   menu3.onclick = function () {
//     if (menu3.classList.contains("tk_off") == true) {
//       menu3.classList.remove("tk_off");

//       var menuoff = document.querySelector(".tk_on");
//       menuoff.classList.remove("tk_on");
//       menuoff.classList.add("tk_off");

//       menu3.classList.add("tk_on");

//       menu3.nextElementSibling.classList.remove("form_off");
//       menuoff.nextElementSibling.classList.add("form_off");
//     } else { };
//   };
// };

$(document).ready(function () {
  // GNB
  $(".gnb>ul").css("background", "none");
  $(".submenu").slideUp(0);
  $(".gnb").hover(function () {
    $(".gnb>ul").css("background", "");
    $(".submenu").stop().slideDown('slow');
  }, function () {
    $(".submenu").stop().slideUp('slow',
      function () { $(".gnb>ul").css("background", "none") });
  });
});