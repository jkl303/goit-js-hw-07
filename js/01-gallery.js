import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const imgsMarkup = galleryItems.map(({preview, original, description}) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
gallery.insertAdjacentHTML('beforeend', imgsMarkup);
gallery.addEventListener('click', e => e.preventDefault());
gallery.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(`
		<img src="${e.target.dataset.source}">
	`);
    instance.show();
    function onBoard(e) {
      if (e.code === "Escape") {
        instance.close();
      }
    }
      if (document.querySelector('.basicLightbox')) {
        document.addEventListener("keydown", onBoard);
      } else {
        document.removeEventListener("keydown", onBoard);
      }
    }
  }
