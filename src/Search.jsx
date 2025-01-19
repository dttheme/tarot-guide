import PropTypes from "prop-types";

const Search = ({ setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="search">
      <label htmlFor="search">Search: </label>
      <input
        name="search"
        type="text"
        onChange={handleChange}
        placeholder="'Fool', 'minor', 'swords', etc"
      />
    </div>
  );
};

Search.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Search;
