const article = document.querySelectorAll('article');
const popup = document.createElement('div');
const imgInsidePopup = document.createElement('img');
const closeButton = document.createElement('button');


popup.classList.add('popup');
closeButton.textContent = 'X';

popup.appendChild(closeButton);
popup.appendChild(imgInsidePopup);

document.body.appendChild(popup);

closeButton.addEventListener('click', () => {
    popup.classList.remove('active');
})

article.forEach((art) => {
    art.addEventListener('click', () => {

        const imgInsideArticle = art.querySelector('img');
        imgInsidePopup.src = imgInsideArticle.src;
        popup.classList.add('active');

    })
})

/* 
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0;
    pointer-events: none;
    visibility: hidden;
}

.popup img {
    aspect-ratio: 1 / 1;
    max-height: initial;
    max-width: 50%;
}

.active {
    pointer-events: all;
    visibility: visible;
} 
*/