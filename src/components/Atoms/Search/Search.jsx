import React from "react";
import { SearchBlock, SearchIconStyled, SearchInput } from "./styled";
import { SearchIcon } from "../../../assets/Icons";

const Search = ({
  value,
  setValue,
  placeholder = "Search by ID, product, or others...",
}) => {
  return (
    <SearchBlock>
      <SearchIconStyled>
        <SearchIcon />
      </SearchIconStyled>
      <SearchInput
        placeholder={"Search by name, email, or others..."}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </SearchBlock>
  );
};

export default Search;
