import css from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  return (
    <div className={css.searchBox}>
      <label htmlFor="searchContact">Find contact by name:</label>
      <input
        onChange={onSearch}
        type="text"
        id="searchContact"
        placeholder="type name"
      />
    </div>
  );
};

export default SearchBox;
