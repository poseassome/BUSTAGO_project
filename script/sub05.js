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

const autoHyphen_p = (target) => {
  target.value = target.value
    .replace(/[^0-9]/, '')
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
};
const autoHyphen_b = (target) => {
  target.value = target.value
    .replace(/[^0-9]/, '')
    .replace(/^(\d{4})(\d{2})(\d{2})$/, `$1-$2-$3`);
};

//// 회원가입 정보
function validate() {
  var uid = $("#membership_id");
  var upw = $("#membership_pw");
  var upw_c = $("#membership_pw_confirm");
  var uname = $("#membership_name");
  var ubirth = $("#membership_birth");
  var uphone = $("#membership_phone");
  var uemailid = $("#membership_emailid");
  var uemaildmn = $("#membership_emaildomain");

  var regid = /^[a-zA-z0-9]{6,12}$/;
  var regpw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  var regname = /^[가-힣]+$/;
  var regphone = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  var regemail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  var regbirth = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

  if (uid.val() == "") {
    uid.siblings(".error").text("사용하실 아이디를 입력하세요.");
    uid.focus();
    return false;
  } else if (!regid.test(uid.val())) {
    uid.siblings(".error").text("아이디는 6~12자의 영문, 숫자 조합만 가능합니다.");
    uid.focus();
    return false;
  } else { uid.siblings(".error").text(""); };
  if (upw.val() == "") {
    upw.siblings(".error").text("사용하실 비밀번호를 입력하세요.");
    upw.focus();
    return false;
  } else if (!regpw.test(upw.val())) {
    upw.siblings(".error").text("비밀번호는 영문, 숫자, 특수문자가 모두 포함된 6~20자여야 합니다.");
    upw.focus();
    return false;
  } else { upw.siblings(".error").text(""); };
  if (upw_c.val() == "" || upw_c.val() != upw.val()) {
    upw_c.siblings(".error").text("비밀번호가 일치하지 않습니다.");
    upw_c.focus();
    return false;
  } else { upw_c.siblings(".error").text(""); };
  if (uname.val() == "") {
    uname.siblings(".error").text("이름을 입력하세요.");
    uname.focus();
    return false;
  } else if (!regname.test(uname.val())) {
    uname.siblings(".error").text("이름을 확인해주세요.");
    uname.focus();
    return false;
  } else { uname.siblings(".error").text(""); };
  if (ubirth.val() == "" || !regbirth.test(ubirth.val())) {
    ubirth.siblings(".error").text("생년월일을 입력하세요.");
    ubirth.focus();
    return false;
  } else { ubirth.siblings(".error").text(""); };
  if ($("input[name='birth_cal_type']:checked").length < 1) {
    ubirth.siblings(".error").text("양력/음력을 선택하세요.");
    return false
  } else { ubirth.siblings(".error").text(""); };
  if (uphone.val() == "" || !regphone.test(uphone.val())) {
    uphone.siblings(".error").text("휴대폰 번호를 입력하세요.");
    uphone.focus();
    return false;
  } else { uphone.siblings(".error").text(""); };
  if (uemailid.val() == "") {
    uemailid.siblings(".error").text("이메일 주소를 입력하세요.");
    uemailid.focus();
    return false;
  } else if (uemaildmn.val() == "") {
    uemailid.siblings(".error").text("이메일 주소를 입력하세요.");
    $(".email_domain_list").fadeIn('fast');
    uemaildmn.focus();
    return false;
  };
  var mail = uemailid + "@" + uemaildmn;
  if (!regemail.test(mail)) {
    uemailid.siblings(".error").text("이메일을 확인해주세요.");
    uemailid.focus();
    return false;
  };
};