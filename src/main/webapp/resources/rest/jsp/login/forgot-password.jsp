<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<body>
 
        <div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-4">
              <div class="brand-logo">
                <img src="${pageContext.request.contextPath}/resources/rest/assets/images/logo.svg">
              </div>
              <h4>Hello! let's get started</h4>
            
              <form class="pt-3">
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="" placeholder="Username">
                </div>
               
                <div class="mt-3">
                  <a class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">FORGOT PASSWORD</a>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  
                
                </div>
                
                <div class="text-center mt-4 font-weight-light">
                  Don't have an account? <a href="${pageContext.request.contextPath}/new-user" class="text-primary">Create</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      
</body>
