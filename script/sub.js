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

  // LNB
  $(".lnb .menu_on > a, .menu_2depth > a").click(function () {
    $(this).next("ul").slideDown(300)
  });
  $(".lnb .menu_on, .menu_2depth").mouseleave(function () {
    $(this).find("ul").slideUp(300);
  });

  // Quickmenu
  var footerHei = $('footer').height();
  var quick = $('.quickmenu');
  $(window).scroll(function () {
    var sT = $(window).scrollTop();
    var val = $(document).height() - $(window).height() - footerHei;
    if (sT >= val) { quick.addClass('on') }
    else { quick.removeClass('on') };
  });

  // footer
  $(".family_site h3").click(function () {
    $(".family_site ul").slideToggle("fast");
  });
  $(".family_site ul li").hover(function () {
    $(this).stop().animate({ "padding-left": "5px" }, 'fast');
  }, function () {
    $(this).stop().animate({ "padding-left": "0px" }, 'fast');
  });
  $(".family_site").mouseleave(function () {
    $(".family_site ul").slideUp(500);
  });


  // sub01
  $(".tk_inform_box>ul>li>h4>a").first().parent().addClass("select_on");
  $(".tk_inform_box>ul>li>h4>a").first().parents("li").find("form").fadeIn(0);
  $(".tk_inform_box>ul>li>h4>a").click(function () {
    $(".tk_inform_box>ul>li>h4>a").parent().removeClass("select_on");
    $(this).parent().addClass("select_on");
    $(".tk_inform_box>ul>li>h4>a").parents("li").find("form").fadeOut(0);
    $(this).parents("li").find("form").fadeIn(0);
  });
});