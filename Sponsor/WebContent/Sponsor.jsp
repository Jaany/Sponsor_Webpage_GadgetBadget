<%@page import="com.Sponsor"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<style>
.logo{
   position: absolute;
   top: 15px;
   left: 25px;
   width: 180px;
   height: 80px;
}

.header{
	     background:black;
		 position: relative;
	width:1368px;
	height: 100px;
  margin-top:-10px;
	margin-left:-10px

		}

#nav{
	position: absolute;
  overflow: hidden;
  background-color: #333;
  right: 8px;
	background-color:black;
}
#nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 30px 25px;
  text-decoration: none;
  font-size: 17px;
}


a:hover{
		background-color:#555;
		color:white;
		cursor:pointer;
		border-style:2px solid red;
		height:20px;
	}

	</style>
	
<meta charset="ISO-8859-1">
<title>Sponsor Management</title>
<link rel="stylesheet" href="views/bootstrap.min.css">
<script src="component/jquery-3.2.1.min.js"></script>
<script src="component/sponsor.js"></script>
</head>

<body>
<div class="header">
<img src="img/GadgetBadget (4).jpg" class ="logo" ">
<div id="nav">
	
	<a href="projects.jsp" id="link1">PROJECTS</a>
	<a href="Researchers.jsp" id="link1">RESEARCHER</a>
	<a href="Order.jsp" id="link1">BUY</a>
	<a href="Sponsor.jsp" id="link1">SPONSORS</a>
	<a href="Home.jsp" id="link1">HOME</a>
	
	
</div>
</div><br>
<h1 style="color:blue; margin-left:500px;">Welcom Sponsors!</h1><br><br>
<div class="container"><div class="row"><div class="col-6">

<form id="formItem" name="formItem" method="post">

 First Name:<input id="f_name" name="f_name" type="text" class="form-control form-control-sm"><br>
 
 Last Name:<input id="l_name" name="l_name" type="text" class="form-control form-control-sm"><br> 
 
 Company:<input id="company" name="company" type="text" class="form-control form-control-sm"><br> 
 
 Job:<input id="job" name="job" type="text" class="form-control form-control-sm"><br>
 
 Phone Number:<input id="phone" name="phone" type="tel" class="form-control form-control-sm"><br> 
 
 E-mail:<input id="mail" name="mail" type="email" class="form-control form-control-sm"><br> 
 
 City:<input id="city" name="city" type="text" class="form-control form-control-sm"><br>
 
 <input id="btnSave" name="btnSave" type="button" value="Save" class="btn btn-primary">
 
 <input type="hidden" id="hidIDSave" name="hidIDSave" value="">
 
</form>

<div id="alertSuccess" class="alert alert-success"></div>
<div id="alertError" class="alert alert-danger"></div>
<br>


<div id="divItemsGrid">
 <%
 Sponsor s = new Sponsor();
 out.print(s.readSponsorDetails());
 %>
</div>
<br>

</div> </div> </div>
</body>
</html>
<!--blank space  -->
	<div style="height:60px">
	</div>
</body>
</html>