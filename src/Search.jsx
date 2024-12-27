import PropTypes from "prop-types";

const Search = ({
  //   searchTerm,
  //   filter,
  //   sort,
  setSearchTerm,
  //   setFilter,
  //   setSort,
}) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="search">
      {/* search */}
      <label htmlFor="search">Search: </label>
      <input
        name="search"
        type="text"
        onChange={handleChange}
        placeholder="'Fool', 'minor', 'swords', etc"
      />
      {/* filter */}
      {/* <select name="" id=""></select> */}
      {/* sort */}
      {/* <select name="" id=""></select> */}
    </div>
  );
};

Search.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default Search;
