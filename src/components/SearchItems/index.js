import "./index.css";

const SearchItems = (props) => {
  const { each, showValueInputBox } = props;
  const { suggestion } = each;
  const displayValue = () => {
    showValueInputBox(suggestion);
  };
  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={displayValue}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="search arrow"
        />
      </button>
    </li>
  );
};
export default SearchItems;
