function login(){
    console.log("Executing login function...");
    //basic: get the values from the input

    // let user = document.getElementById("txtUsername").value;
    // let password = document.getElementById("txtPassword").value;

    let username = $("txtUsername").val();
    let password = $("txtPassword").val();

    //medium: display the values in the console

    console.log(username, password);

    //high: compare the values with the email and password in the localstorage

    let users = readUsers();

    console.log(users);

    for(let i = 0; i<users.length; i++){
        if(username===users[i].email && password === users[i].password){
            console.log("I found it!");
            flag = true;
            window.location="home.html";
        }
    }

    if(!flag){
        console.log("Invalid credentials");
    }

}

function init(){
    console.log("Login script");
    //hook events
    $("#btnLogin").click(login);
}

window.onload=init;