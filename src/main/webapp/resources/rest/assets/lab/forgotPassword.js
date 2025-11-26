/**
 * Created By: Vivek Patil
 */
var i;
function forgotPassword() {
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	var mono = $("#ContactNo").val();
	var labId = $("#labId").val();
	i=61;
	var number =/^[0-9]+$/;
	if (number.test($("#ContactNo").val()) == false) {
		$("#mobileNoerr").show();
		$("#mobileNoerr").text("Enter valid mobile number.");
		setTimeout(function() {
			$('#mobileNoerr').fadeOut('fast');
		}, 5000);
		$("#ContactNo").focus();
		return false;
	}if(labId == 0 || labId == "") {
		$("#laberr").show();
		$("#laberr").text("Please select lab.");
		setTimeout(function() {
			$('#laberr').fadeOut('fast');
		}, 5000);
		$("#labId").focus();
		return false;
	}
	$("#sentotp").hide();
	$("#otp").show();
	$("#verify").show();
	$("#countDown").show();
	$("#reSendOtp").hide();
	i = 60;
	onTimer();
	
	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : CONTEXT_PATH+"/login_rest/sendOtp/" + mono+"/"+labId,
		success : function(response) {
			alert(response.otp);
			
			$("#employeeId").val(response.employeeId);
			$("#contactNo").val(response.contactNo);
			$("#returnOtp").val(response.otp);
			
		},
		error : function(e) {
			/*/*alert('Error: ' + e);*/
			$("#sentotp").show();
			$("#otp").hide();
			$("#verify").hide();
		}
	});

}

var i = 60;
function onTimer() {
	 if (i <= 60) {
	//console.log("Hello")
  document.getElementById('countDown').innerHTML = i;
	i--;
  if (i < 0) {
	  console.log("Hello")
		$("#reSendOtp").show();
		$("#cancel_btn").css({'margin-top':'10px'});
		$("#countDown").hide();
  }
  else {
    setTimeout(onTimer, 1000);
  }
}}


function VerifyforgotPassword(){
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	var employeeId = $("#employeeId").val();
	var ContactNo = $("#ContactNo").val();
	var number =/^[0-9]+$/;
	if (number.test(ContactNo) == false ) {
		$("#mobileNoerr").show();
		$("#mobileNoerr").text("Enter valid mobile number.");
		setTimeout(function() {
			$('#mobileNoerr').fadeOut('fast');
		}, 5000);
		$("#contactNo").focus();
		return false;
	}
	
	var mobileno = $("#ContactNo").val();
	var number = /^[0-9]+$/;
	var len_mobileno=mobileno.length;
	if (len_mobileno <10) {
		/*$("#loaderId").hide();
		$("#mobileNoerr").show();
		 $("#mobileNoerr").text("Enter valid mobile number.");
		 setTimeout(function() {
				$('#mobileNoerr').fadeOut('fast');
			}, 3000);*/
		return false;
	}
	
	
	var number = /^[^-\s][0-9\s-]/;
	var OTP = $("#otp").val();
	var otp = $.trim(OTP);
	if (number.test(otp) == false || OTP == "") {
		$("#otperr").show();
		$("#otperr").text("Please enter valid OTP.");
		setTimeout(function() {
			$('#otperr').fadeOut('fast');
		}, 5000);
		$("#otp").focus();
		return false;
	}
	

	if ($("#otp").val() != $("#returnOtp").val() ) {
			$("#otperr").show();
			$("#otperr").text("Your OTP doesn't match");
			setTimeout(function() {
				$('#otperr').fadeOut('fast');
			}, 5000);
			$("#otp").focus();
			return false;
		}
	
	/*alert("Successfully.....");*/
	var url=CONTEXT_PATH+"/reset-password?employeeId="+employeeId;
	window.location=url;
	
	
	
}
function resetPassword(){
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	var employeeId = $("#employeeId").val();
	var newPassword = $("#newPassword").val();
	var len = $("#newPassword").val().length;
	
	var letters = /^[^-\s][a-zA-Z0-9_\s-]/;
	if (letters.test($("#newPassword").val()) == false) {
		$("#newPassworderr").show();
		$("#newPassworderr").text("Enter your new password.");
		setTimeout(function() {
			$('#newPassworderr').fadeOut('fast');
		}, 5000);
		$("#newPassword").focus();
		return false;
	}if (len <= 3) {
		$("#newPassworderr").show();
		$("#newPassworderr").text("Your password is too short..!!");
		setTimeout(function() {
			$('#newPassworderr').fadeOut('fast');
		}, 5000);
		$("#newPassword").focus();
		return false;
	}
	
	if (letters.test($("#ConfirmPassword").val()) == false) {
		$("#confirmPassworderr").show();
		$("#confirmPassworderr").text("Please confirm your password.");
		setTimeout(function() {
			$('#confirmPassworderr').fadeOut('fast');
		}, 5000);
		$("#confirmPassword").focus();
		return false;
	}
	

	if ($("#newPassword").val() != $("#ConfirmPassword").val() ) {
			$("#confirmPassworderr").show();
			$("#confirmPassworderr").text("Your password doesn't matched.");
			setTimeout(function() {
				$('#confirmPassworderr').fadeOut('fast');
			}, 5000);
			$("#confirmPassword").focus();
			return false;
		}
}


function ChangePassword() {
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
		
		var oldpasswrd = $("#oldPassword").val();
		var newpasswrd = $("#newPassword").val();
		var len = $("#newPassword").val().length;
		
		if ($("#oldPassword").val() == false) {
			$("#oldPassworderr").show();
			$("#oldPassworderr").text("Enter your old password.");
			setTimeout(function() {
				$('#oldPassworderr').fadeOut('fast');
			}, 5000);
			$("#oldPassword").focus();
			return false;
		}
		if ($("#newPassword").val() == false) {
			$("#newPassworderr").show();
			$("#newPassworderr").text("Enter your new password.");
			setTimeout(function() {
				$('#newPassworderr').fadeOut('fast');
			}, 5000);
			$("#newPassword").focus();
			return false;
		}if (len <= 3) {
			$("#newPassworderr").show();
			$("#newPassworderr").text("Password length must be 4");
			setTimeout(function() {
				$('#newPassworderr').fadeOut('fast');
			}, 5000);
			$("#newPassword").focus();
			return false;
		}
		if ($("#ConfirmPassword").val() == false) {
			$("#confirmPassworderr").show();
			$("#confirmPassworderr").text("Confirm your new password.");
			setTimeout(function() {
				$('#confirmPassworderr').fadeOut('fast');
			}, 5000);
			$("#confirmPassword").focus();
			return false;
		}
		if ($("#newPassword").val() != $("#ConfirmPassword").val() ) {
				$("#confirmPassworderr").show();
				$("#confirmPassworderr").text("Password doesn't match.");
				setTimeout(function() {
					$('#confirmPassworderr').fadeOut('fast');
				}, 5000);
				$("#confirmPassword").focus();
				return false;
			}
		var url=CONTEXT_PATH+"/save-change-password?oldpasswrd="+oldpasswrd+"&newpasswrd="+newpasswrd;
		window.location=url;
	}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    	evt.preventDefault();
    }
    return true;
}
