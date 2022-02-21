const LS_KEY="users";

function saveUser(user){
    //load the old data from the LS
    let oldData = readUsers();
    //merge the data
    oldData.push(user);

    let val = JSON.stringify(oldData);//parse into a JSON string

    localStorage.setItem(LS_KEY,val);//send it to the local storage
}

function readUsers(){
    //get the values from the localstorage
    let data = localStorage.getItem(LS_KEY);
    if(!data){ //NOT users?
        return []; //creating the array the first registration
    }else{
        let list=JSON.parse(data);//parse tring back into obj
        return list;
    }
}