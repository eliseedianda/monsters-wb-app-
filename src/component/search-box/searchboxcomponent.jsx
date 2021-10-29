import React from "react";
import "./search.style.css";

export const SearchBox = ({ placeholder, handlerValue }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handlerValue}
      />
    </div>
  );
};
