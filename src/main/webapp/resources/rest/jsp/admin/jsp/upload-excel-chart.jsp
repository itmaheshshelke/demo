<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<link id="contextPathHolder" data-contextPath="${pageContext.request.contextPath}"/>
<script>
window.onload = function () {


var dataset=[];
var obj;

var CONTEXT_PATH = $('#contextPathHolder').attr('data-contextPath');
$.ajax({
	        type: "GET",
	        contentType: "application/json",
			delimiter: ",",
	        url: CONTEXT_PATH +"/excel-api/get-chart-data",
	         success: function(response){
	        	// console.log(response);
			 
	        	 for(var i=0;i<response.length;i++){
	        		
	        	 obj={
					type: response[i].type,
					name: response[i].name,
					legendText: response[i].legendText,
					showInLegend: response[i].showInLegend, 
					dataPoints: response[i].charDataList
					}
	        	 
	        		 
	        	dataset.push(obj);
	        	}
	        	
				
	        	 var chart = new CanvasJS.Chart("chartContainer", {
	        			animationEnabled: true,
	        			title:{
	        				text: "Employee details report onsite/offsite"
	        			},	
	        			
	        			axisY: {
	        				title: "No-of-people"
	        			},
	        			
	        			axisX: {
	        				title: "Band"
	        			},
	        			toolTip: {
	        				shared: true
	        			},
	        			legend: {
	        				cursor:"pointer",
	        				itemclick: toggleDataSeries
	        			},
	        			data: dataset
	        			
	        			
	        		});
	        		chart.render();

	        		function toggleDataSeries(e) {
	        			if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
	        				e.dataSeries.visible = false;
	        			}
	        			else {
	        				e.dataSeries.visible = true;
	        			}
	        			chart.render();
	        		}

	        	 
	        	 
				 
			},
	        error: function(e){
	        /*alert('Error: ' + e);*/
	        }
	        }); 





}
</script>


<div class="col-lg-12 grid-margin stretch-card">
	<div class="card">
		<div class="card-body">
			
			<form method="post" enctype="multipart/form-data"
				action="${pageContext.request.contextPath}/excel-api/upload-excel-file">
				<div class="form-group">
					<label>File upload</label>

					<div class="input-group col-xs-12">
						<input type="file" class="form-control file-upload-info"
							name="file" placeholder="Upload Image" required="required">
						<span class="input-group-append">
							<button class="file-upload-browse btn btn-gradient-primary"
								type="submit">Upload</button>
						</span>
					</div>
				</div>

			</form>
			<c:if test="${ errorMessage !=null}">
				<span class="row col-md-12 alert alert-danger">${errorMessage }</span>
			</c:if>
			<c:if test="${ successMessage !=null}">
				<span class="row col-md-12 alert alert-success">${successMessage }</span>
			</c:if>

			<div class="row col-md-12">
				<div id="chartContainer"
					style="height: 370px; max-width: 920px; margin: 0px auto;"></div>

			</div>

		</div>
	</div>
</div>

</html>

<script
	src="${pageContext.request.contextPath}/resources/rest/assets/js/canvasjs.min.js"></script>
