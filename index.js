const text = document.querySelector('.text');
const email = document.querySelector('.email');
const phone = document.querySelector('.tel');
const button = document.querySelector('#btn-addItem')
const table = document.querySelector('.table')
const newContainer = document.createElement('container');


button.addEventListener('click',checkingInput());

function checkingInput(){
    if(text.value=="" && email.value=="" && phone.value==""){
        
    }else{
        const newRow = document.createElement('tr');
        newRow.id="tr";
        newRow.style.display="flex";
        newRow.style.justifyContent="space-around";

        table.appendChild(newRow);
        const newtd1 = document.createElement("td");

        newRow.appendChild(newtd1);
        newtd1.id = "td1"
        console.log(newtd1)

        const newtd2 = document.createElement("td");
        newRow.appendChild(newtd2);
        newtd2.id = "td2"

        const newtd3 = document.createElement("td");
        newRow.appendChild(newtd3);
        newtd3.id = "td3"

        console.log(newRow);

        newtd1.innerText = text.value;
        newtd2.innerText = email.value;
        newtd3.innerText = phone.value;
         
       const button2 = document.createElement("button");
       button2.className = "button2";
       button2.innerText = "Delete";
       newRow.appendChild(button2);
       text.value = "";
       email.value = "";
       phone.value = "";

    }
}

table.addEventListener('click', function deleteTask(value){
    if(value.target.classList.contains("button2")){
        value.target.parentNode.remove();
    }
})

    
}