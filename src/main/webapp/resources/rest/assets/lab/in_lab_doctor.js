var count = true;

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
	
	$('a[data-toggle = "tab"]').click(function(){
		$('#home, #profile, #work, #contact').hide();
		$($(this).attr('href')).show();
	})
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


var flag = true;
var count = true;

function validate_employee(){
	
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
		var firstName =$('#fName').val();
		var trimFirstName=$.trim(firstName);
		var firstNameLen = trimFirstName.length;
		
		
		if ( $('#designation').val() == "" ) {
			 {
			$("#designationErr").show();
			$("#designationErr").text("Please select designation.");
			$('html, body').animate({
				scrollTop : 0
			}, 'fast');
			setTimeout(function() {
				$('#designationErr').fadeOut('fast');
			}, 5000);
			$("#designation").focus();
			
		}
			 $('#home, #profile, #work, #contact').hide();
			 $('#home').show()
			 return false;
		}
		
			
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
			 $('#home, #profile, #work, #contact').hide();
			 $('#home').show()
			return false;

			}
			
			
			
			var lastName =$('#lName').val();
			var lNameLen=lastName.length;
				if (lNameLen > 0) {
					var trimLastName=$.trim(lastName);
					var lstNameLen = trimLastName.length;
					if(lstNameLen <1 && lstNameLen==""){
					$("#lastNameerr").show();
					$("#lastNameerr").text("Please Enter Last Name.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#lastNameerr').fadeOut('fast');
					}, 5000);
					$("#lName").focus();
					return false;
					}
				

				}
				
				
				var date = $("#datepicker").val();
				if (date != null) {
				var dob= new Date(date);
				var curDate = new Date();
				if(dob>curDate)
					{
					$("#datepickererr").show();
					$("#datepickererr").text("Select valid date.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#datepickererr').fadeOut('fast');
					}, 5000);
					$("#datepickererr").focus();
					 $('#home, #profile, #work, #contact').hide();
					 $('#home').show()
					return false;
					}
				if(date==null || date=="")
				{
				$("#datepickererr").show();
				$("#datepickererr").text("Please select date.");
				$('html, body').animate({
					scrollTop : 0
				}, 'fast');
				setTimeout(function() {
					$('#datepickererr').fadeOut('fast');
				}, 5000);
				
				 $('#home, #profile, #work, #contact').hide();
				 $('#home').show()
				
				$("#datepickererr").focus();
				return false;
				}
				}
				var radioval = '';
				for (var i = 0; i <$('input[name = "gender"]').length; i++) {
						if($($('input[name = "gender"]')[i]).prop('checked')){
							radioval = radioval+'1';
						}else{
							radioval = radioval+'0';
						}
				}
				if(radioval.indexOf('1') == -1){
					$("#gendererr").show();
					$("#gendererr").text("Please select gender.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#gendererr').fadeOut('fast');
					}, 5000);
					$("#gender").focus();
					
					 $('#home, #profile, #work, #contact').hide();
					 $('#home').show()
					return false;
				}
				
				var role=$('#roleId').val();
				if ( $('#roleId').val() == 0 ) {
					 {
					$("#roleErr").show();
					$("#roleErr").text("Please select role.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#roleErr').fadeOut('fast');
					}, 5000);
					$("#roleId").focus();
					
				}
				 $('#home, #profile, #work, #contact').hide();
				 $('#profile').show()
				return false;

				}
				
				var qualification=$('#qualification').val();
				if (qualification < 1 && qualification == "" ) {
					 {
					$("#qualificationErr").hide();
					$("#qualificationErr").show();
					$("#qualificationErr").text("Please Enter qualification.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#qualificationErr').fadeOut('fast');
					}, 5000);
					$("#qualification").focus();
					
				}
				 $('#home, #profile, #work, #contact').hide();
				 $('#profile').show()
				return false;

				}
				var department=$('#department').val();
				if ( $('#department').val() == 0 ) {
					 {
					$("#departmentErr").show();
					$("#departmentErr").text("Please select department.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#departmentErr').fadeOut('fast');
					}, 5000);
					$("#department").focus();
					
				}
				 $('#home, #profile, #work, #contact').hide();
				 $('#profile').show()
				return false;

				}
				
				
				var primaryImageUrl=$('#primaryImageUrl').val();
				var drSignUrl=$('#drSignUrl').val();
				
				if ( primaryImageUrl == "" && drSignUrl=="" ) {
					 {
					$("#primaryImageUrlErr").hide();
					$("#primaryImageUrlErr").show();
					$("#primaryImageUrlErr").text("Please select Signature.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#primaryImageUrlErr').fadeOut('fast');
					}, 5000);
					$("#primaryImageUrl").focus();
					
				}
				 $('#home, #profile, #work, #contact').hide();
				 $('#profile').show()
				 return false;

				}
				
				
				var speciality=$('#speciality').val();
				if (speciality < 1 && speciality == "" ) {
					 {
					
					$("#specialityErr").show();
					$("#specialityErr").text("Please Enter speciality.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#specialityErr').fadeOut('fast');
					}, 5000);
					$("#speciality").focus();
					
				}
				 $('#home, #profile, #work, #contact').hide();
				 $('#profile').show()
				return false;

				}
				
				var contactNo = $("#contactNo1").val();
				var contactLen=contactNo.length ;
				if(contactNo.length <1){
					
					$("#contactNumErr").show();
					$("#contactNumErr").text("Please Enter Contact Number.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#contactNumErr').fadeOut('fast');
					}, 5000);
					$("#contactNo1").focus();
					 /*for(var i = 0; i<$('.nav-pills li.nav-item').length; i++){
						 $($('.nav-pills li.nav-item')[i]).removeClass('active');
						 $($('.tab-pane')[i]).removeClass('active');
					 }
					 $($('.nav-pills li.nav-item')[3]).addClass('active')
					 $($('.tab-pane')[3]).addClass('active')*/
					return false;
				}else if (contactNo.length !=10) {
				
					$("#contactNumErr").show();
					$("#contactNumErr").text("Please Enter Valid Contact Number.");
					$('html, body').animate({
						scrollTop : 0
					}, 'fast');
					setTimeout(function() {
						$('#contactNumErr').fadeOut('fast');
					}, 5000);
					
					/* for(var i = 0; i<$('.nav-pills li.nav-item').length; i++){
						 $($('.nav-pills li.nav-item')[i]).removeClass('active');
						 $($('.tab-pane')[i]).removeClass('active');
					 }
					 $($('.nav-pills li.nav-item')[3]).addClass('active')
					 $($('.tab-pane')[3]).addClass('active')*/
					$("#contactNo1").focus();
					return false;
				}
					
			var emailId = $("#emailId").val();
				
					var reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
					if (reg1.test($("#emailId").val()) == false) {
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

					 /*Validation for select District*/
					
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
						if (parseInt(pincodeLen) < 5 || pincodeLen == "" ) {
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

				if (count == false) {

					return false;
				}
				
				
				document.addEmployeeForm.action = CONTEXT_PATH+"/doctor/save-inlab-doctor";
				document.addEmployeeForm.method = "POST"
				document.addEmployeeForm.submit();
				
			}



function isNumber(evt) {
	evt = (evt) ? evt : window.event;
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) {
		return false;
	}
	return true;
}




















var isAllocatShifts=false;

function deleteBranch(branchId) {
	
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : CONTEXT_PATH + "/branch/deleteBranch/" + branchId,
		success : function(response) {
		},
		error : function(e) {
			/*/*alert('Error: ' + e);*/
		}
	});

}

function deleteBranch(branchId) {
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	var url = CONTEXT_PATH + "/branch/deleteBranch/" + branchId;
	window.location = url;

}

function editBranch(id) {

	var branchId = id;
	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : "getBranchById?branchId=" + branchId,
		success : function(response) {
			alert(JSON.stringify(response));
		},
		error : function(response) {
			alert('Error: ' + response.city);
		}
	});
}

function getBranchByEmpId() {
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');

	var employeeId = $("#employeeId").val();
	var url = CONTEXT_PATH+ "/branchallocation/getAllBranchByEmployee?employeeId="+ employeeId+"&pageNumber=1&pageSize=10";
	window.location = url;
}

function validate1() {
	var url=$("#webSite").val();
	var len = $("#webSite").val().length;
	var n = url.search( /\b(?:www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i);
	var patt = /\s/g;
	var rate = parseInt(len);
	if (rate != 0) {
	if(n == 0 && url.indexOf('@') == -1 && patt.test(url) == false ){
	}
	else{
		$("#webSiteerr").show();
		$("#webSiteerr").text("Enter valid website.");
		setTimeout(function() {
			$('#webSiteerr').fadeOut('fast');
		}, 5000);
		$("#website").focus();
		return false;
	}
	}
	
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	var newName = $('#branchName').val();
	var branchName = $.trim(newName);
	if (branchName == "" || branchName == undefined) {
		$("#branchNameerr").show();
		$("#branchNameerr").text("Please enter branch name.");
		setTimeout(function() {
			$('#branchNameerr').fadeOut('fast');
		}, 5000);
		$("#branchName").focus();
		return false;
	}

	
	var letters = /^[^-\s][^\d]+$/;
	if (letters.test($("#contactPerson").val()) == false) {
		var len = $("#contactPerson").val().length;
		if (len < 2 || len != "") {
			$("#contactPersonNameerr").show();
			$("#contactPersonNameerr").text("Please enter valid  name.");
			$('html, body').animate({
				scrollTop : 0
			}, 'fast');
			setTimeout(function() {
				$('#contactPersonNameerr').fadeOut('fast');
			}, 5000); // <-- time in milliseconds

			$("#contactPerson").focus();
			return false;
		}
	}

	var emailId = $("#emailId").val();
	if (emailId != "") {

		var reg1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (reg1.test($("#emailId").val()) == false) {
			$("#emailIderr").show();
			$("#emailIderr").text("Enter valid email.");
			$('html, body').animate({
				scrollTop : 0
			}, 'fast');
			setTimeout(function() {
				$('#emailIderr').fadeOut('fast');
			}, 5000); // <-- time in milliseconds

			$("#emailId").focus();
			return false;
		}

	}


	var number = /^[0-9]+$/;
	if (number.test($("#contactNo").val()) == false) {
		$("#contactNoerr").show();
		$("#contactNoerr").text("Enter valid contact number.");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#contactNoerr').fadeOut('fast');
		}, 5000);
		$("#contactNo").focus();
		return false;
	}
	
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
	}if (!pin.test($("#pinCode").val())) {
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

	
	var alpha = /^[^-\s][a-zA-Z0-9_\s-]/;
	var len = $("#addressLine1").val().length;
		if (alpha.test($("#addressLine1").val()) == false  || $("#addressLine1").val().length <= 1) {
		$("#addresserr").show();
		$("#addresserr").text("Enter your valid address.");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#addresserr').fadeOut('fast');
		}, 5000);
		$("#addressLine1").focus();
		return false;
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
		
	/* Validation for select District*/
	
	if ($("#districtId").val() == 0 || $("#districtId").val() == "") {
		$("#districtIderr").show();
		$("#districtIderr").text("Please select district.");
    		setTimeout(function() {
			$('#districtIderr').fadeOut('fast');
		}, 5000);
		$("#districtId").focus();
		return false;
	}
	
	/* Validation for select City*/
	if ($("#cityId").val() == 0 || $("#cityId").val() == "") {
		$("#cityIderr").show();
		$("#cityIderr").text("Please select city.");
			setTimeout(function() {
			$('#cityIderr').fadeOut('fast');
		}, 5000);
		$("#cityId").focus();
		return false;
	}


	document.branchForm.action = CONTEXT_PATH + "/branch/saveBranch";
	document.branchForm.method = "POST"
	document.branchForm.submit();
	$("#branchForm")[0].reset();
}

function selectEmp() {
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	var employeeId = $("#employeeId").val();

	if (employeeId == 0 || employeeId == "") {

		$("#employeeIderr").show();
		$("#employeeIderr").text("Please select employee.");
		$("#employeeId").focus();
		return false;
	}

}


function branchalloc() {
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	var branchId = $("#branchId").val();

	if (branchId == 0 || branchId == "") {

		$("#branchNameerr").show();
		$("#branchNameerr").text("Please enter branch name.");
		setTimeout(function() {
			$('#branchNameerr').fadeOut('fast');
		}, 5000);
		$("#branchId").focus();
		return false;
	}


	if (isAllocatShifts == false) {
		$("#shiftIderr").text("Please enter shift.").show();
		$('#infoMSG').modal('show')
		$("#shiftId").focus();
		return false;
	}
	
	document.addBranchAllocation.action = CONTEXT_PATH + "/branchallocation/saveBranchAllocation";
	document.addBranchAllocation.method = "POST"
	document.addBranchAllocation.submit();
	$("#addBranchAllocation")[0].reset();
	
}


function mobvalidate(){
	console.log($('#contactNo').val().length)
	if(($('#contactNo').val().length+1) >10){
		$("#contactNoerr").html("Enter valid mobile number.").css({"color":"#f00"})
		return false;
	}
}


/* This Ajax call for select for District list  */
$(document).ready(function(){
	$("#stateId").change(function(){
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
   	var stateId = $("#stateId").val();
   	var html = "";
   	
   	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : CONTEXT_PATH+"/branch/getAlldistrictAjax/" + stateId,
		success : function(response) {
			html=html+"<option value='0'> Please Select </option>";
			$(response).each(function(index,value){
				html= html+"<option value='"+value.districtId+"'>"+value.name+"</option>";
			});
			
			$("#districtId").html(html);
			}
   	});
	});
});

/* This Ajax call for select for City list  */

$(document).ready(function(){
		$("#districtId").change(function(){
		var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	   	var districtId = $("#districtId").val();
	   	var html = "";
	  	   	$.ajax({
			type : "GET",
			contentType : "application/json",
			delimiter : ",",
			url : CONTEXT_PATH+"/branch/getCityByDistrictId/" + districtId,
				success : function(response) {
				html=html+"<option value='0'> Please Select </option>";
				$(response).each(function(index,value){
					html= html+"<option value='"+value.cityId+"'>"+value.cityName+"</option>";
				});
				
				$("#cityId").html(html);
				}
	   	});
	   	
		});
		
	});


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
/*validation for branch logo */






function addNewShiftTime(id){
	var cnt = $('.newrow'+id).length;
	if(cnt == 0){
		$('#row'+id).prepend('<div class="row newrow'+id+'" id = "remove'+id+'-'+cnt+'"><div class="col-md-5 col-5"><div class="row"><input type="hidden" id="allocationId-'+id+'-'+cnt+'" name="allocationId-'+id+'-'+cnt+'"> <label class="col-sm-5  col-form-label">Start Time</label><div class="col-sm-7"><input id="starttime-'+id+'-'+cnt+'" name="stringStartTime" onblur="addShifts('+id+','+cnt+', 100)" minlength="2" placeholder="Enter Shift Start Time." type="time" class="form-control" value="" maxlength="30"><span id="roleerr" style="color: red"></span></div></div></div><div class="col-md-5 col-5"><div class="row"><label class="col-sm-5 col-form-label  pt-2">End Time</label><div class="col-sm-7"><input id="endtime-'+id+'-'+cnt+'" name="stringEndTime" minlength="2" onblur="addShifts('+id+','+cnt+', 100)" placeholder="Enter Shift End Time." type="time" class="form-control" value="" maxlength="30"></div></div></div><div class = "col-md-2 col-2 m-t-5"><a href = "#prevent" id="addNewTime" onclick = "removeShiftTime('+id+','+cnt+')"><i class = "mdi mdi-minus-circle" style = " position:absolute"></i></a></div></div>')
	}
	$('#remove'+id+'-'+(cnt-1)).after('<div class="row newrow'+id+'" id = "remove'+id+'-'+cnt+'"><div class="col-md-5 col-5"><div class="row"><input type="hidden" id="allocationId-'+id+'-'+cnt+'" name="allocationId-'+id+'-'+cnt+'"> <label class="col-sm-5 col-form-label">Start Time</label><div class="col-sm-7"><input id="starttime-'+id+'-'+cnt+'" name="stringStartTime" onblur="addShifts('+id+','+cnt+', 100)" minlength="2" placeholder="Enter Shift Start Time." type="time" class="form-control" value="" maxlength="30"><span id="roleerr" style="color: red"></span></div></div></div><div class="col-md-5 col-5"><div class="row"><label class="col-sm-5 col-form-label  pt-2">End Time</label><div class="col-sm-7"><input id="endtime-'+id+'-'+cnt+'" name="stringEndTime" minlength="2" onblur="addShifts('+id+','+cnt+', 100)" placeholder="Enter Shift End Time." type="time" class="form-control" value="" maxlength="30"></div></div></div><div class = "col-md-2 col-2 m-t-5"><a href = "#prevent" id="addNewTime" onclick = "removeShiftTime('+id+','+cnt+')"><i class = "mdi mdi-minus-circle" style = " position:absolute"></i></a></div></div>')
}

function removeShiftTime(id,cnt){
	var allocationId=$('#allocationId-'+id+'-'+cnt).val();
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	$('#remove'+id+'-'+cnt).remove();
	if(allocationId!=""){
	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : CONTEXT_PATH + "/branch-alloction-rest/remove-shifts-record?allocationId=" + allocationId,
		success : function(response) {
			$(".badge-"+id+"-"+cnt).remove();
			/*$('#allocationId-'+dayId+'-'+srNo).val(response.allocationId);*/
		},
		error : function(e) {
		}
	});
	}else{
		
		var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
		$.ajax({
			type : "GET",
			contentType : "application/json",
			delimiter : ",",
			url : CONTEXT_PATH + "/branch-alloction-rest/remove-shifts-record-session?dayId=" + id+"&srNo=" + cnt,
			success : function(response) {
				/*$('#allocationId-'+dayId+'-'+srNo).val(response.allocationId);*/
			},
			error : function(e) {
				/* alert('Error: ' + e); */
			}
		});
		
		
	}
}

//call in bootstrap-toggle.min.js
function dayOff(dayId, isDayOff){
	var employeeId=$('#employeeId').val();
	var branchId=$('#branchId').val();
	var allocationId=$('#allocationId').val();
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	var markup="";
	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : CONTEXT_PATH + "/branch-alloction-rest/day-off?dayId=" + dayId+"&isDayOff="+isDayOff+"&employeeId="+employeeId+"&branchId="+branchId,
		success : function(response) {
			if(response.length >0){
				$('#row'+dayId).empty();
			}
			var id = dayId;
			for(var i=0; i < response.length; i++) {
				var cnt = i;
				$('#row'+id).append('<div class="row newrow'+id+'" id = "remove'+id+'-'+cnt+'"><div class="col-md-5"><div class="row"><input type="hidden" id="allocationId-'+id+'-'+cnt+'" name="allocationId-'+id+'-'+cnt+'" value="'+response[i].allocationId+'"> <label class="col-sm-5 col-form-label">Start Time</label><div class="col-sm-7"><input id="starttime-'+id+'-'+cnt+'" name="stringStartTime" onblur="addShifts('+id+','+cnt+', 100)" minlength="2" placeholder="Enter Shift Start Time." type="time" class="form-control" value="'+response[i].shiftStartTime+'" maxlength="30"><span id="roleerr" style="color: red"></span></div></div></div><div class="col-md-5"><div class="row"><label class="col-sm-5 col-form-label  pt-2">End Time</label><div class="col-sm-7"><input id="endtime-'+id+'-'+cnt+'" name="stringEndTime" minlength="2" onblur="addShifts('+id+','+cnt+', 100)" placeholder="Enter Shift End Time." type="time" class="form-control" value="'+response[i].shiftEndTime+'" maxlength="30"></div></div></div><div class = "col-md-2 m-t-5"><a href = "#prevent" id="addNewTime" onclick = "removeShiftTime('+id+','+cnt+')"><i class = "mdi mdi-minus-circle" style = "position:absolute"></i></a></div></div>')

			}
			if(response.length != 0){
				$('#row'+id).append('<div class="row" id="addNewTime'+id+'"><div class="col-2"><a href="#prevent" onclick="addNewShiftTime('+id+')">Add Hours</a></div></div>')
			}
			
		},
		error : function(e) {
			/* alert('Error: ' + e); */
		}
	});
}

function addShifts(dayId, srNo, blur) {
	var Start = $("#starttime-" + dayId + '-' + srNo).val();
	var end = $("#endtime-" + dayId + '-' + srNo).val();
	var allocationId=$('#allocationId-'+dayId+'-'+srNo).val();
	var employeeId=$('#employeeId').val();
	var branchId=$('#branchId').val();
	
	if (branchId == 0 || branchId == "") {
		$("#branchNameerr").show();
		$("#branchNameerr").text("Please select branch name.");
		setTimeout(function() {
			$('#branchNameerr').fadeOut('fast');
		}, 5000);
		$("#branchId").focus();
		return false;
	}
	
	if (Start == "" || end == "") {
		return false;
	}
	
	
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	if(blur == 100){
		if($('#starttime-'+dayId+'-'+srNo).val() != '' && $('#endtime-'+dayId+'-'+srNo).val() != ''){
			
			if(Number($('#starttime-'+dayId+'-'+srNo).val().split(":")[0])<12 && Number($('#starttime-'+dayId+'-'+srNo).val().split(":")[0]) != 0){
				var starttm = pad(Number($('#starttime-'+dayId+'-'+srNo).val().split(':')[0]))+":"+pad(Number($('#starttime-'+dayId+'-'+srNo).val().split(':')[1]))+" AM";
			}else{
				if(Number(Number($('#starttime-'+dayId+'-'+srNo).val().split(":")[0])-12) == 0){
					var starttm = 12+":"+pad(Number($('#starttime-'+dayId+'-'+srNo).val().split(':')[1]))+" PM";
				}else if(Number(Number($('#starttime-'+dayId+'-'+srNo).val().split(":")[0])) == 0){
					var starttm = 12+":"+pad(Number($('#starttime-'+dayId+'-'+srNo).val().split(':')[1]))+" AM";
				}else{
					var starttm = pad(Number(Number($('#starttime-'+dayId+'-'+srNo).val().split(':')[0])-12))+":"+pad(Number($('#starttime-'+dayId+'-'+srNo).val().split(':')[1]))+" PM";
				}
			}
			
			if(Number($('#endtime-'+dayId+'-'+srNo).val().split(":")[0])<12 && Number($('#endtime-'+dayId+'-'+srNo).val().split(":")[0]) != 0){
				var endtm = pad(Number($('#endtime-'+dayId+'-'+srNo).val().split(':')[0]))+":"+pad(Number($('#endtime-'+dayId+'-'+srNo).val().split(':')[1]))+" AM";
			}else if(Number($('#endtime-'+dayId+'-'+srNo).val().split(":")[0])==12){
				var endtm = 12+":"+pad(Number($('#endtime-'+dayId+'-'+srNo).val().split(':')[1]))+" PM";
			}else if(Number($('#endtime-'+dayId+'-'+srNo).val().split(":")[0])==0){
				var endtm = 12+":"+pad(Number($('#endtime-'+dayId+'-'+srNo).val().split(':')[1]))+" AM";
			}else{
				var endtm = pad(Number(parseFloat(Number($('#endtime-'+dayId+'-'+srNo).val().split(':')[0])-12)))+":"+pad(Number($('#endtime-'+dayId+'-'+srNo).val().split(':')[1]))+" PM";
			}
			
			if($(".badge-"+dayId+"-"+srNo).html() == undefined){
				$('#day'+dayId).show();
				$('#day'+dayId).append('<span  class = "badge badge-dark col-xl-2 col-lg-3 col-md-4 badge-'+dayId+'-'+srNo+'"><span class = "pt-1">'+starttm+'-'+endtm+'</span> &nbsp;<a class = "pull-right close" href = "#prevent" style = "color:#fff;margin-top:-5px"></a></span>')
			}else{
				$(".badge-"+dayId+"-"+srNo).remove();
				$('#day'+dayId).show();
				$('#day'+dayId).append('<span  class = "badge badge-dark col-xl-2 col-lg-3 col-md-4 badge-'+dayId+'-'+srNo+'"><span class = "pt-1">'+starttm+'-'+endtm+'</span> &nbsp;<a class = "pull-right close" href = "#prevent" style = "color:#fff;margin-top:-5px"></a></span>')
			}
			
		}
		 
		/*$.ajax({type : "GET",
			contentType : "application/json",
			delimiter : ",",
			url : CONTEXT_PATH + "/branchallocation",
			success : function(response) {
				$('#allocationId-'+dayId+'-'+srNo).val(response.allocationId);
			},
			error : function(e) {
				 alert('Error: ' + e); 
			}
		});*/
	}
	$.ajax({
		type : "GET",
		contentType : "application/json",
		delimiter : ",",
		url : CONTEXT_PATH + "/branch-alloction-rest/add-shifts-record?dayId=" + dayId+"&srNo=" + srNo+"&Start=" + Start+"&end=" + end+"&allocationId="+allocationId+"&employeeId="+employeeId+"&branchId="+branchId,
		success : function(response) {
			if(response.result==true){
				$('#shift').modal('show');
				$("#msgErr").text("This shift is already allocated to some one.").show();
				$(".badge-"+dayId+"-"+srNo).remove();
				$("#branchId").focus();
				return false;
			}else if(response.invaildShift==true){
				$('#shift').modal('show');
				$("#msgErr").text("Shift time out of day.").show();
				$(".badge-"+dayId+"-"+srNo).remove();
				$("#branchId").focus();
			}	
			else{
			$('#allocationId-'+dayId+'-'+srNo).val(response.allocationId);
			isAllocatShifts=true;
			}
		},
		error : function(e) {
			/* alert('Error: ' + e); */
		}
	});

}

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}




var _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];    
function ValidateImage(value) {
            var sFileName = value;
            if (sFileName.length > 0) {
                var blnValid = false;
                for (var j = 0; j < _validFileExtensions.length; j++) {
                    var sCurExtension = _validFileExtensions[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        $('#updateBranch').prop('disabled', false);
                        $('#saveBranch').prop('disabled', false);
                        $("#branchLogoerr").hide();
                      
                        break;
                    }
                }
                
                if (!blnValid) {
                    $('#updateBranch').prop('disabled', true);
                    $('#saveBranch').prop('disabled', true);
                    $("#branchLogoerr").show();
                    $("#branchLogoerr").text("Sorry, " + sFileName + " is invalid, allowed extensions are: " + _validFileExtensions.join(", "));
                    return false;
                }
            }
    return true;
}



function isContactExist(contactNo1) {
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	
	var existingContactNo = $("#existingContactNo").val();
	
var contactLenght=contactNo1.length;
if(contactLenght>=10){
	if(existingContactNo!=""){
		
	if(existingContactNo !="" && contactNo1 != existingContactNo){
	$
			.ajax({
				type : "GET",
				contentType : "application/json",
				delimiter : ",",
				url : CONTEXT_PATH
						+ "/rest/is-employee-contact-exist?contactNo1="
						+ contactNo1,
				success : function(response) {
					if (response == true) {
						$("#contactNumErr").show();
						document.getElementById("contactNumErr").innerHTML = "Contact no is already exist";
						
						$("#contactNo1").focus();

						count = false;
					} else {
						document.getElementById("contactNumErr").innerHTML = "";
						count = true;
					}

				},
				error : function(e) {
					/* alert('Error: ' + e); */
				}
			});

}else if(count == false){
	document.getElementById("contactNumErr").innerHTML = "";
	count = true;
}
	
	}else{
		$
				.ajax({
					type : "GET",
					contentType : "application/json",
					delimiter : ",",
					url : CONTEXT_PATH
							+ "/rest/is-employee-contact-exist?contactNo1="
							+ contactNo1,
					success : function(response) {
						if (response == true) {
							$("#contactNumErr").show();
							document.getElementById("contactNumErr").innerHTML = "Contact no is already exist";
							$("#contactNo1").focus();
							count = false;
						} else {
							document.getElementById("contactNumErr").innerHTML = "";
							count = true;
						}

					},
					error : function(e) {
						/* alert('Error: ' + e); */
					}
				});
		
	}
	
	}
}














