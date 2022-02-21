//create the constructor ES2015 / class
class User{

    //this are the parameters
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email = email;
        this.password = password;
        this.fname = first;
        this.lname = last;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.payment = payment;
        this.color = color;
    }
}

//this is parem  --->
function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid= true;
    //we need to rest the original appearance of the inputs
    //by removing the class alert-error
    $("input").removeClass("alert-error");
    //validations
    if(user.email.length==0){
        //if we get here it means that the email is empty
        valid = false;
        $("#txtEmail").addClass("alert-error");
        console.log("Missing email");
    }
    if(user.password.length==0){
        valid = false;
        $("#txtPassword").addClass("alert-error");
        console.log("Missing password");
    }
    //add the validation for first name and last naem
    if(user.fname.length==0){
        valid = false;
        $("#txtFirst").addClass("alert-error");
        console.log("Missing first name");
    }
    if(user.lname.length == 0){
        valid = false;
        $("#txtLast").addClass("alert-error");
        console.log("Missing last name");
    }
    //add the validation for first and last name
    return valid;
}

function registerUser(){
    let email = $("#txtEmail").val(); //*check your id on the html
    let password = $("#txtPassword").val();
    let first = $("#txtFirst").val();
    let last = $("#txtLast").val();
    let age = $("#txtAge").val();
    let address = $("#txtAddress").val();
    let phone = $("#txtPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#txtColor").val();

    let user = new User(email, password, first, last, age, address, phone, payment, color);

    //validate the user
    if(isValid(user)){
        saveUser(user); //fn in storemanager.js
    }
    clearForm();
}

function clearForm(){
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtFirst").val("");
    $("#txtLast").val("");
    $("#txtAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#selPayment").val("");
    $("#txtColor").val("");
}

console.log("Register");

function init(){
    console.log("Init Register");
    //hook events
    $("#btnRegister").click(registerUser);
}
window.onload = init;