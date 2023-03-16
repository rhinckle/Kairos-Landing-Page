const tiles = document.querySelectorAll('.tile');

tiles.forEach((tile) => {
  const img = tile.querySelector('img');
  const aspectRatio = img.naturalWidth / img.naturalHeight;
  tile.style.setProperty('--aspect-ratio', aspectRatio);
});
