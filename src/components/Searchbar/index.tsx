import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

interface Props {
  onChange?: (searchValue: string) => void;
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
    <div className="searchBar">
      <input
        type="text"
        className="searchBarInput"
        onChange={handleChangeSearchInput}
        placeholder="Search for statistics..."
      />
    </div>
  );
};

export default SearchbarInput;
