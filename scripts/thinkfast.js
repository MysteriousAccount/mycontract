const popup = document.querySelector('.popup');
const x = document.querySelector('.popup-content label');

var params = document.body.getElementsByTagName('script');
query = params[0].classList;
var correctAnswer = query[0];
var next_page = query[1];

window.addEventListener('load', () => {
    spawnImage();
    setTimeout(() => {
        popup.classList.add('showPopup');
        popup.childNodes[1].classList.add('showPopup');
    }, 4000);
})

x.addEventListener('click', () => {
    popup.classList.remove('showPopup');
    popup.childNodes[1].classList.remove('showPopup');
    window.location.href = "../index.html";
})

function spawnImage() {
    const img = document.createElement("img");
    img.src = "../thumbnails/twink.jpg"; // Replace with your image URL
    img.classList.add("dot-image");
    img.style.width="300px"
    img.style.height="200px"

    // Random position within the visible window
    const maxX = window.innerWidth - 400;  // Prevent overflow
    const maxY = window.innerHeight - 400;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    img.style.left = `${randomX}px`;
    img.style.top = `${randomY}px`;

    // Add click event to alert message
    img.addEventListener("click", function () {
        alert("oof! mamamia!");
        window.location.href = '../pages/' + next_page + ".html";
    });

    document.body.appendChild(img);
}