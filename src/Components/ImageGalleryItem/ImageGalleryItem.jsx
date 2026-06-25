const ImageGalleryItem = ({ img, onClick }) => {
  return (
    <li className="imageGalleryItem">
      <img
        className="imageGalleryItem-image"
        src={img.webformatURL}
        alt={img.tags}
        onClick={() => onClick(img.largeImageURL)}
      />
    </li>
  )
}

export default ImageGalleryItem