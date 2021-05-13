
$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
});





$(document).on("click", "#btnSave", function(event)
{
// Clear alerts---------------------
 $("#alertSuccess").text("");
 $("#alertSuccess").hide();
 $("#alertError").text("");
 $("#alertError").hide();
// Form validation-------------------
var status = validateItemForm();
if (status != true)
 {
 $("#alertError").text(status);
 $("#alertError").show();
 return;
 }
// If valid------------------------
var type = ($("#hidIDSave").val() == "") ? "POST" : "PUT";
 $.ajax(
 {
 url : "SponsorAPI",
 type : type,
 data : $("#formItem").serialize(),
 dataType : "text",
 complete : function(response, status)
 {
 onItemSaveComplete(response.responseText, status);
 }
 });
});





function onItemSaveComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully saved.");
 $("#alertSuccess").show();
 $("#divItemsGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while saving.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while saving..");
 $("#alertError").show();
 } 
  $("#hidIDSave").val("");
 $("#formItem")[0].reset();
}





$(document).on("click", ".btnUpdate", function(event)
{
$("#hidIDSave").val($(this).data("buyer_id"));
 $("#f_name").val($(this).closest("tr").find('td:eq(1)').text());
 $("#l_name").val($(this).closest("tr").find('td:eq(2)').text());
 $("#company").val($(this).closest("tr").find('td:eq(3)').text());
 $("#job").val($(this).closest("tr").find('td:eq(4)').text());
 $("#phone").val($(this).closest("tr").find('td:eq(5)').text());
 $("#mail").val($(this).closest("tr").find('td:eq(6)').text());
 $("#city").val($(this).closest("tr").find('td:eq(7)').text());
});


$(document).on("click", ".btnRemove", function(event)
{
 $.ajax(
 {
 url : "SponsorAPI",
 type : "DELETE",
 data : "buyer_id=" + $(this).data("buyer_id"),
 dataType : "text",
 complete : function(response, status)
 {
 onItemDeleteComplete(response.responseText, status);
 }
 });
});



function onItemDeleteComplete(response, status)
{
if (status == "success")
 {
 var resultSet = JSON.parse(response);
 if (resultSet.status.trim() == "success")
 {
 $("#alertSuccess").text("Successfully deleted.");
 $("#alertSuccess").show();
 $("#divItemsGrid").html(resultSet.data);
 } else if (resultSet.status.trim() == "error")
 {
 $("#alertError").text(resultSet.data);
 $("#alertError").show();
 }
 } else if (status == "error")
 {
 $("#alertError").text("Error while deleting.");
 $("#alertError").show();
 } else
 {
 $("#alertError").text("Unknown error while deleting..");
 $("#alertError").show();
 }
  
}
 
 
 
 
//CLIENT-MODEL================================================================
function validateItemForm() { 

	//First Name
	if ($("#f_name").val().trim() == "") {
 
		return "Insert First Name."; 
	} 
	
	//Last Name
	if ($("#l_name").val().trim() == "") {
 
		return "Insert Last Name."; 
	} 

	
	//company-------------------------------
	if ($("#company").val().trim() == "") {
 
		return "Insert Company Name."; 
	} 
	
	
	//job-------------------------------
	if ($("#job").val().trim() == "") {
 
		return "Insert Job."; 
	} 
	
	
	
	//phone-------------------------------
	if ($("#phone").val().trim() == "") {
 
		return "Insert Phone Number."; 
	} 
	
	
	//mail-------------------------------
	if ($("#mail").val().trim() == "") {
 
		return "Insert E-mail."; 
	} 
	
	
	//city-------------------------------
	if ($("#city").val().trim() == "") {
 
		return "Insert City."; 
	} 
	
	 
}

