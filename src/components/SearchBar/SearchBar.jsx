import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      toast.error("Please enter a search query!");
      return;
    }

    onSubmit(query.trim());
      setQuery(""); 
      
      
  };

  return (
    <header>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;