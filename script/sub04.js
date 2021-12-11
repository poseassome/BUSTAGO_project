$(document).ready(function () {
  //// 자주묻는질문(FAQ)
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

  //// 일대일 문의하기
  $(".opinion_type input").click(function () {
    $(".opinion_type ul").fadeToggle(100);
  });
  $(".opinion_type ul a").hover(function () {
    $(this).css({ color: "#272343", "font-weight": "bold" });
  }, function () {
    $(this).css({ color: "" });
  });
  $(".opinion_type ul a").click(function () {
    $("#op_type").val($(this).text());
    $(this).parents("ul").fadeOut(100);
  });
  $(document).click(function (e) {
    if (!$(e.target).is("#op_type")) {
      var container = $(".opinion_type ul");
      container.slideUp(0);
    };
  });

  //// 공지사항
  $(".type_searching h4").click(function () {
    $(".type_searching ul").fadeToggle(100);
  });
  $(".type_searching ul a").hover(function () {
    $(this).css({ color: "#272343", "font-weight": "bold" });
  }, function () {
    $(this).css({ color: "" });
  });
  $(".type_searching ul a").click(function () {
    $(".type_searching h4").text($(this).text());
    $(this).parents("ul").fadeOut(100);
  });
  $(document).click(function (e) {
    if (!$(e.target).is(".type_searching h4")) {
      var container = $(".type_searching ul");
      container.slideUp(0);
    };
  });


  $("#attach-file").change(function () {
    var fileName = $("#attach-file").val();
    $(".upload-name").val(fileName);
    $('#delete-file').css('display', 'inline');
  });
  $('#delete-file').click(function () {
    $('#delete-file').css('display', 'none');
    $(".upload-name").val('');
    $('#attach-file').val('');
  });
});