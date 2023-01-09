const monthEl = document.querySelector(".date h1")
const fullDateEl = document.querySelector(".date p")

const monthIndx = new Date().getMonth()

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

monthEl.innerText = months[monthIndx]
fullDateEl.innerText = new Date().toDateString();
