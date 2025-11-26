

var flag = true;
function youwantsmsservice(){
	if($("#wantsmsservice").prop('checked') == true){
		$("#smsservice").show();
	}else{
		$("#smsservice").hide();
		recalculatesmsbill();
	}
	
}
			
function validate_step4() {

	if($("#wantsmsservice").prop('checked') == true){
	
	var letters = /^[^-\s][a-zA-Z0-9_\s-]/;
	if (letters.test($("#senderId").val()) == false) {
		$("#senderIdErr").show();
		$("#senderIdErr").text("Please Enter Sender Id.");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#senderIdErr').fadeOut('fast');
		}, 5000);
		$("#senderId").focus();
		return false;
	}
	if ($("#senderId").val().length != 6) {
	    $("#senderIdErr").show();
		$("#senderIdErr").text("Length Must Be Exactly 6 Characters.");
		 flag=false;
	  }else{
		  $("#senderIdErr").hide();
		  flag=true;
		  calculatesmsprice();
	  }
	var qty=$("#quantity").val();
	if (qty == "" || qty==undefined) {
		$("#qtyErr").show();
		$("#qtyErr").text("Please enter sms quantity");
		$('html, body').animate({
			scrollTop : 0
		}, 'fast');
		setTimeout(function() {
			$('#qtyErr').fadeOut('fast');
		}, 5000);
		$("#quantity").focus();
		return false;
	}
	
	if(flag==false){
		
		return false;
	}
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	document.formstep4.action = CONTEXT_PATH+"/global-register/register-step-5";
	document.formstep4.method = "POST"
	document.formstep4.submit();
}
}


function calculatesmsprice(){

	var quantity=parseFloat($("#quantity").val());
	var senderId=$("#senderId").val();
	var rate=parseFloat($("#rate").val());
	var total;
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	total=quantity * rate / 100;
	if(isNaN(total)){
		$("#nettotal").val(0);
	}else
	{
	$("#nettotal").val(total);
	}
	
	if($("#wantsmsservice").prop('checked') == true){
		var obj = {
				"senderId" : senderId,
				"wantsmsservice" : "YES",
				"rate" : rate,
				"qty" : quantity,
				"total" : total,
			};
	 $.ajax({
		 type : "POST",
			contentType : "application/json",
			data : JSON.stringify(obj),
			dataType : 'json',
			delimiter : ",",
	        url: CONTEXT_PATH +"/sys-admin-rest/calculate-sms-bill",
	         success: function(response){
	        	 
	        	  $("#invoiceDiv").empty();
	        	 for (var i=0; i<response.labBillDetailsDtoList.length; i++) {
	        				
	        		 $('#invoiceDiv').append('<div class="col-md-7 col-7">' + response.labBillDetailsDtoList[i].productName  + '</div>'+'<div class="col-md-5 col-5">&nbsp<i class="fa fa-rupee"></i> ' + response.labBillDetailsDtoList[i].price.toFixed(2)  + '/-</div><hr>'); //now you access the property.
	          		 		
	        		}
	        		document.getElementById("subTotal").innerHTML=response.amount.toFixed(2);
	        	
	        	 document.getElementById("tax").innerHTML=response.tax.toFixed(2);
	        	 document.getElementById("total").innerHTML=response.total.toFixed(2);
			},
	        error: function(e){
	        /*alert('Error: ' + e);*/
	        }
	        });
}
	
	
	
}


function recalculatesmsbill(){

	var quantity=parseFloat($("#quantity").val());
	var senderId=$("#senderId").val();
	var rate=parseFloat($("#rate").val());
	var total;
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	total=quantity * rate / 100;
	$("#nettotal").val(total);
	
	if($("#wantsmsservice").prop('checked') == false && quantity!=null && senderId!=null){
		var obj = {
				"senderId" : senderId,
				"wantsmsservice" : "YES",
				"rate" : rate,
				"qty" : quantity,
				"total" : total,
			};
	 $.ajax({
		 type : "POST",
			contentType : "application/json",
			data : JSON.stringify(obj),
			dataType : 'json',
			delimiter : ",",
	        url: CONTEXT_PATH +"/sys-admin-rest/recalculate-sms-bill",
	         success: function(response){
	        	 
	        	  $("#invoiceDiv").empty();
	        	 for (var i=0; i<response.labBillDetailsDtoList.length; i++) {
	        				
	        		 $('#invoiceDiv').append('<div class="col-md-7 col-7">' + response.labBillDetailsDtoList[i].productName  + '</div>'+'<div class="col-md-5 col-5">&nbsp;<i class="fa fa-rupee"></i> ' + response.labBillDetailsDtoList[i].price.toFixed(2)  + '/-</div><hr>'); //now you access the property.
	          		 		
	        		}
	        		document.getElementById("subTotal").innerHTML=response.amount.toFixed(2);
	        	
	        	 document.getElementById("tax").innerHTML=response.tax.toFixed(2);
	        	 document.getElementById("total").innerHTML=response.total.toFixed(2);
	        	 
	        	 
	        	 	$("#quantity").val("");
	        		$("#senderId").val("");
	        	
	        		$("#nettotal").val("0.0");
			},
	        error: function(e){
	        /*alert('Error: ' + e);*/
	        }
	        });
}
	
	
}


function checkLength(el) {
	 var x = document.getElementById("senderId");
	    x.value = x.value.toUpperCase();
	    if (event.keyCode == 32) {
	        return false;
	    }
	  if (el.value.length != 6) {
	    $("#senderIdErr").show();
		$("#senderIdErr").text("Length must be exactly 6 characters.");
		 flag=false;
	  }else{
		  $("#senderIdErr").hide();
		  flag=true;
		  
		  
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



