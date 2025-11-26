var userMobileNo;
var noRegistered='N';
var i;
function getAllLab(mobileNo) {
	 
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	i=61;
	var mobileno = mobileNo;
	userMobileNo=mobileNo;
	$('#lablist').hide();	
	$('#branchList').hide();
	$('#erorrInvalide').hide();
	
	//var number = /^[789]\d{9}$/;
	var number =  /^[0-9]\d{9}$/;
	if (number.test(mobileno) == false) {
		$('#lablist').hide();	
		$('#branchList').hide();
		return false;
	}
	
	var len_mobileno=mobileno.length;
	$("#loaderId").show();
	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : CONTEXT_PATH +"/login_rest/get-All-Lab-By-Employee/" + mobileno,
		success : function(data) {
			
			/*$("#loaderId").show();*/
			if(data.length>0){
			var empId=data[0].employeeId;
			noRegistered='N';
			 $("#employeeId").val(empId);
			 if(empId!=1){
			var html = '';
			var len = data.length;
			
			if(len>1){
				 html += '<option value="">Select Lab</option>';
			for ( var i = 0; i < data.length; i++) {
				html += '<option value="' + data[i].labId + '">'
						+ data[i].name + '</option>';
			}
			$('#lablist').show();
			}else{
				for ( var i = 0; i < data.length; i++) {
					html += '<option value="' + data[i].labId + '">'
							+ data[i].name + '</option>';
				}
				$('#lablist').hide();				
				
			}
			/*html += '</option>';*/
			$('#labId').html(html);
			getbranch(data[0].labId);
			$("#loaderId").hide();
			}else{
				$('#labId').val(null);
				$('#branchId').val(null);
				$("#loaderId").hide();
				
			}
			}else{
				$('#lablist').hide();	
				$('#branchList').hide();
				$("#errormsg").show();
				$("#errormsg").text("This Mobile number is not registered.");
				noRegistered='Y';
				$('html, body').animate({
					scrollTop : 0
				}, 'fast');
				setTimeout(function() {
					$('#errormsg').fadeOut('fast');
				}, 5000);
				$("#userName").focus();
				 
			 }
			 $("#loaderId").hide();
			
			 $.ajax('http://ip-api.com/json')
			  .then(
			      function success(response) {
			          console.log('User\'s Location Data is ', response);
			          console.log('User\'s Country', response.country);
			          $("#ipAddress").val(response.query);
			      },

			      function fail(data, status) {
			          console.log('Request failed.  Returned status of',
			                      status);
			      }
			  );
			 
		},
		error : function(e) {
			 $("#loaderId").hide();
			alert('Error: Something went wrong' + e);
		}
	});

}


function getbranch(s){
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	 var employeeId = $('#employeeId').val();
	 var labId=s;    /*[s.selectedIndex].value;*/
	 $("#loaderId").show();
	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : CONTEXT_PATH +"/login_rest/get-all-branch-by-employee/"+userMobileNo+"/"+labId,
		success : function(data) {
			if(data.length>0){
			var empId=data[0].employeeId;
			$("#employeeId").val(empId);
			var html = '';
			var len = data.length;
			if(len>1){
				 $("#loaderId").show();
				 html += '<option value="">Select Branch</option>';
				for ( var i = 0; i < len; i++) {
					html += '<option value="' + data[i].branchId + '">'
							+ data[i].branchName + '</option>';
				}
				html += '</option>';
			$('#branchList').show();
			$("#loaderId").hide();
			}else{
				for ( var i = 0; i < len; i++) {
					html += '<option value="' + data[i].branchId + '">'
							+ data[i].branchName + '</option>';
				}
				html += '</option>';
				$('#branchList').hide();
			}
			$("#loaderId").hide();
			$('#branchId').html(html);
			}else{
				$("#loaderId").hide();
				$('#branchList').hide();
			}
		},
		error : function(e) {
			 $("#loaderId").hide();
			alert('Error:Something went wrong ' + e);
		}
	});
	
}


function login() {
	var labId=$('#labId').val();
	var empId=$("#employeeId").val();
	var userName=$("#userName").val();
	var password=$("#password").val();
	
	//var number = /^[789]\d{9}$/;
	var number =  /^[0-9]+$/;
	if (number.test(userName) == false) {
		$("#errormsg").show();
		$("#errormsg").text("Please enter valid mobile no.");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#errormsg').fadeOut('fast');
		}, 5000);
		$("#userName").focus();
		return false;
	}
	
	if(userName==undefined || userName==""){
		$("#errormsg").show();
		$("#errormsg").text("Please enter User Id.");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#errormsg').fadeOut('fast');
		}, 5000);
		$("#userName").focus();
		return false;
		}
	if(password==undefined || password==""){
		$("#errormsg").show();
		$("#errormsg").text("Please enter password.");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#errormsg').fadeOut('fast');
		}, 5000);
		$("#password").focus();
		return false;
		}
	
if(empId!=1){
   if(labId==undefined || labId==""){
	   $("#errormsg").show();
			   if (noRegistered == 'Y') {
				$("#mobileNoerr").text("This Mobile number is not registered.");
			   } else {
				$("#errormsg").text("Please select Lab.");
			   }
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#errormsg').fadeOut('fast');
		}, 5000);
		$("#userName").focus();
		return false;
	}
	
	if(branchId==undefined || branchId==""){
		 $("#errormsg").show();
			$("#errormsg").text("Please select Branch.");
			$('html, body').animate({
				scrollTop : 0
			}, 'fast');
			setTimeout(function() {
				$('#errormsg').fadeOut('fast');
			}, 5000);
			$("#userName").focus();
			return false;
		}
}else{
	$('#labId').val(null);
	$('#branchId').val(null);
}
	 var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
		document.loginForm.action = CONTEXT_PATH+"/dashboard";
		document.loginForm.method = "POST"
		document.loginForm.submit();
}

var i;
function getAllLabForForgotPass(mobileNo) {
	$("#loaderId").show();
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	i = 61;
	var mobileno = mobileNo;
	var number = /^[0-9]+$/;
	var len_mobileno=mobileno.length;
	if (len_mobileno <10) {
		$("#loaderId").hide();
		/*$("#mobileNoerr").show();
		 $("#mobileNoerr").text("Enter valid mobile number.");
		 setTimeout(function() {
				$('#mobileNoerr').fadeOut('fast');
			}, 3000);*/
		return false;
	}
	
	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : CONTEXT_PATH + "/login_rest/get-All-Lab-By-Employee/" + mobileno,
		success : function(data) {
			 $("#loaderId").hide();
			 if(data.length!=0){
			 
			var empId=data[0].employeeId;
			
			 $("#employeeId").val(empId);
			 $("#sentotp").show();
			 $("#verify").hide();
			 $("#otp").hide();
			 $("#reSendOtp").hide();
			 $("#countDown").hide();
			
			 
			 
			 if(empId!=1){
			var html = '';
			var len = data.length;
			
			if(len>1){
				 html += '<option value="">Select Lab.</option>';
			for ( var i = 0; i < data.length; i++) {
				html += '<option value="' + data[i].labId + '">'
						+ data[i].name + '</option>';
			}
			$('#labList').show();
			}else{
				for ( var i = 0; i < data.length; i++) {
					html += '<option value="' + data[i].labId + '">'
							+ data[i].name + '</option>';
				}
				$('#labList').hide();				
				
			}
			/*html += '</option>';*/
			$('#labId').html(html);
			
			}
			 }else{
				 $("#mobileNoerr").show();
				 $("#mobileNoerr").text("This Mobile Number Is Not Registered.");
				 $("#sentotp").hide();
				 setTimeout(function() {
						$('#mobileNoerr').fadeOut('fast');
					}, 5000);
				 
			 }
		},
		error : function(e) {
			 ("#loaderId").hide();
			//alert('Error: Something went wrong' + e);
		}
		
		
	});

}


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    
}



$(document)
.ready(
		function() {

    if (localStorage.chkbx && localStorage.chkbx != '') {
        $('#remember_me').attr('checked', 'checked');
        
        $('#employeeId').val(localStorage.employeeId);
        $('#userName').val(localStorage.usrname);
        if($('#loginErrorMsg').val()=='' || $('#loginErrorMsg').val()==undefined ){
        	 getAllLab(localStorage.usrname);
        }else{
        	$('#userName').val('');
            $('#password').val('');
					$('#loginErrorMsg').val('');
				
        }
        $('#labId').val(localStorage.labId)
        $('#branchId').val(localStorage.branchId)
        $('#password').val(localStorage.pass);
    } else {
        $('#remember_me').removeAttr('checked');
        $('#employeeId').val('');
        $('#userName').val('');
        $('#password').val('');
        $('#labId').val('');
        $('#branchId').val('');
    }
	
    $('#remember_me').click(function() {

        if ($('#remember_me').is(':checked')) {
            // save username and password
        	localStorage.employeeId = $('#employeeId').val();
            localStorage.usrname = $('#userName').val();
            localStorage.labId = $('#labId').val();
            localStorage.branchId = $('#branchId').val();
            localStorage.pass = $('#password').val();
            localStorage.chkbx = $('#remember_me').val();
        } else {
        	localStorage.employeeId = '';
            localStorage.usrname = '';
            localStorage.pass = '';
            localStorage.labId = '';
            localStorage.pass = '';
            localStorage.branchId = '';
        }
    });
});


setTimeout(function() {
	$('#erorrInvalide').fadeOut('fast');
}, 5000);