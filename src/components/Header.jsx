import PropTypes from "prop-types";

const Header = ({ children }) => {
  return (
    <div className="header">
      <div>
        <h1>Tarot Guide</h1>
        <a href="#">About</a>
      </div>
      <div>{children}</div>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.array,
};

export default Header;
