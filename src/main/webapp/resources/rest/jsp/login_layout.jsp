<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>My Admin panel</title>
  <!-- plugins:css -->
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/rest/assets/vendors/iconfonts/mdi/css/materialdesignicons.min.css">
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/rest/assets/vendors/css/vendor.bundle.base.css">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/rest/assets/css/style.css">
  <!-- endinject -->
  <link rel="shortcut icon" href="${pageContext.request.contextPath}/resources/rest/assets/images/favicon.png" />
</head>
<body>
	 <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth">
		<tiles:insertAttribute name="body" />
	</div>
	</div>
	</div>
	
	
<script src="${pageContext.request.contextPath}/resources/rest/assets/vendors/js/vendor.bundle.base.js"></script>
  <script src="${pageContext.request.contextPath}/resources/rest/assets/vendors/js/vendor.bundle.addons.js"></script>
  <!-- endinject -->
  <!-- inject:js -->
  <script src="${pageContext.request.contextPath}/resources/rest/assets/js/off-canvas.js"></script>
  <script src="${pageContext.request.contextPath}resources/rest/assets/js/misc.js"></script>	
</body>