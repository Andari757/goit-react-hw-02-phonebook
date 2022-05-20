import { Component } from "react";
export default class Filter extends Component {
    state = {
        filter: ""
    }
    handleChange = (e) => {

    }
    getFilteredBooks() {
        const { filter, items } = this.state;
        if (!filter) {
            return items;
        }
        const filterText = filter.toLowerCase();
        const filteredBooks = items.filter(({ title }) => {
            const result = title.toLowerCase().includes(filterText);
            return result;
        });
        return filteredBooks;
    }
    render() {
        return (<div>
            <label htmlFor="filter">Find contacts by name</label>
            <br />
            <input onChange={this.handleChange} type="text" name="filter" id="filter" value={this.state.filter} />
        </div>)
    }
}