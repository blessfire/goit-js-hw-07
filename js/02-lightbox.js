import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});