api_url = "http://api.quotable.io/random";

let newbtn = document.querySelector(".btn1")
let quote = document.querySelector(".qut")
let author = document.querySelector(".author")

async function getquote() {
    const response = await fetch(api_url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
newbtn.addEventListener("click", getquote);  
getquote();


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML ,"Tweet Window","width=500 ,height=400")
};