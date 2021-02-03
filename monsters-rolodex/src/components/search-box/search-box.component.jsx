import React from 'react';

import "./search-box.styles.css";

// here, we are using a functional component – it doesnt have access to state or lifecycle methods

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
      className="search"
      type="search" 
      placeholder={placeholder} 
      onChange={handleChange}
    />
)