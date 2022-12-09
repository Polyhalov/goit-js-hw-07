import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery')
console.log(list)
const markup = galleryItems.map(item => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}" />
        </a>
    </div>`)
    .join(" ")
// console.log(markup)
list.insertAdjacentHTML('beforeend', markup);
list.addEventListener('click', onclick)
function onclick(event) {
    event.preventDefault()
    if (!event.target.hasAttribute("data-source")) {
       return
    }
    const bigImg = event.target.getAttribute('data-source')
    const instance = basicLightbox.create(`<img src="${bigImg}">`)
    instance.show()
}
