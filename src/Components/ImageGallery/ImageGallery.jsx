import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import Loader from "../Loader/Loader"
import Button from "../Button/Button"

const ImageGallery = ({ images, onImageClick, loading, onLoadMore }) => {
  return (
    <>
      <ul className="imageGallery">
        {images.map(img => (
          <ImageGalleryItem
            key={img.id}
            img={img}
            onClick={onImageClick}
          />
        ))}
      </ul>

      {images.length > 0 && (
        <Button loading={loading} onClick={onLoadMore} />
      )}
    </>
  )
}

export default ImageGallery