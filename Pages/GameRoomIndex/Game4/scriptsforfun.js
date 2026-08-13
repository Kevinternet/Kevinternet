function createTile(src) {
  const img = document.createElement("img");
  img.src = src;
  img.classList.add("tile");
  return img;
}

function createRow(count) {
  const grid = document.getElementById("gameGrid");

  for (let i = 0; i < count; i++) {
    const tile = createTile("imagesfourfun/ground_pixel_draft.png");
    grid.appendChild(tile);
  }
}

createRow(15); // creates 8 tiles horizontally

