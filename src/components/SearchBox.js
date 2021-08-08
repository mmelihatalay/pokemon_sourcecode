const SearchBox = ({ onSearchPokemon }) => {
  return (
    <div className="container d-flex searchBox">
      <input
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            onSearchPokemon(event.target.value);
          }
        }}
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        id="input"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBox;
