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
});