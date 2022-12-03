import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl  = document.querySelector(".gallery"); 

const makeGalleryItemsMarkup = ({preview, original, description}) => { 
    return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
}

const makeGalleryItems = galleryItems.map(makeGalleryItemsMarkup).join("");

galleryEl.insertAdjacentHTML("beforeend", makeGalleryItems);

const lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });
  