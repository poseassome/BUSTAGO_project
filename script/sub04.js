$(document).ready(function () {
  // 자주묻는질문(FAQ)
  $(".type_faq_wrap a").first().addClass("on");
  $(".type_faq_wrap a").click(function () {
    $(".type_faq_wrap a").removeClass("on");
    $(this).addClass("on");
  });
  $(".faq_questline").click(function () {
    $(".faq_questline").removeClass("on");
    $(this).addClass("on");
    $(this).after("<li class='faq_answerline'>" + "비회원으로도 동일하게 예매, 조회, 변경, 취소 가능합니다." + "</li>");
  });
});