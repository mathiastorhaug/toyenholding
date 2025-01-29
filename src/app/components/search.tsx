import React, { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search = ({ onSearch }: SearchProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    onSearch(value);
  };

  const handleClear = () => {
    setInputValue("");
    onSearch("");
  };

  return (
    <div
      className={`flex gap-3 lg:gap-4 pb-3 lg:pb-4 items-center overflow-hidden border-b-2 hover:border-black ${
        isFocused || inputValue ? "border-black" : "border-black/20"
      }`}
    >
      <svg
        className="flex-shrink-0 w-6 lg:w-10"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.7073 27.2923L22.4485 21.0348C24.2626 18.8569 25.1672 16.0635 24.9741 13.2357C24.781 10.4079 23.5052 7.76337 21.412 5.85226C19.3188 3.94116 16.5694 2.91061 13.7357 2.97501C10.902 3.03941 8.20225 4.1938 6.19802 6.19802C4.1938 8.20225 3.03941 10.902 2.97501 13.7357C2.91061 16.5694 3.94116 19.3188 5.85226 21.412C7.76337 23.5052 10.4079 24.781 13.2357 24.9741C16.0635 25.1672 18.8569 24.2626 21.0348 22.4485L27.2923 28.7073C27.3852 28.8002 27.4955 28.8739 27.6169 28.9242C27.7383 28.9745 27.8684 29.0004 27.9998 29.0004C28.1312 29.0004 28.2613 28.9745 28.3827 28.9242C28.5041 28.8739 28.6144 28.8002 28.7073 28.7073C28.8002 28.6144 28.8739 28.5041 28.9242 28.3827C28.9745 28.2613 29.0004 28.1312 29.0004 27.9998C29.0004 27.8684 28.9745 27.7383 28.9242 27.6169C28.8739 27.4955 28.8002 27.3852 28.7073 27.2923ZM4.9998 13.9998C4.9998 12.2198 5.52764 10.4797 6.51657 8.99967C7.5055 7.51962 8.91111 6.36607 10.5556 5.68488C12.2002 5.00369 14.0098 4.82546 15.7556 5.17273C17.5014 5.52 19.1051 6.37716 20.3638 7.63584C21.6224 8.89451 22.4796 10.4982 22.8269 12.244C23.1741 13.9898 22.9959 15.7994 22.3147 17.4439C21.6335 19.0885 20.48 20.4941 18.9999 21.483C17.5199 22.472 15.7798 22.9998 13.9998 22.9998C11.6137 22.9972 9.32601 22.0481 7.63876 20.3608C5.95151 18.6736 5.00244 16.3859 4.9998 13.9998Z"
          fill="black"
        />
      </svg>

      <input
        type="text"
        placeholder="Søk"
        className="w-full font-serif outline-none text-2xl lg:text-5xl placeholder:text-black/30"
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {inputValue && (
        <button
          onClick={handleClear}
          className="mt-6 font-sans text-base font-bold"
        >
          Tøm
        </button>
      )}
    </div>
  );
};

export default Search;
