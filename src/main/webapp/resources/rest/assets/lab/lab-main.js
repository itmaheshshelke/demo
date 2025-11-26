/**
 * Created By: Vivek Patil
 */

/* Validation for contact No */
function contactNo() {
	var letters = /^[0-9]+$/;
	var number = $('#contact').val()
	if (number == '') {
		$("#contactNoerr").show();
		$("#contactNoerr").text("Please enter contact number.");
		cn_flag = 1
		setTimeout(function() {
			$('#contactNoerr').fadeOut('fast');
		}, 5000); // <-- time in milliseconds

		$("#contact").focus();
	} else if (letters.test(number) == false
			|| ($('#contact').val().length < 10)) {
		$("#contactNoerr").show();
		$("#contactNoerr").text("Invalid contact number.");

		cn_flag = 1
		$("#contact").focus();

		setTimeout(function() {
			$('#contactNoerr').fadeOut('fast');
		}, 5000); // <-- time in milliseconds
		return false;
	}
}

/* validation for email Id */

var emailId = $("#emailId").val();
var reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (reg1.test($("#emailId").val()) == false) {
	$("#emailIderr").show();
	$("#emailIderr").text("Enter Valid Email.");
	$('html, body').animate({
		scrollTop : 0
	}, 'fast');
	setTimeout(function() {
		$('#emailIderr').fadeOut('fast');
	}, 5000);
	$("#emailId").focus();
	return false;

}

/* Validation for AdharNo */
function validAdharNo() {
	var letters = /^[0-9]+$/;
	var aadharNo = $('#adhar').val()
	var number = aadharNo.replace(/ +/g, "");
	$("#aadharNo").val("");
	$("#aadharNo").val(number);
	if (number != "") {
		if (number == "" && number == "") {
			$("#adharNoerr").show();
			$("#adharNoerr").text("Please enter adhar number.");
			cn_flag = 1
			$('html, body').animate({
				scrollTop : 0
			}, 'fast');
			setTimeout(function() {
				$('#adharNoerr').fadeOut('fast');
			}, 5000); // <-- time in milliseconds

			$("#adhar").focus();
			return false;
		} else if (letters.test(number) == false
				|| ($('#aadharNo').val().length < 12)) {
			$("#adharNoerr").show();
			$("#adharNoerr").text("Invalid adhar number.");
			cn_flag = 1
			$("#adhar").focus();
			setTimeout(function() {
				$('#adharNoerr').fadeOut('fast');
			}, 5000); // <-- time in milliseconds
			return false;
		}
		return true;
	}
}

/* validation for select State */

if ($("#stateId").val() == 0 || $("#stateId").val() == "") {
	$("#stateIderr").show();
	$("#stateIderr").text("Please select state.");
	setTimeout(function() {
		$('#stateIderr').fadeOut('fast');
	}, 5000);
	$("#stateId").focus();
	return false;
}

/* Validation for select District */

if ($("#districtId").val() == 0 || $("#districtId").val() == "") {
	$("#districtIderr").show();
	$("#districtIderr").text("Please select District.");
	setTimeout(function() {
		$('#districtIderr').fadeOut('fast');
	}, 5000);
	$("#districtId").focus();
	return false;
}

/* Validation for select City */

if ($("#cityId").val() == 0 || $("#cityId").val() == "") {
	$("#cityIderr").show();
	$("#cityIderr").text("Please select City.");
	setTimeout(function() {
		$('#cityIderr').fadeOut('fast');
	}, 5000);
	$("#cityId").focus();
	return false;
}

/* Validation for isNumber with decimal point */

function isNumber(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		evt.preventDefault();
	}
	return true;
}

/* validation for isNumber without decimal point */

function isNumber(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}

/* validation for special char allow but (@!&#/) not allowed */
var isDoctor = $("#isDoctor").val();
var letters = /^[A-Za-z0-9_-].*?$/;
if (letters.test($("#disease").val()) == false || $("#disease").val() == "") {
	if (isDoctor == 'Y') {
		$("#diseaseerr").show();
		$("#diseaseerr").text("Enter valid disease name.");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#diseaseerr').fadeOut('fast');
		}, 5000);
		$("#disease").focus();
		return false;
	}
}

/* Validation for pincode number */

var pin = /^\d{6}$/;
if ($("#pinCode").val() == 0 || $("#pinCode").val() == "") {
	$("#pinCodeerr").show();
	$("#pinCodeerr").text("Please enter pincode.");
	$('html, body').animate({
		scrollTop : 0
	}, 'fast');
	setTimeout(function() {
		$('#pinCodeerr').fadeOut('fast');
	}, 5000);
	$("#pinCode").focus();
	return false;
}
if (!pin.test($("#pinCode").val())) {
	var len = $("#pinCode").val().length;
	var rate = parseInt(len);
	if (rate != 0) {
		$("#pinCodeerr").show();
		$("#pinCodeerr").text("Pin code should be 6 digits.");
		$('html, body').animate();
		setTimeout(function() {
			$('#pinCodeerr').fadeOut('fast');
		}, 5000); // <-- time in milliseconds

		$("#pinCode").focus();
		return false;
	}
}

/* Validation for special character */
function blockSpecialChars() {
	var str = $('#save-book-search').val();
	if (/^[a-zA-Z0-9- ]*$/.test(str) == false) {
		$("#save-book-searcherr").show();
		$("#save-book-searcherr").text(
				"Enter only character and numbers only .");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#save-book-searcherr').fadeOut('fast');
		}, 5000);
		$("#save-book-search").focus();
		return false;
	}

}

/* validation for Branch or Any other name first name */

var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
var letters = /^[^-\s][a-zA-Z0-9_\s-]/;
if (letters.test($("#name").val()) == false) {
	var len = $("#name").val().length;

	if (len < 2 && len != "") {
		$("#clinicNameerr").show();
		$("#clinicNameerr").text("Please Enter Valid Name.");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#clinicNameerr').fadeOut('fast');
		}, 5000);
		$("#name").focus();
	} else {
		$("#clinicNameerr").show();
		$("#clinicNameerr").text("Enter Clinic Name.");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#clinicNameerr').fadeOut('fast');
		}, 5000);
		$("#name").focus();
	}
	return false;
}

/* validation for add country code +91 number */

var re = /^(\+91-|\+91|0)?\d{10}$/;
var result;

for (var i = 0; i < testValues.length; i++) {
	result = testValues[i] + " ";
	if (testValues[i].match(re)) {
		result += "matched";
	} else {
		result += "did not match";
	}
	$(document.body).append(result + "<br>");
}
