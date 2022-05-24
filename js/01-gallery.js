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

let imgSrc = {};
galleryEl.addEventListener("click", (ev) => {
  ev.preventDefault();
  const currentImg = ev.target;
  if (currentImg.nodeName !== "IMG") {
    return;
  }
  imgSrc = basicLightbox.create(
    `<div class="modal">
    <img src="${ev.target.dataset.source}" width="800" height="600"></img>
    </div>`
  );
  imgSrc.show();
  document.addEventListener("keydown", closeImg);
});

function closeImg(ev) {
  if (ev.code === "Escape" && imgSrc.visible()) {
    imgSrc.close();
  }
  document.removeEventListener("keydown", closeImg);
}

console.log(galleryItems);
