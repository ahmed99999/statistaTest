import React from "react";

const SearchbarInput = () => {
  return (
    <div className="w-[800] h-24 flex justify-center items-center">
      <input
        type="text"
        className="w-96 h-12 p-2 border-2 border-blue-600 rounded-2xl"
      />
    </div>
  );
};

export default SearchbarInput;
