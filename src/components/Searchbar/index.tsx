import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

interface Props {
  onChange?: (searchInput?: string) => void;
}

const SearchbarInput = ({ onChange = () => null }: Props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const debouncedSearchInput = useDebounce<string>(searchInput, 500);

  const handleChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(() => e.target.value);
  };

  useEffect(() => {
    onChange?.(debouncedSearchInput);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchInput]);

  return (
    <div className="w-[800] h-24 flex justify-center items-center">
      <input
        type="text"
        className="w-96 h-12 p-2 border-2 border-blue-600 rounded-2xl"
        onChange={handleChangeSearchInput}
      />
    </div>
  );
};

export default SearchbarInput;
