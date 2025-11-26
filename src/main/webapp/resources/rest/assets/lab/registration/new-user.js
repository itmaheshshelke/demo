/**
 * created by Namrata Malviya
 * 
 */
function validate_register(){
	
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

				

}

function isReferanceExist(contactNo1) {
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');

	var contactNo1 = contactNo1;
	var reflen = $("#referenceBy").val().length;
	temp = true;
	var number =  /^[0-9]+$/;
	if (number.test($("#referenceBy").val()) == false) {
			$("#referenceByErr").show();
			$("#referenceByErr").text("Enter Valid Refernce Number.");
			$("#referanceBy").focus();
			setTimeout(function() {
				$('#referanceByErr').fadeOut('fast');
			}, 1000);
			
			return false;
		} else 	if(len >=10){
	
	$.ajax({
				type : "GET",
				contentType : "application/json",
				delimiter : ",",
				url : CONTEXT_PATH + "/global_register/is-refernce-contact-exist?contactNo1=" + contactNo1,
				success : function(response) {
					
					if (response == true) {
						temp = true;
						$("#referenceByErr").hide();
					}
					else{
						$("#referenceByErr").show();
						document.getElementById("referenceByErr").innerHTML = "This Number Is Not Registered With Us.";
						temp = false;
					  }
					
				},
				error : function(e) {
					/*alert('Error: ' + e);*/
				}
			});
		}
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
