

function stmp() {
let date = new Date;
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds()
let content = document.getElementById("timeWindow");

content.innerHTML = `${hour}:${minute}:${second}`;

}
