<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
 <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<link id="contextPathHolder"
	data-contextPath="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<div class="row w-100">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left p-4">
              <div class="brand-logo">
                <img src="${pageContext.request.contextPath}/resources/rest/assets/images/logo.svg">
              </div>
              <h4>New here?</h4>
              <h6 class="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              <form:form class="pt-3" enctype="multipart/form-data" modelAttribute="employeeDto" method="post" action="${pageContext.request.contextPath}/register-new-user">
                <div class="form-group">
                  <input type="text" name="firstName" class="form-control form-control-lg" id="exampleInputUsername1" placeholder="full name">
                </div>
                 <div class="form-group">
                  <input type="text" class="form-control form-control-lg" name="contactNo" id="contactNo" placeholder="Contact No">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" name="emailId" id="emailId" placeholder="Email">
                </div>
                
                <div class="form-group">
                  <input type="file" class="form-control form-control-lg" id="image" name="file" placeholder="Profile pic">
                </div>
                <div class="mb-4">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input">
                      I agree to all Terms &amp; Conditions
                    <i class="input-helper"></i></label>
                  </div>
                </div>
                <div class="mt-3">
                  <a class="" href="#"><button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">SIGN UP</button></a>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  Already have an account? <a href="${pageContext.request.contextPath}/" class="text-primary">Login</a>
                </div>
              </form:form>
            </div>
          </div>
        </div>