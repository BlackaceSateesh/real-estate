import { useState, useRef, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchButton = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const buttonRef = useRef(null);
  const inputWrapperRef = useRef(null);

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  const handleClickOutside = (event) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target) &&
      inputWrapperRef.current &&
      !inputWrapperRef.current.contains(event.target)
    ) {
      setInputVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="SearchButton" ref={buttonRef}>
      <button onClick={toggleInputVisibility}>
        <IoSearchSharp />
      </button>
      <div
        ref={inputWrapperRef}
        className="input-wrapper"
        style={{
          position: "absolute",
          top: "120%",
          right: 0,
          zIndex: 99,
          opacity: isInputVisible ? 1 : 0,
          visibility: isInputVisible ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
          transform: isInputVisible ? "translateY(0)" : "translateY(-10px)",
        }}
      >
        <input type="text" placeholder="Search here" />
      </div>
    </div>
  );
};

export default SearchButton;
