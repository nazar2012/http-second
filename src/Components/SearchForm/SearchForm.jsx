import { Component } from "react";

class SearchForm extends Component {
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
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={quary} type="text" placeholder="what you search" />
                <button type="submit">search</button>
            </form>
        )
    }
}

export default SearchForm