<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>rest PATH LAB MODULE</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/rest/assets/vendors/iconfonts/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/rest/assets/vendors/css/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- inject:css -->
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/rest/assets/css/style.css"> 
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/rest/assets/css/main.css">
	<link href='${pageContext.request.contextPath}/resources/rest/assets/js/fullcalendar.min.css' rel='stylesheet' />
	<link href='${pageContext.request.contextPath}/resources/rest/assets/js/fullcalendar.print.min.css' rel='stylesheet' media='print' />
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css">
	<link rel="icon" href="${pageContext.request.contextPath}/resources/rest/assets/images/logo.png" type="image/png" sizes="16x16">
	<link src = "https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css"/>
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"/>
</head>
<body>
	<div id="success" class="modal fade" role="dialog">
  <div class="modal-dialog successMSG">
    <div class="modal-content">
      <div class="modal-body text-center">
		<img src = "${pageContext.request.contextPath}/resources/rest/assets/images/success.png" width = "100px"><br/>
		<h3 class = "msgheading">Success !!!</h3>
        <p id = "successmsg">Payment completed successfully</p>
        <button type="button" class="btn btn-success form-control" data-dismiss="modal" style = "color:#fff">Got It</button>
      </div>
    </div>
  </div>
</div>
<div id="failure" class="modal fade" role="dialog">
  <div class="modal-dialog errMSG">
    <div class="modal-content">
      <div class="modal-body text-center">
		<img src = "${pageContext.request.contextPath}/resources/rest/assets/images/failure.png" width = "100px"><br/>
		<h3 class = "errmsgheading">Oh Snap !!!</h3>
        <p id = "errmsg">Something went wrong. Payment Failed</p>
        <button type="button" class="btn btn-danger form-control" data-dismiss="modal" style = "color:#fff">Try Again</button>
      </div>
    </div>
  </div>
</div>
<div class="container-scroller">
	<nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
				<tiles:insertAttribute name="header" />
	</nav>
	<div class="container-fluid page-body-wrapper">
	<nav class="sidebar sidebar-offcanvas" id="sidebar">
			<tiles:insertAttribute name="menu" />
	</nav>
		<div class="main-panel">
		 <div class="content-wrapper">
			<tiles:insertAttribute name="body" />
		</div>
		
		<tiles:insertAttribute name="footer" />
		
		</div>
	</div>
	</div>
	
<!-- plugins:js -->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
 
<script src='${pageContext.request.contextPath}/resources/rest/assets/js/moment.min.js'></script>
<script src="${pageContext.request.contextPath}/resources/rest/assets/js/jquery-3.2.1.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<script src='${pageContext.request.contextPath}/resources/rest/assets/js/fullcalendar.min.js'></script>


 <!-- <script src="vendors/js/vendor.bundle.base.js"></script> -->
  <script src="${pageContext.request.contextPath}/resources/rest/assets/vendors/js/vendor.bundle.addons.js"></script>
  <script src="${pageContext.request.contextPath}/resources/rest/assets/js/off-canvas.js"></script>
  <script src="${pageContext.request.contextPath}/resources/rest/assets/js/misc.js"></script>
  <script src="${pageContext.request.contextPath}/resources/rest/assets/js/dashboard.js"></script>

  
  <!-- <script src="https://code.jquery.com/jquery-3.3.1.js"></script> -->
	<script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	  <script src="${pageContext.request.contextPath}/resources/rest/assets/js/main.js"></script>
 
</body>


