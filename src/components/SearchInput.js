import React from "react";

export default function SearchInput({onChange, onBlur, value, onFocus, name}) {
  return (
    <div className="search-container">
      <input
        className="text-input"
        placeholder="Search City"
        type="text"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        onFocus={onFocus}
      />
      <img
        src={require("../assets/images/icon_search_white.png")}
        alt="search"
        className="search-icon"
        // onClick={() => {
        //   if (name === "folder") {
        //     handleDrop();
        //   } else handleVisible();
        // }}
      />
    </div>
  );
}
