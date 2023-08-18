const imageLoaded = (imgId) => {
  const image = document.querySelector(`${imgId}`);
  return image.complete && image.NaturalHeight !== 0;
};

export default imageLoaded;
