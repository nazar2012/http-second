import Loader from "../Loader/Loader"

const Button = ({ loading, onClick }) => {
  return loading ? (
    <div className="load">
      <Loader />
    </div>
  ) : (
    <button className="button" onClick={onClick}>
      Load more
    </button>
  )
}

export default Button