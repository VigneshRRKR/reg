
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}

    $(document).ready(function(){
    $("#btnSubmit").click(function(){

    var name = $("#txtName").val();
    var email = $("#myEmail").val();
    var password = $("#pwd").val();
    var confirmpassword = $("#cpwd").val();
    var gender = $('input[name="flexRadioDefault"]:checked').val();
    var phonenumber = $("#phonenumber").val();
	var NumberRegex = /^[0-9]*$/;

        	if ($.trim(name) == "") {
                alert("Please enter Name!");
            }

            else if ($.trim(email) == "") {
                alert("Please enter email!");
            }

             else if(IsEmail(email)==false){
          		alert("Please enter valid email!");
        	}

        	else if ($.trim(phonenumber) == "") {
          		alert("Please enter valid phone number!");
        	}

        	else if(phonenumber.length != 10){
          		alert("Please enter valid phone number!");
        	}

        	else if(phonenumber=="0000000000"){
          		alert("Please enter valid phone number!");
        	}

        	else if(NumberRegex.test(phonenumber) == false){
          		alert("Please enter valid phone number!");
        	}	

            else if ($.trim(password) == "") {
                alert("Please enter password!");
            }

            else if(password.length != 8){
          		alert("Please enter min 8 characters of password!");
        	}

            else if ($.trim(confirmpassword) == "") {
                alert("Please enter confirm password!");
            }

            else if (password != confirmpassword){
                alert("Password and confirm password are not equal!");
            }

            else if ($.trim(gender) == ""){
                alert("Please select your gender!");
            }

            else
                alert("Your name is " +name + ",Your email is "+ email + ",Your phone number" + phonenumber + ",Your password is "+ password + ",Your are a - " + gender);
    });
});