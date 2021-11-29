
function validateForm(e){
	e.preventDefault();
    
    var formName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    
    var formEmail = /^\S+@\S+$/;

    var formPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/;

    var formPassword = /^[A-Za-z]\w{5,10}$/;

    
    var name = document.getElementById('name').value.trim();

    var email = document.getElementById('email').value.toLowerCase().trim();

    var phone = document.getElementById('phone').value.trim();

    var password = document.getElementById('password').value.trim();


	if(!formName.test(name)){
    document.getElementById('nameErr').innerHTML = 'Please enter a valid first and last name.';
    document.getElementById('name').focus();
    }

    if(!formEmail.test(email)){
        document.getElementById('emailErr').innerHTML = 'Please enter a valid email address.';
        document.getElementById('email').focus();
    }

       
    if (!formPhone.test(phone)){
        var phone = document.getElementById("phone");
        
        
        if(phone.value.length <= 10 && phone.value.length >= 10){
            alert("success");
            
        }
        else{
            document.getElementById('phoneErr').innerHTML = 'Minimum 10 numbers in  +XX XXXXX XXXXX format.';
            
        }
        document.getElementById('phone').focus();
        
    }

    if(!formPassword.test(password)){

        var password = document.getElementById("password");

        if(password.value.length <= 5 && password.value.length >= 10){
            alert("success");
            
        }
        else{
            document.getElementById('passErr').innerHTML = 'Password should be minimum 6 characters in length.';
            
        }
        document.getElementById('password').focus();

    }

    
}

 