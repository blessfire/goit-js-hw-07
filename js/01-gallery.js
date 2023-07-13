import { galleryItems } from './gallery-items.js';
// Change code below this line
const ul = document.querySelector('.gallery');

const markup = galleryItems
    .map(elem => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${elem.original}">
    <img class="gallery__image" src="${elem.preview}"
    data-source="${elem.original}" alt="${elem.description}"/></a>
    </li>`
    })
    .join('')

ul.insertAdjacentHTML('afterbegin', markup);
ul.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    const isImgClick = evt.target.classList.contains('gallery__image');
    const sourceOrigImg = evt.target.dataset.source;
    if (!isImgClick) {
        return;
    };

    const instance = basicLightbox.create(`<img width="1280" src="${sourceOrigImg}">`);

    instance.show();

    ul.addEventListener('keydown', closeEscape);

    function closeEscape(evt) {
        if (evt.code === 'Escape') {
            instance.close();
            ul.removeEventListener('keydown', closeEscape);
        }
    }
}
