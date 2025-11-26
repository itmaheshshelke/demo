var flag = true;
var count = true;

function validate_step1(){
	
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	var labName =$('#labName').val();
	var trimLabName=$.trim(labName);
	var labNameLen = trimLabName.length;
		if (labNameLen < 1 && labNameLen == "" ) {
			 {
			$("#labNameErr").show();
			$("#labNameErr").text("Please Enter Pathology Name.");
			$('html, body').animate({
				scrollTop : 0
			}, 'fast');
			setTimeout(function() {
				$('#labNameErr').fadeOut('fast');
			}, 5000);
			$("#labName").focus();
		}
		return false;

		}
		
		var firstName =$('#fName').val();
		var trimFirstName=$.trim(firstName);
		var firstNameLen = trimFirstName.length;
			if (firstNameLen < 1 && firstNameLen == "" ) {
				 {
				$("#labNameErr").hide();
				$("#firstNameErr").show();
				$("#firstNameErr").text("Please Enter First Name.");
				$('html, body').animate({
					scrollTop : 0
				}, 'fast');
				setTimeout(function() {
					$('#firstNameErr').fadeOut('fast');
				}, 5000);
				$("#fName").focus();
			}
			return false;

			}
			
			var lastName =$('#lName').val();
			var lNameLen=lastName.length;
				if (lNameLen > 0) {
					var trimLastName=$.trim(lastName);
					var lstNameLen = trimLastName.length;
					if(lstNameLen <1 && lstNameLen==""){
						$("#labNameErr").hide();
						$("#firstNameErr").hide();
					$("#lastNameErr").show();
					$("#lastNameErr").text("Please Enter Last Name.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#lastNameErr').fadeOut('fast');
					}, 5000);
					$("#lName").focus();
					return false;
					}
				

				}
				
				var contactNo = $("#contactNo1").val();
		var contactLen=contactNo.length ;
				if(contactNo.length <1){
					$("#labNameErr").hide();
					$("#firstNameErr").hide();
					$("#lastNameErr").hide();
					$("#contactNumErr").show();
					$("#contactNumErr").text("Please Enter Contact Number.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#contactNumErr').fadeOut('fast');
					}, 5000);
					$("#contactNo1").focus();
					return false;
				}else if (contactNo.length !=10) {
					$("#labNameErr").hide();
					$("#firstNameErr").hide();
					$("#lastNameErr").hide();
					$("#contactNumErr").show();
					$("#contactNumErr").text("Please Enter Valid Contact Number.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#contactNumErr').fadeOut('fast');
					}, 5000);
					$("#contactNo1").focus();
					return false;
				}
					

				var emailId = $("#emailId").val();
				
					var reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
					if (reg1.test($("#emailId").val()) == false) {
						$("#labNameErr").hide();
						$("#firstNameErr").hide();
						$("#lastNameErr").hide();
						$("#contactNumErr").hide();
						$("#emailIdErr").show();
						$("#emailIdErr").text("Enter Valid Email-Id.");
						$('html, body').animate({
							scrollTop : 0
						}, 'fast');
						setTimeout(function() {
							$('#emailIdErr').fadeOut('fast');
						}, 5000); 
						$("#emailId").focus();

						return false;
					}

				

					 /* validation for select State */
					
					if ($("#stateId").val() == 0 || $("#stateId").val() == "") {
						$("#stateIderr").show();
						$("#stateIderr").text("Please Select State.");
						setTimeout(function() {
							$('#stateIderr').fadeOut('fast');
						}, 5000);
						$("#stateId").focus();
						return false;
					}

					/* Validation for select District*/
					
					if ($("#districtId").val() == 0 || $("#districtId").val() == "") {
						$("#districtIderr").show();
						$("#districtIderr").text("Please Select District.");
						setTimeout(function() {
							$('#districtIderr').fadeOut('fast');
						}, 5000);
						$("#districtId").focus();
						return false;
					}

					/*Validation for select City*/
					
					if ($("#cityId").val() == 0|| $("#cityId").val() == "") {
						$("#cityIderr").show();
						$("#cityIderr").text("Please Select City.");
						setTimeout(function() {
						$('#cityIderr').fadeOut('fast');
						}, 5000);
						$("#cityId").focus();
						return false;
					}
					
					/*validation for pin-code*/
					
					var pincode =$('#pinCode').val();
					var trimpincode=$.trim(pincode);
					var pincodeLen = trimpincode.length;
						if (pincodeLen < 1 && pincodeLen == "" ) {
							 {
							$("#pincodeErr").show();
							$("#pincodeErr").text("Please Enter Pin code.");
							$('html, body').animate({
								scrollTop : 0
							}, 'fast');
							setTimeout(function() {
								$('#pincodeErr').fadeOut('fast');
							}, 5000);
							$("#pinCode").focus();
						}
						return false;

						}
					
					var addressLine1 = $('#addressLine1').val();
					if ($("#addressLine1").val() == "" || $("#addressLine1").val().charAt(0) == ' ') {
						$("#addressLine1err").show();
						$("#addressLine1err").text("Enter Valid Address.");
						setTimeout(function() {
							$('#addressLine1err').fadeOut('fast');
						}, 5000); // <-- time in milliseconds
						$("#addressLine1").focus();
						return false;
					}
					
					
				if(flag==false){
						
						return false;
					}

				if(count==false){
					
					return false;
					
				}

					document.step1.action = CONTEXT_PATH+"/global-register/register-step-2";
					document.step1.method = "POST"
					document.step1.submit();
					
				}




function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


/* This Ajax call for District list  */

$(document).ready(function(){
	$("#stateId").change(function(){
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	var html="";
	html=html+"<option value='0'>Select City</option>";
	$("#cityId").html(html);
	var stateId = $("#stateId").val();
   	 html = "";
   	
   	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : CONTEXT_PATH+"/address/getAllDistrictByStateId/" + stateId,
		success : function(response) {
			html=html+"<option value='0'>Select District</option>";
			$(response).each(function(index,value){
				html= html+"<option value='"+value.districtId+"'>"+value.districtName+"</option>";
			});
			
			$("#districtId").html(html);
			}
   	});
	});
});




/* This Ajax call for City list  */

$(document).ready(function(){
		$("#districtId").change(function(){
		var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	   	var districtId = $("#districtId").val();
	   	var html = "";
	  	   	$.ajax({
			type : "GET",
			contentType : "application/json",
			delimiter : ",",
			url : CONTEXT_PATH+"/address/getAllCityByDistrictId/" + districtId,
				success : function(response) {
				html=html+"<option value='0'>Select City</option>";
				$(response).each(function(index,value){
					html= html+"<option value='"+value.cityId+"'>"+value.cityName+"</option>";
				});
				
				$("#cityId").html(html);
				}
	   	});
	   	
		});
		
	}); 