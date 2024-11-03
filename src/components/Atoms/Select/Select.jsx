import React, { useRef, useState } from "react";
import {
  SelectClear,
  SelectContent,
  SelectIcon,
  SelectOption,
  SelectOptions,
  SelectStyled,
  SelectValue,
} from "./styled";
import { ArrowUp, BackArrow, ChevronDownIcon } from "../../../assets/Icons";
import useOnClickOutside from "../../../Hooks/UseOnClickOutside";

const Select = ({ options, handler, value = "Select" }) => {
  const [view, setView] = useState(false);
  const [currentOption, setCurrentOption] = useState(value ?? null);
  const selectRef = useRef(null);

  const toggleView = () => setView((old) => !old);

  const hediView = () => setView(false);

  useOnClickOutside(selectRef, hediView);

  const setOption = (option) => {
    setCurrentOption(option.label);
    handler(option);
    hediView();
  };

  const clearHandler = (event) => {
    event.stopPropagation();
    handler(null);
    setCurrentOption(null);
    hediView(false);
  };

  return (
    <SelectStyled ref={selectRef}>
      <SelectContent onClick={toggleView}>
        <SelectValue active={String(currentOption)}>
          {currentOption ?? value}
        </SelectValue>

        <SelectIcon>
          <SelectClear onClick={clearHandler}>
            <ArrowUp />
          </SelectClear>
          <ChevronDownIcon />
        </SelectIcon>
      </SelectContent>
      {view ? (
        <SelectOptions>
          {options?.map((option) => (
            <SelectOption key={option.value} onClick={() => setOption(option)}>
              {option.label}
            </SelectOption>
          ))}
        </SelectOptions>
      ) : null}
    </SelectStyled>
  );
};

export default Select;
