import css from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  return (
    <div className={css.searchBox}>
          <div className={css.wrapper}>
        <label htmlFor="searchContact">Find contact by name:</label>
        <input
          onChange={onSearch}
          type="text"
          id="searchContact"
          placeholder="type name"
        />
      </div>
    </div>
  );
};

export default SearchBox;
