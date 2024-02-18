const api = "https://jsonplaceholder.typicode.com/users";

async function getUsers(type){
    try{
        let response = await fetch(api);
        let data = await response.json();
        
        cycleResp(data, type.innerText);
         

    }catch(error){
        console.log(error);
    }

}

function cycleResp(data, type){
    document.querySelector('.container ul').innerHTML = "";
    data.forEach(element => {
        createTemplate(element, type);
    });
}

function createTemplate(element, type){
    

    let li = document.createElement('li');
    if(type === "Users"){
        li.innerText = element.username;
    }
    else if (type === "E-mail"){
        li.innerText = element.email;
    }
    else if(type === "Names"){
        li.innerText = element.name;
    }
    document.querySelector('.container ul').appendChild(li);
}