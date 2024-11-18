import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchButton = () => {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <>
      <div className="SearchButton">
        <button onClick={toggleInputVisibility}>
          <IoSearchSharp />
        </button>
        <div
          className="input-wrapper"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            opacity: isInputVisible ? 1 : 0,
            visibility: isInputVisible ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
            transform: isInputVisible ? "translateY(0)" : "translateY(-10px)",
          }}
        >
          <input type="text" placeholder="Search here" />
        </div>
      </div>
    </>
  );
};

export default SearchButton;
