import React from "react";

class TodoSearch extends React.Component {
  constructor() {
    super();

    this.state = {
      query: ""
    };
  }

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //function to update state in app.js
    this.props.searchQuery(this.state.query);
    this.setState({
      query: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="searchForm">
        <input
          type="text"
          name="query"
          placeholder="Search Todo"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default TodoSearch;
