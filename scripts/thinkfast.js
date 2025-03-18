const popup = document.querySelector('.popup');
const x = document.querySelector('.popup-content label');

window.addEventListener('load', () => {
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