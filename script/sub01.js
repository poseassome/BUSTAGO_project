$(document).ready(function () {
  //// sub01
  // tab
  $(".tk_inform_box>ul>li>h4>a").first().parent().addClass("select_on");
  $(".tk_inform_box>ul>li>h4>a").first().parents("li").find("form").fadeIn(0);
  $(".tk_inform_box>ul>li>h4>a").click(function () {
    $(".tk_inform_box>ul>li>h4>a").parent().removeClass("select_on");
    $(this).parent().addClass("select_on");
    $(".tk_inform_box>ul>li>h4>a").parents("li").find("form").fadeOut(0);
    $(this).parents("li").find("form").fadeIn(0);
  });

  // datepicker
  $("#depart_date").datepicker({
    showOn: "button", buttonImage: "./images/icon_date.jpg", showOtherMonths: true,
  });
  $("#depart_date_r").datepicker({
    showOn: "button", buttonImage: "./images/icon_date.jpg", showOtherMonths: true,
    onClose: function (selectedDate) {
      $("#back_date").datepicker("option", "minDate", selectedDate)
    }
  });
  $("#back_date").datepicker({
    showOn: "button", buttonImage: "./images/icon_date.jpg", showOtherMonths: true,
    onClose: function (selectedDate) {
      $("#depart_date_r").datepicker("option", "maxDate", selectedDate)
    }
  });
  $.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd', buttonText: "선택", yearSuffix: "년", monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], showMonthAfterYear: true, prevText: '이전 달',
    nextText: '다음 달',
    beforeShow: function (input, inst) {
      var offset = $(input).offset(); var height = $(input).height(); window.setTimeout(function () { $(inst.dpDiv).css({ top: (offset.top + height + 3) + 'px', left: (offset.left - 11) + 'px' }) }, 1);
    }, minDate: "D", maxDate: "+2M"
  });
  $("#depart_date, #depart_date_r, #back_date").datepicker('setDate', 'today');

  // Options
  $(document).click(function (e) {
    if (!$(e.target).is("input+a")) {
      var container = $("form ul[class*='list']");
      container.slideUp(0);
    };
  });
  $(".ui-datepicker-trigger").click(function () {
    $("form ul[class*='list']").slideUp(200);
  })
  $("input+a").click(function () {
    $("form ul[class*='list']").not($(this).parent().next("ul")).slideUp('fast');
    $(this).parent().next("ul").slideToggle(200);
  });
  $("form ul[class*='list'] a").hover(function () {
    $(this).css({ color: "#272343", "font-weight": "bold" });
  }, function () {
    $(this).css({ color: "" });
  });
  $("form ul[class*='list'] a").click(function () {
    var text = $(this).text();
    $("div").has(this).find("input").val(text);
    $(this).closest("ul").slideUp(200);
  });

  // 정보 입력 유효성 검사
  $(".oneway_box button.tk_reserve").click(function () {
    if ($("#depart_search").val() == "") {
      alert("출발지를 입력해주세요.");
      $("#depart_search").focus();
      return false;
    } if ($("#arrive_search").val() == "") {
      alert("도착지를 입력해주세요.");
      $("#arrive_search").focus();
      return false;
    } if ($("form").has(this).find("#adult").val() == "0명" && $("form").has(this).find("#student").val() == "0명" && $("form").has(this).find("#kid").val() == "0명") {
      alert("승차 인원을 선택해주세요.");
      $("form").has(this).find("#adult").focus();
      return false;
    } else { location.href = "sub01_ticket_reservation_step2.html"; }
  });
  $(".return_box button.tk_reserve").click(function () {
    if ($("#depart_input").val() == "") {
      alert("출발지를 입력해주세요.");
      $("#depart_input").focus();
      return false;
    } if ($("#arrive_input").val() == "") {
      alert("도착지를 입력해주세요.");
      $("#arrive_input").focus();
      return false;
    } if ($("form").has(this).find("#adult").val() == "0명" && $("form").has(this).find("#student").val() == "0명" && $("form").has(this).find("#kid").val() == "0명") {
      alert("승차 인원을 선택해주세요.");
      $("form").has(this).find("#adult").focus();
      return false;
    } else { location.href = "sub01_ticket_reservation_step2.html"; }
  });


});