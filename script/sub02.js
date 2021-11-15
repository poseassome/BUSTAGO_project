$(document).ready(function () {
  //// 버스회사 안내
  $(".type_area ul").slideUp(0);
  $(".type_area h4").mouseenter(function () {
    $(this).css({ cursor: "pointer" });
  })
  $(".type_area h4").click(function () {
    $(".type_area ul").fadeToggle(200);
  });
  $(".type_area a").hover(function () {
    $(this).css({ color: "#272343", "font-weight": "bold" });
  }, function () {
    $(this).css({ color: "" });
  });
  $(".type_area a").click(function () {
    $(".type_area h4").text($(this).text());
    $(".type_area ul").fadeOut(0);
  });

  //// 노선 안내
  // datepicker
  $("#leave_day").datepicker({
    showOn: "both", buttonImage: "./images/icon_date.jpg", showOtherMonths: true
  });
  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd', buttonText: "선택", yearSuffix: "년", monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], showMonthAfterYear: true, prevText: '이전 달',
    nextText: '다음 달',
    beforeShow: function (input, inst) {
      var offset = $(input).offset(); var height = $(input).height(); window.setTimeout(function () { $(inst.dpDiv).css({ top: (offset.top + height + 10) + 'px', left: (offset.left - 9) + 'px' }) }, 1);
    }, minDate: "D", maxDate: "+2M"
  });
  $("#leave_day").datepicker('setDate', 'today');

  // Options
  $(document).click(function (e) {
    if (!$(e.target).is(".time_wrap, #leave_time, a")) {
      var container = $(".time_list");
      container.slideUp(0);
    };
  });
  $(".ui-datepicker-trigger").click(function () {
    $(".time_list").slideUp(200);
  })
  $(".time_wrap").click(function () {
    $(this).next("ul").slideToggle(200);
  });
  $(".time_list a").hover(function () {
    $(this).css({ color: "#272343", "font-weight": "bold" });
  }, function () {
    $(this).css({ color: "" });
  });
  $(".time_list a").click(function () {
    var text = $(this).text();
    $(this).parents("ul").prev("div").find("input").val(text);
    $(this).closest("ul").slideUp(200);
  });
  $(".route_inform_search").click(function () {
    if ($("#depart_spot").val() == "") {
      alert("출발지를 입력해주세요.");
      $("#depart_spot").focus();
      return false;
    } else if ($("#arrive_spot").val() == "") {
      alert("도착지를 입력해주세요.");
      $("#arrive_spot").focus();
      return false;
    } else {
      $(".start").text($("#depart_spot").val());
      $(".end").text($("#arrive_spot").val());
    }
  });

  //// 터미널 안내
  $(".terminal_search_wrap ul a").eq(0).addClass("on");
  $(".terminal_search_wrap ul a").click(function () {
    $(".terminal_search_wrap ul a").removeClass("on");
    $(this).addClass("on");
  });
});