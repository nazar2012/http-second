import { Component } from "react";
import { IoIosSearch } from "react-icons/io";

class Searchbar extends Component {
    state = {
        quary: ""
    }

    handleChange = (e) => {
        this.setState({ quary: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.quary) {
            return
        }
        this.props.onSubmit(this.state.quary)
    }

    render() {
        const { quary } = this.state
        return (
            <header className="searchbar">
                <form onSubmit={this.handleSubmit} className="searchForm">
                    <button type="submit" className="searchForm-button">
                        <IoIosSearch size={25} />
                    </button>
                    <input
                        className="searchForm-input"
                        onChange={this.handleChange}
                        value={quary}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

export default Searchbar