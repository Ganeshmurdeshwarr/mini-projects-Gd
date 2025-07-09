let addBtn = document.querySelector(".addBtn");
let input = document.querySelector("#input");
let taskContainer = document.querySelector(".taskContainer");
let API = "https://686a11fc2af1d945cea31e32.mockapi.io/API/v1/todos";

function addTask() {}

addBtn.addEventListener("click", postData);

async function fetchData() {
  let response = await fetch(API);
  let data = await response.json();

  if (data) {
    taskContainer.innerHTML = "";
    data.forEach((obj) => {
      let div = document.createElement("div");
      div.className = "task";
      div.innerHTML = ` <p class="para">${obj.text}</p>
        <div class="btns">
        <input id="editInput" type="text" placeholder="Enter you task" value='${obj.text}'>
        <button class="dltBtn">Delete </button>
        <button class="edtBtn">Edit</button>
        <button class="saveBtn">Save</button>
        </div>`;

      let deleteBtn = div.querySelector(".dltBtn");
      let edtBtn = div.querySelector(".edtBtn");
      let saveBtn = div.querySelector(".saveBtn");
      let para = div.querySelector(".para");
      let editInput = div.querySelector("#editInput");


      deleteBtn.addEventListener("click", function () {
        deletData(obj.id);
      });


      edtBtn.addEventListener("click", function () {
       
        edtBtn.style.display = 'none';
        saveBtn.style.display = 'block';
        editInput.style.display = 'block';
        para.style.display = 'none';
      });


      saveBtn.addEventListener("click", async function () {
        let editValue  = editInput.value
       let response= await updateData(obj.id,editValue)
       if(response.status===200){
        fetchData()
           edtBtn.style.display = 'block';
           saveBtn.style.display = 'none';
           editInput.style.display = 'none';
           para.style.display = 'block';
       }

      });


      taskContainer.append(div);
    });
  }
}

async function postData() {
    let value = input.value;
    if (!value) return;
    let objData = {
        text: value.trim(),
    };
    
    let response = await fetch(API, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
});
  if (response.status === 201) {
      input.value= ''
      fetchData();
    }
}

async function updateData(id,value) {
   
    if (!value) return;
    let objData = {
        text: value.trim(),
    };
    
    let response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
});
  return response;
}

async function deletData(id) {
    let response = await fetch(`${API}/${id}`, {
        method: "DELETE",
    });
  if (response.status === 200) {
    fetchData();
  }
}

fetchData();