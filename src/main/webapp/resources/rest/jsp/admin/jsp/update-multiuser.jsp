<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">User List</h4>
                  
                  <c:if test="${ errorMessage !=null}">
                  <span class="row col-md-12 alert alert-danger">${errorMessage }</span>
                  </c:if>
                  <c:if test="${ successMessage !=null}">
                  <span class="row col-md-12 alert alert-success">${successMessage }</span>
                  </c:if>
                  <input type = "hidden" id = "min">
                  <input type = "hidden" id = "max">
                <form method="post" action="${pageContext.request.contextPath}/excel-api/update-selected-user">
                 
                 
                  <table class="table table-bordered" id="example">
					<thead>
						<tr>
							<th>Sr. No</th>
							<th>First name</th>
							<th>Last Name</th>
							<th>Email Id</th>
							<th>Contact No</th>
							<th>Gender</th>
							<th>Password</th>
						</tr>
					</thead>
					<tbody>
					<c:forEach items="${excelList}" var="excel" varStatus="loop">
							<tr>
								<td class="col-sm-2" style="width: 100px;">${loop.index+1}<input type="hidden" name="employeeIds" value="${excel.employeeId}"></td>
								<td class="col-sm-2" style="width: 100px;">
								 <input type="text" class="form-control" value="${excel.firstName}"  placeholder="first Name" name="firstName"/></td>
								<td class="col-sm-2" style="width: 200px;">
								<input type="text" class="form-control" value="${excel.lastName}"  placeholder="Last Name" name="lastName"></td>
								<td class="col-sm-2" style="width: 200px;">
								<input type="email" class="form-control" value="${excel.emailId}" placeholder="Email" name="emailId"></td>
								<td class="col-sm-2" style="width: 200px;">
								<input type="text" class="form-control" name="contactNo" value="${excel.contactNo}" placeholder="Mobile number"/>
								</td>
								<td class="col-sm-2" style="width: 200px;">
								<select class="form-control" name="gender">
                     				 <option value="M"${excel.gender == 'M' ? 'selected="selected"' : ''}>Male</option>
                     				 <option value="F"${excel.gender == 'F' ? 'selected="selected"' : ''}>Female</option>
                     
                 			   </select>
								
								</td>
								<td class="col-sm-2" style="width: 200px;">
								 <input type="password" class="form-control" name="password" placeholder="Password" value="${excel.password}"/>
								</td>
								
							</tr>
						</c:forEach>
					</tbody>
                  </table>
                   <button class="pull-right col-md-4  btn btn-primary" type="submit" >Update All</button>
                   </form>
                </div>
              </div>
            </div>

</html>