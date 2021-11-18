$(document).ready(function () {
  //// 이용약관 동의
  $("#all_agree").change(function () {
    if ($("#all_agree").prop('checked')) { $(".all").prop("checked", true) }
    else { $(".all").prop("checked", false) };
  });

  $(".all").change(function () {
    if (!$(this).prop("checked")) {
      $("#all_agree").prop("checked", false);
    } else if ($(".all:checked").length == $(".all").length) { $("#all_agree").prop("checked", true); };
  });

  //// 회원정보 입력
  $("#membership_id").focus();
  // 유효성 검사
  //아이디


  // 이메일
  $(".domain_option_select span:eq(0)").text($(".email_domain_list a").eq(0).text()).css({ color: "#8a8b8c" });
  $(".domain_option_select").click(function () {
    $(this).next("ul").fadeToggle(200);
  });
  $(".email_domain_list a").hover(function () {
    $(this).css({ color: "#272343", "font-weight": "bold" });
  }, function () {
    $(this).css({ color: "" });
  });
  $(".email_domain_list a").click(function () {
    $(".domain_option_select span:eq(0)").text($(this).text());
    if ($(this).text() == "직접 입력") {
      $("#membership_emaildomain").val("").focus();
    } else { $("#membership_emaildomain").val($(this).text()); };
    $(".email_domain_list").fadeOut(200);
  });
  $(document).click(function (e) {
    if (!$(e.target).is(".domain_option_select")) {
      var container = $(".email_domain_list");
      container.fadeOut(100);
    };
  });

});
function validate() {
  var uid = $("#membership_id");
  var upw = $("#membership_pw");
  var upw_c = $("#membership_pw_confirm");
  var uname = $("#membership_name");
  var uname = $("#membership_name"); // 생년울일
  var uname = $("#membership_phone");
  var uname = $("#membership_emailid");
  var uname = $("#membership_emaildomain");

  if (uid.val() == "") {
    uid.siblings(".error").text("사용하실 아이디를 입력하세요.");
    uid.focus();
    return false;
  } else { uid.siblings(".error").text(""); };
  if (upw.val() == "") {
    upw.siblings(".error").text("사용하실 비밀번호를 입력하세요.");
    upw.focus();
    return false;
  } else { upw.siblings(".error").text(""); };
  if (upw_c.val() == "" || upw_c.val() != upw.val()) {
    upw_c.siblings(".error").text("비밀번호가 일치하지 않습니다.");
    upw_c.focus();
    return false;
  } else { uid.siblings(".error").text(""); };
  if (upw_c.val() == "") {
    upw_c.siblings(".error").text("비밀번호가 일치하지 않습니다.");
    upw_c.focus();
    return false;
  } else { uid.siblings(".error").text(""); };
};