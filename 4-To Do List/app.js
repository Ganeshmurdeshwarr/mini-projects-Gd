let inputBox = document.getElementById("inputbox");
let listul = document.getElementById("list");

function addtask(){
if(inputBox.value === ""){
    alert("You must write the task")
    
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listul.appendChild(li);
    let span =document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span)
}
inputBox.value = "";
savedata();
}
listul.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();

    }
}, false);

function savedata(){
    localStorage.setItem("data",listul.innerHTML)
}


function showlist(){
    listul.innerHTML = localStorage.getItem("data");
}
showlist();