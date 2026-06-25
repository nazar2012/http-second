const Modal = ({ url, onClose }) => {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={url} alt="" />
      </div>
    </div>
  )
}

export default Modal