document.addEventListener("DOMContentLoaded", function(){

let stepAb = 0;

const angryBirdData = [
  { img: "love6.jpg", text: "AYY MERI MONSTER🫦🫦🫦" },
  { img: "love7.jpg", text: "UFF MERA CAMERA😋" },
  { img: "love8.jpg", text: "CLEVAGE TERA HMMMM🫦👄👅 " },
  { img: "love9.jpg", text: "YE CUTE ELEPHANT KON 🌸" },
  { img: "love10.jpg", text: "ARE APSARA DIKH GAYI💕" }
];

const abButton = document.getElementById("abBtn");

function showNextAb() {
  const photoBox = document.getElementById("photoBoxAb");
  const photo = document.getElementById("photoAb");
  const quote = document.getElementById("quoteAb");

  photoBox.style.display = "block";
  photo.src = angryBirdData[stepAb].img;
  quote.innerText = angryBirdData[stepAb].text;

  stepAb++;

  if (stepAb < angryBirdData.length) {
    abButton.innerText = "Next Surprise 💌";
  } 
  else {
    window.location.href = "home.html";
  }
}

abButton.addEventListener("click", showNextAb);

});