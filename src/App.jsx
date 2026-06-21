import './App.css'
import { Component } from 'react'
import SearchForm from './Components/SearchForm/SearchForm'
import { fetchImages } from './api'

class App extends Component {
  state = {
    quary: "",
    images: [],
    page: 1
  }

  componentDidUpdate(_, prevState) {
    if (prevState.quary !== this.state.quary) {
      this.loadImages()
    }
  }

  loadImages = () => {
    const { quary, page } = this.state
    if (!quary) {
      return
    }
    fetchImages(quary, page).then(res => {
      this.setState({
        images: res.hits
      })
    })
  }

  handleSearch = (quary) => {
    this.setState({
      quary: quary,
      images: [],
      page: 1
    })
  }
  render() {
    return (
      <>
        <SearchForm onSubmit={this.handleSearch} />
        <ul>
          {this.state.images.map(img => {
            return (
              <li key={img.id}>
                <img src={img.webformatURL} alt={img.tags} />
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default App
