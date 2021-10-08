function validation(){
    var Fname = document.getElementById('Fname').value;
    var Lname = document.getElementById('Lname').value;
    var Email = document.getElementById('Email').value;
    var Mobile = document.getElementById('Mobile').value;

    if (Fname == "" ){
        document.getElementById('Firstname').innerHTML = " **First name can't be empty";
        return false;
    }
    if ((Fname.length <= 2 ) || (Fname.length >= 10 )){
        document.getElementById('Firstname').innerHTML = " **First name must be 2-10 characters";
        return false;
    }
    if (!isNaN(Fname)){
        document.getElementById('Firstname').innerHTML = " **First name can't have numbers";
        return false;
    }


    if (Lname == "" ){
        document.getElementById('Lastname').innerHTML = " **Last name can't be empty";
        return false;
    }
    if ((Lname.length <= 2 ) || (Fname.length >= 10 )){
        document.getElementById('Lastname').innerHTML = " **Last name must be 2-10 characters";
        return false;
    }
    if (!isNaN(Lname)){
        document.getElementById('Lastname').innerHTML = " **Last name can't have numbers";
        return false;
    }


    if (Email == "" ){
        document.getElementById('email').innerHTML = " **Email can't be empty";
        return false;
    }


    if (Mobile == "" ){
        document.getElementById('mobile').innerHTML = " **Mobile Number can't be empty";
        return false;
    }
    if (isNaN(Mobile)){
        document.getElementById('mobile').innerHTML = " **Mobile Number can't have alphabets";
        return false;
    }
    if (Mobile.length != 10){
        document.getElementById('mobile').innerHTML = " **Mobile Number must have 10 digits only";
        return false;
    }
}