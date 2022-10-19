const body = document.querySelector("body")
const heart = document.getElementById("heart")

setInterval(() => {
    heart.style.width = "6rem";
    body.style.backgroundColor = "rgb(240, 159, 159)";
    setTimeout(() => {
        heart.style.width = "10rem";
        body.style.backgroundColor = "rgb(241, 50, 50)";
    }, 500);
}, 1000);