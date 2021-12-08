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

  // 회원가입_이메일
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
    if (!$(e.target).is(".domain_option_select, .domain_option_select span")) {
      var container = $(".email_domain_list");
      container.fadeOut(100);
    };
  });

  // 로그인 화면
  $("#member_id").focus();
  $(".login_page input").focus(function () {
    $(".login_page form").removeClass("on");
    $(this).parents("form").addClass("on");
  });
  $(".login_page label").click(function () {
    $(".login_page form").removeClass("on");
    $(this).parents("form").addClass("on");
  });

  // 비회원 로그인 처음화면
  $("#card_no").first().prop("checked", true);
  $(".user_card_no").show();
  $("#birth, #cellphone").prop("disabled", true);
  $(".nonmember_login_part input[type=radio]").change(function () {
    $("#birth, #cellphone").prop("disabled", false);
    $(".nonmember_login_part input[type=radio]").each(function () {
      if ($(this).prop("checked")) {
        $(this).parent().next("div").show();
      } else {
        $(this).parent().next("div").hide();
      };
    });
  });
  $(document).click(function (e) {
    if (!$(e.target).is(".user_check_button")) {
      $(".error_mg1").text("");
    };
    if (!$(e.target).is(".member_login_button")) {
      $(".error_mg").text("");
    };
  });
  $(".user_card_no input").keyup(function () {
    var charLimit = $(this).attr("maxlength");
    if (this.value.length >= charLimit) {
      $(this).next('input').focus();
      return false;
    };
  });

  // 마이페이지_이메일
  $(".dns_option_select span:eq(0)").text($(".email_dns_list a").eq(0).text()).css({ color: "#8a8b8c" });
  $(".dns_option_select").click(function () {
    $(this).next("ul").fadeToggle(200);
  });
  $(".email_dns_list a").hover(function () {
    $(this).css({ color: "#272343", "font-weight": "bold" });
  }, function () {
    $(this).css({ color: "" });
  });
  $(".email_dns_list a").click(function () {
    $(".dns_option_select span:eq(0)").text($(this).text());
    if ($(this).text() == "직접 입력") {
      $("#mp_user_emaildns").val("").focus();
    } else { $("#mp_user_emaildns").val($(this).text()); };
    $(".email_dns_list").fadeOut(200);
  });
  $(document).click(function (e) {
    if (!$(e.target).is(".dns_option_select, .dns_option_select span")) {
      var container = $(".email_dns_list");
      container.fadeOut(100);
    };
  });

  // 비밀번호 찾기 정보입력
  $("#user_new_pw").blur(function () {
    if ($("#user_new_pw").val() == "") {
      $(".alert_pw").text("");
      $(".alert").text("");
    };
  });

  // 회원탈퇴
  $("#reason1").prop("checked", true);
  $("#opinion").focus();

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
    uemailid.siblings(".error").text("이메일 아이디를 입력하세요.");
    uemailid.focus();
    return false;
  } else if (uemaildmn.val() == "") {
    uemailid.siblings(".error").text("이메일 주소를 입력하세요.");
    $(".email_domain_list").fadeIn('fast');
    uemaildmn.focus();
    return false;
  };
  var mail = uemailid.val() + "@" + uemaildmn.val();
  if (!regemail.test(mail)) {
    uemailid.siblings(".error").text("이메일을 확인해주세요.");
    uemailid.focus();
    return false;
  };
};

//// 회원로그인
function loginValidate() {
  var uid = $("#member_id");
  var upw = $("#member_pw");
  if (!uid.val()) {
    $(".member_login_part .error_mg").text("아이디를 입력하세요.");
    uid.focus();
    return false;
  };
  if (!upw.val()) {
    $(".member_login_part .error_mg").text("비밀번호를 입력하세요.");
    upw.focus();
    return false;
  };
};

//// 비회원 조회
function nonmemberCheck() {
  if ($("#card_no").prop("checked")) {
    var card = $(".user_card_no input");
    if (card.val("").length > 0) {
      $(".nonmember_login_part .error_mg1").css({ top: "50px" }).text("카드번호를 입력하세요.");
      card.first().focus();
      return false;
    };
  } else {
    var birth = $("#birth");
    var mobile = $("#cellphone");
    if (!birth.val()) {
      $(".nonmember_login_part .error_mg1").css({ top: "95px" }).text("생년월일을 입력하세요.");
      birth.focus();
      return false;
    };
    if (!mobile.val()) {
      $(".nonmember_login_part .error_mg1").text("휴대폰번호를 입력하세요.");
      mobile.focus();
      return false;
    };
  };
};

//// 아이디 찾기
function id_validate() {
  var regname = /^[가-힣]+$/;
  if ($("#user_name").val() == "") {
    $("#user_name").siblings(".alert").text("");
  } else if (!regname.test($("#user_name").val())) {
    $("#user_name").siblings(".alert").text("올바르지 않은 정보입니다.");
  } else { $("#user_name").siblings(".alert").text(""); };
};
function birth_validate() {
  var regbirth = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
  if ($("#user_birth").val() == "") {
    $("#user_birth").siblings(".alert").text("");
  } else if (!regbirth.test($("#user_birth").val())) {
    $("#user_birth").siblings(".alert").text("올바르지 않은 정보입니다.");
  } else { $("#user_birth").siblings(".alert").text(""); };
};
function phone_validate() {
  var regphone = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  if ($("#user_tel").val() == "") {
    $("#user_tel").siblings(".alert").text("");
  } else if (!regphone.test($("#user_tel").val())) {
    $("#user_tel").siblings(".alert").text("올바르지 않은 정보입니다.");
  } else { $("#user_tel").siblings(".alert").text(""); };
};
function inputIDinfo() {
  if ($("#user_name").val() == "" || $("#user_birth").val() == "" || $("#user_tel").val() == "") {
    alert("정보를 입력해주세요.");
    return false;
  } else if ($(".alert").text() != "") {
    return false;
  };
};

//// 비밀번호 찾기
function uid_validate() {
  var regid = /^[a-zA-z0-9]{6,12}$/;
  if ($("#user_id").val() == "") {
    $("#user_id").siblings(".alert").text("");
  } else if (!regid.test($("#user_id").val())) {
    $("#user_id").siblings(".alert").text("올바르지 않은 정보입니다.");
  } else { $("#user_id").siblings(".alert").text(""); };
};
function inputPWinfo() {
  if ($("#user_name").val() == "" || $("#user_id").val() == "" || $("#user_tel").val() == "") {
    alert("정보를 입력해주세요.");
    return false;
  } else if ($(".alert").text() != "" || $(".alert_pw").text() != "") {
    return false;
  };
};


//// 비밀번호 재설정
function pw_validate() {
  var regpw = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  if (!regpw.test($("#user_new_pw").val())) {
    $("#user_new_pw").siblings(".alert_pw").text("사용할 수 없는 비밀번호입니다.");
  } else { $("#user_new_pw").siblings(".alert_pw").text(""); };
};
function pwcheck_validate() {
  if ($("#user_new_pw_check").val() != $("#user_new_pw").val()) {
    $("#user_new_pw_check").siblings(".alert").text("비밀번호가 일치하지 않습니다.");
  } else { $("#user_new_pw_check").siblings(".alert").text(""); };;
};
function resetPW() {
  pw_validate();
  pwcheck_validate();
  if ($(".alert").text() != "" || $(".alert_pw").text() != "") {
    return false;
  };
};

//// 마이페이지 회워정보 수정
function mypage_validate() {
  var uemailid = $("#mp_user_email");
  var uemaildmn = $("#mp_user_emaildns");
  var uphone = $("#mp_user_tel");
  var regphone = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
  var regemail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (uphone.val() == "" || !regphone.test(uphone.val())) {
    uphone.siblings(".error_mp").text("올바른 휴대폰 번호를 입력해주세요.");
    uphone.focus();
    return false;
  } else { uphone.siblings(".error_mp").text(""); };
  if (uemailid.val() == "") {
    uemailid.siblings(".error_mpe").text("이메일 아이디를 입력하세요.");
    uemailid.focus();
    return false;
  } else if (uemaildmn.val() == "") {
    uemailid.siblings(".error_mpe").text("이메일 주소를 입력하세요.");
    $(".email_domain_list").fadeIn('fast');
    uemaildmn.focus();
    return false;
  };
  var mail = uemailid.val() + "@" + uemaildmn.val();
  if (!regemail.test(mail)) {
    uemailid.siblings(".error_mpe").text("이메일을 확인해주세요.");
    uemailid.focus();
    return false;
  };
  if (confirm("회원 정보를 수정하시겠습니까?") == true) {
    document.form.submit();
  } else {
    return false;
  };
};

//// 회원탈퇴
function withdraw() {
  if (confirm("버스타고 회원 탈퇴를 진행하시겠습니까?") == true) {
    document.form.submit();
  } else {
    return false;
  };
};