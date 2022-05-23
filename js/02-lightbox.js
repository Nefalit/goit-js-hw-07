import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

function renderGallaryList(array) {
  const listImgMarkup = array
    .map(({ preview, original, description } = {}) => {
      return `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
  galleryEl.insertAdjacentHTML("beforeend", listImgMarkup);
}

renderGallaryList(galleryItems);

galleryEl.addEventListener("click", (ev) => {
  ev.preventDefault();
});

let lightbox = new SimpleLightbox(".gallery a", {
  overlay: true,
  captionsData: "alt",
  captionDelay: 250,
  fadeSpeed: 500,
});

console.log(galleryItems);
