import { Component } from "react";
import "./index.css";
import SearchItems from "../SearchItems";

const suggestionsList = [
  { id: 1, suggestion: "Price of Ethereum" },
  { id: 2, suggestion: "Oculus Quest 2 specs" },
  { id: 3, suggestion: "Tesla Share Price" },
  { id: 4, suggestion: "Price of Ethereum today" },
  { id: 5, suggestion: "Latest trends in AI" },
  { id: 6, suggestion: "Latest trends in ML" },
];

class GoogleSearchSuggestions extends Component {
  state = {
    searchValue: "",
  };
  onSuggest = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };
  showValueInputBox = (value) => {
    this.setState({
      searchValue: value,
    });
  };
  render() {
    const { searchValue } = this.state;
    const filterItems = suggestionsList.filter((each) =>
      each.suggestion
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="Google logo"
        />
        <div className="search-card">
          <div className="input-card">
            <input
              value={searchValue}
              type="search"
              placeholder="Search"
              onChange={this.onSuggest}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
            />
          </div>
          <ul>
            {filterItems.length > 0 ? (
              filterItems.map((each) => {
                return (
                  <SearchItems
                    each={each}
                    key={each.id}
                    showValueInputBox={this.showValueInputBox}
                  />
                );
              })
            ) : (
              <p>No Resultes Found</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
export default GoogleSearchSuggestions;
