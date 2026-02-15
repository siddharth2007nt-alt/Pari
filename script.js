let step = 0;

const data = [
  { img: "love1.jpg", text: "YE THO TERA FAV PHOTO NA❤️" },
  { img: "love2.jpg", text: "AWWW CUTIES✨" },
  { img: "love3.jpg", text: "BACHHA WITH MOMMY 💖" },
  { img: "love4.jpg", text: "PEECHE UNCLE KO DEKHO😆 " },
  { img: "love5.jpg", text: "OMG SO GOOD YE PHOTO WOWOWOOWWOWOWO💕" }
];

function showNext() {

  const photoBox = document.getElementById("photoBox");
  const photo = document.getElementById("photo");
  const quote = document.getElementById("quote");
  const button = document.getElementById("nextBtn");

  if (step < data.length) {

    photoBox.style.display = "block";
    photo.src = data[step].img;
    quote.innerText = data[step].text;

    step++;

    if (step === 1) {
      button.innerText = "Next Surprise 💌";
    }

  } else {
    button.innerText = "Go Home 🏠";
    button.onclick = function() {
      window.location.href = "home.html";
    };
  }
}