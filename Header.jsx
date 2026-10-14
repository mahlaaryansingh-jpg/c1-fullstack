
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        DEV@Deakin
      </Link>

      <input
        className="search-box"
        type="text"
        placeholder="Search..."
        aria-label="Search"
      />

      <Link to="/post" className="nav-button">
        Post
      </Link>

      <Link to="/login" className="nav-button login-link">
        Login
      </Link>
    </header>
  );
}

export default Header;
