import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const imgsMarkup = galleryItems.map(({preview, original, description}) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');
gallery.insertAdjacentHTML('beforeend', imgsMarkup);
gallery.addEventListener('click', e => e.preventDefault());
let galleryLightbox = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});
