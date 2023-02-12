import { useState } from "react";

const Navbar = ({ onClickSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="navbar">
      <div className="navbar__logo">MovieMania</div>
      <div className="navbar__search">
        <input
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" onClick={() => onClickSearch(searchQuery)}>
          Search
        </button>
      </div>
    </div>
  );
};
// <i className="navbar__search__icon fa-sharp fa-solid fa-magnifying-glass"></i>

export default Navbar;
