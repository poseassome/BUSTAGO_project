$(document).ready(function () {
  // GNB
  $(".gnb>ul").css("background", "none");
  $(".submenu").slideUp(0);
  $(".gnb").hover(function () {
    $(".gnb>ul").css("background", "");
    $(".submenu").stop().slideDown(300);
  }, function () {
    $(".submenu").stop().slideUp(300,
      function () { $(".gnb>ul").css("background", "none") });
  });

  // Main character
  setInterval(function () {
    $(".charicon").animate({ top: "-390px" }, 500, function () {
      $(".charicon").animate({ top: "-350px" }, 400, function () {
        $(".charicon").animate({ top: "-390px" }, 500, function () {
          $(".charicon").animate({ top: "-350px" }, 400);
        });
      });
    });
  }, 3500);

  // Cont1
  var menu = $(".main_cont1>ul>li>a");
  $(menu).click(function () {
    if ($(this).hasClass("tk_off")) {
      $(this).removeClass("tk_off");
      $("a.tk_on").addClass("tk_off");
      $("a.tk_on").removeClass("tk_on");
      $(this).addClass("tk_on");

      var form = $(this).next();
      if ($(form).hasClass("form_off")) {
        $(form).removeClass("form_off");
        $(".form_on").addClass("form_off");
        $(".form_on").removeClass("form_on");
        $(form).addClass("form_on");
      };
    };
  });

  $("input+a").click(function () {
    $(".form_on>ul>li ul").not($(this).parent().next()).slideUp('fast');
    $(this).parent().next().slideToggle(200);
  });
  $("form>ul>li ul a").hover(function () {
    $(this).css({ color: "#272343", "font-weight": "bold" });
  }, function () {
    $(this).css({ color: "" });
  });
  $("form>ul>li ul a").click(function () {
    var text = $(this).text();
    $("div").has(this).find("input").val(text);
    $(this).closest("ul").slideUp(200);
  });
  $(document).click(function (e) {
    if (!$(e.target).is("input+a")) {
      var container = $(".form_on>ul>li ul");
      container.slideUp(0);
    };
  });

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
      var offset = $(input).offset(); var height = $(input).height(); window.setTimeout(function () { $(inst.dpDiv).css({ top: (offset.top + height + 4) + 'px', left: (offset.left - 6) + 'px' }) }, 1);
    }, minDate: "D", maxDate: "+2M"
  });
  $("#depart_date,#depart_date_r,#back_date").datepicker('setDate', 'today');


  // Cont2
  var width = $(".event_wrap ul li").width();
  var height = $(".event_wrap ul li").height();
  var length = $(".event_wrap ul li").length;
  $(".event_wrap ul").css("width", width * length);
  setInterval(function () {
    $(".event_wrap ul").animate({ left: "-590px" }, 1000, function () {
      $(".event_wrap ul li:first").appendTo(".event_wrap ul");
      $(".event_wrap ul").css("left", 0);
    });
  }, 3000);
  $(".event_wrap>a").click(function () {
    if ($(this).hasClass("event_next")) {
      $(".event_wrap ul").stop().animate({ left: "-590px" }, function () {
        $(".event_wrap ul li:first").appendTo(".event_wrap ul");
        $(".event_wrap ul").css("left", 0);
      });
    } else {
      $(".event_wrap ul").stop().animate({ left: 0 }, function () {
        $(".event_wrap ul li:last").prependTo(".event_wrap ul");
        $(".event_wrap ul").css("left", "-590px");
      });
    }
  });

  // Cont3
  $(".cancel").hover(function () {
    $(".cancel img").stop().animate({ bottom: '0' }, 300);
  }, function () {
    $(".cancel img").stop().animate({ bottom: '-274px' }, 300);
  });
  $(".faq").hover(function () {
    $(".faq img").stop().animate({ bottom: '0' }, 300);
  }, function () {
    $(".faq img").stop().animate({ bottom: '-274px' }, 300);
  });
  $(".main_cont3 a").hover(function () {
    $(this).stop().animate({ top: "-15px" }, 400);
  }, function () {
    $(this).stop().animate({ top: 0 }, 400);
  });

  // footer
  $(".family_site h3").click(function () {
    $(".family_site ul").slideToggle("fast")
  });
  $(".family_site ul li").hover(function () {
    $(this).stop().animate({ "padding-left": "5px" }, 'fast');
  }, function () {
    $(this).stop().animate({ "padding-left": "0px" }, 'fast');
  });
  $(".family_site").mouseleave(function () {
    $(".family_site ul").slideUp(500);
  });

});