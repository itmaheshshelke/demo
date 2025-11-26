

function calculatePrice(id) {
	  $("#loaderId").show();
	var moduleId = id;
	if ($("#moduleId_" + id).prop('checked') == true) {
		var modulePrice = 0;
		
		if (id == 4) {
			modulePrice = $("#selectbox").val();
		}
		if (id == 1) {
			modulePrice = $("#selectboxLab").val();
		}
		var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
		
      $.ajax({
      type: "GET",
      contentType: "application/json",
		delimiter: ",",
      url: CONTEXT_PATH +"/sys-admin-rest/calculate-module-bill/" + moduleId+"/"+modulePrice,
      
       success: function(response){
    	   
    	   $("#invoiceDiv").empty();
      	 for (var i=0; i<response.labBillDetailsDtoList.length;i++) {
      			 $('#invoiceDiv').append('<div class="col-md-7 col-7">' + response.labBillDetailsDtoList[i].productName  + '</div>'+'<div class="col-md-5 col-5">&nbsp;<i class="fa fa-rupee "></i> ' + response.labBillDetailsDtoList[i].price.toFixed(2)  + '/-</div><hr></tr>'); //now you access the property.
      		 
      		}
      		document.getElementById("subTotal").innerHTML=response.amount.toFixed(2);
           	 document.getElementById("tax").innerHTML=response.tax.toFixed(2);
      	 document.getElementById("total").innerHTML=response.total.toFixed(2);
      	 $("#discount").val(response.discount);
      	 $("#loaderId").hide();
		},
      error: function(e){
      /*alert('Error: ' + e);*/
      }
      });
	
	}
	else
		{
		
		 var modulePrice=0;
		  if(id==4)
		  {
			  modulePrice= $("#selectbox").val();
		  }
		  if (id == 1) {
			  modulePrice = $("#selectboxLab").val();
			}
		  $("#loaderId").show();
			var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
			
	        $.ajax({
	        type: "GET",
	        contentType: "application/json",
			delimiter: ",",
	        url: CONTEXT_PATH +"/sys-admin-rest/re-calculate-module-bill/" + moduleId+ "/" + modulePrice,
	         success: function(response){
	        	 $("#invoiceDiv").empty();
	        
	        	 for (var i=0; i<response.labBillDetailsDtoList.length;i++) {
	        		
	        		 $('#invoiceDiv').append('<div class="col-md-7 col-7">' 
	        				 + response.labBillDetailsDtoList[i].productName  + '</div>'+'<div class="col-md-5 col-5">&nbsp;<i class="fa fa-rupee "></i>' + response.labBillDetailsDtoList[i].price.toFixed(2)  + '/-</div><hr>'+'<br>'); //now you access the property.
	        		 
	        		}
	        		document.getElementById("subTotal").innerHTML=response.amount.toFixed(2);
	        	document.getElementById("tax").innerHTML=response.tax.toFixed(2);
	        	 document.getElementById("total").innerHTML=response.total.toFixed(2);
	        	 $("#discount").val(response.discount);
	        	  $("#loaderId").hide();
			},
	        error: function(e){
	        /*alert('Error: ' + e);*/
	        }
	        });}
		}




function validate_step3(){
	var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
	document.formstep3.action = CONTEXT_PATH+"/global-register/step-4";
	document.formstep3.method = "GET"
	document.formstep3.submit();
}
		
		