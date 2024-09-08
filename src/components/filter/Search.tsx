import React, { ChangeEvent } from "react";
import { SearchProps } from "../../types";

export const Search: React.FunctionComponent<SearchProps> = (props) => {
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(e.target.value);
  };
  const searchForElement = () => {
    props.searchForElement();
  };

  const deleteElement = () => {
    const result = props.productList.filter(
      (el) => el.category !== props.inputValue
    );
    const remElements = props.productList.filter(
      (el) => el.category === props.inputValue
    );
    props.updateRemovedElement(remElements);
    props.setFilteredProduct(result);
  };
  return (
    <div>
      {" "}
      <input
        type="text"
        placeholder="Search products"
        value={props.inputValue}
        onChange={changeInput}
      />
      <button onClick={searchForElement}>Search</button>
      <button onClick={deleteElement}>Delete</button>
    </div>
  );
};
