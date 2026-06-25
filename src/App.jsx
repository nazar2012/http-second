import './App.css'
import { Component } from 'react'
import Searchbar from './Components/Searchbar/Searchbar'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import Modal from './Components/Modal/Modal'
import { fetchImages } from './api'
import { InfinitySpin } from "react-loader-spinner"

class App extends Component {
  state = {
    quary: "",
    images: [],
    page: 1,
    loading: false,
    largeImageURL: null
  }

  openModal = (url) => {
    this.setState({ largeImageURL: url })
  }

  closeModal = () => {
    this.setState({ largeImageURL: null })
  }

  handleKeyDown = (e) => {
    if (e.key === "Escape") this.closeModal()
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  componentDidUpdate(_, prevState) {
    if (prevState.quary !== this.state.quary) {
      this.loadImages()
    }
  }

  loadImages = () => {
    const { quary, page } = this.state
    if (!quary) return

    this.setState({ loading: true })

    setTimeout(() => {
      fetchImages(quary, page)
        .then(res => {
          this.setState(prev => ({
            images: [...prev.images, ...res.hits]
          }))
        })
        .finally(() => this.setState({ loading: false }))
    }, 2000)
  }

  handleSearch = (quary) => {
    this.setState({
      quary,
      images: [],
      page: 1,
      loading: true
    })
  }

  loadMore = () => {
    this.setState(
      prev => ({ page: prev.page + 1 }),
      this.loadImages
    )
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />

        {this.state.loading && this.state.images.length === 0 && (
          <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
            <InfinitySpin width="120" color="#3f51b5" />
          </div>
        )}

        <ImageGallery
          images={this.state.images}
          onImageClick={this.openModal}
          loading={this.state.loading}
          onLoadMore={this.loadMore}
        />

        {this.state.largeImageURL && (
          <Modal
            url={this.state.largeImageURL}
            onClose={this.closeModal}
          />
        )}
      </>
    )
  }
}

export default App