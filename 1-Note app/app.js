<<<<<<< HEAD
let notesContainer = document.querySelector(".inp")
let createBtn = document.querySelector(".btn");

function saveData() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}
function shownotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
function attach() {
    let notes = document.querySelectorAll(".inpbox");
    notes.forEach(nt => {
        nt.onkeyup = function () {
            saveData();

        }
    })
}
shownotes()
attach();

function showIpt() {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");

    inputbox.className = "inpbox";
    inputbox.setAttribute("contenteditable", "true")
    img.src = "image/delete.png";

    inputbox.appendChild(img);
    notesContainer.appendChild(inputbox);
    saveData();


}

createBtn.addEventListener("click", () => {
    showIpt();
    attach();


})


notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    }

=======
let notesContainer = document.querySelector(".inp")
let createBtn = document.querySelector(".btn");

function saveData() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}
function shownotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
function attach() {
    let notes = document.querySelectorAll(".inpbox");
    notes.forEach(nt => {
        nt.onkeyup = function () {
            saveData();

        }
    })
}
shownotes()
attach();

function showIpt() {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");

    inputbox.className = "inpbox";
    inputbox.setAttribute("contenteditable", "true")
    img.src = "image/delete.png";

    inputbox.appendChild(img);
    notesContainer.appendChild(inputbox);
    saveData();


}

createBtn.addEventListener("click", () => {
    showIpt();
    attach();


})


notesContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    }

>>>>>>> 86e9b5362d869c30b643c94ae05d11f9079fa97f
})