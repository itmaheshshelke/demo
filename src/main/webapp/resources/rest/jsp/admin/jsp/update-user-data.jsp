<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Edit User Details</h4>
                  
                  
                  <form:form class="forms-sample" name="roleForm" modelAttribute="excel" method="post" action="${pageContext.request.contextPath}/excel-api/update-user-data">
					
					<form:input type="hidden" name="employeeId" path="employeeId" />
                    <div class="form-group row">
                      <label for="exampleInputUsername2" class="col-sm-3 col-form-label">First Name</label>
                      <div class="col-sm-9">
                        <form:input type="text" class="form-control" path="firstName"  placeholder="first Name"/>
                      </div>
                    </div>
                       <div class="form-group row">
                      <label for="exampleInputUsername2" class="col-sm-3 col-form-label">Last Name</label>
                      <div class="col-sm-9">
                        <form:input type="text" class="form-control" path="lastName"  placeholder="first Name"/>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputEmail2" class="col-sm-3 col-form-label">Email</label>
                      <div class="col-sm-9">
                        <form:input type="email" class="form-control" path="emailId" placeholder="Email"/>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputMobile" class="col-sm-3 col-form-label">Mobile</label>
                      <div class="col-sm-9">
                        <form:input type="text" class="form-control" path="contactNo" placeholder="Mobile number"/>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label for="exampleInputMobile" class="col-sm-3 col-form-label">Mobile</label>
                      <div class="col-sm-9">
                        <form:input type="text" class="form-control" path="country" placeholder="Country"/>
                      </div>
                    </div>
                    <div class="form-group row">
                     <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Gender</label>
                      <div class="col-sm-9">
                    <form:select class="form-control" path="gender">
                    <form:option value="">select option</form:option>
                      <form:option value="M">Male</form:option>
                      <form:option value="F">Female</form:option>
                     
                    </form:select>
                    </div>
                  </div>
                    <div class="form-group row">
                      <label for="exampleInputPassword2" class="col-sm-3 col-form-label">Password</label>
                      <div class="col-sm-9">
                        <form:input type="password" class="form-control" path="password" placeholder="Password"/>
                      </div>
                    </div>
                    
                    
                    <button type="submit" class="btn btn-gradient-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form:form>
                </div>
              </div>
            </div>
</body>
</html>