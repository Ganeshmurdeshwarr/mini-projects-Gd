let inputbox = document.querySelector(".inpt");
let calbtn = document.querySelector(".btn");
let result = document.querySelector(".parentpara");



function calYear() {
    let dob = new Date(inputbox.value);

    let d1 = dob.getDate();
    let m1 = dob.getMonth() + 1;
    let y1 = dob.getFullYear();

    let currentDate = new Date();

    let d2 = currentDate.getDate();
    let m2 = currentDate.getMonth() + 1;
    let y2 = currentDate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;


    if (m2 >= m1) {
        m3 = m2 - m1
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }
     else
      {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1
    }

    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `you are <span> ${y3}</span> years <span>${m3}</span> months <span>${d3}</span> days old `
}

function getDaysInMonth(year ,month) {
    return new Date(year, month, 0).getDate();
}
calbtn.addEventListener("click", () => {
    calYear()
});