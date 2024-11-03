import React from "react";
import {
  FilterButtonIcon,
  FilterButtonStyled,
  FilterButtonText,
} from "./styled";
import { FilterIcon } from "../../../assets/Icons";

const FilterButton = ({ active, setFilters }) => {
  const setter = () => setFilters((old) => !old);

  return (
    <FilterButtonStyled onClick={setter}>
      <FilterButtonIcon active={String(active)}>
        <FilterIcon />
      </FilterButtonIcon>
      <FilterButtonText active={String(active)}>Filters</FilterButtonText>
    </FilterButtonStyled>
  );
};

export default FilterButton;
