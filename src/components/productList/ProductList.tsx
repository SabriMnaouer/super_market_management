import React, { useState } from "react";
import { ProductCard } from "../product/ProductCard";
import "./productList.css";
import { productList } from "../../api/productData";
import { Search } from "../filter/Search";
import { Product } from "../../types";

const removedElements: Product[] = [];
export const ProductList = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(productList);
 
  const searchForElement = () => {
    if (inputValue === "") {
      const productListIndexes = productList.map((el) => el.id);
      const removedelementsIndexes = removedElements.map((el) => el.id);
      const finalProductsArrayIndexes = productListIndexes.filter(
        (el) => !removedelementsIndexes.includes(el)
      );
      const finalProductsArray = finalProductsArrayIndexes.map(
        (el) => productList[el!]
      );
      setFilteredProducts(finalProductsArray);
    } else {
      const result = filteredProducts.filter(
        (el) => el.category === inputValue
      );
      setFilteredProducts(result);
    }
  };

  const removeElement = (id: number) => {
    const elements = filteredProducts.filter((el) => el.id === id);
    removedElements.push(...elements);
    const productListIndexes = productList.map((el) => el.id);
    const removedelementsIndexes = removedElements.map((el) => el.id);
    const finalProductsArrayIndexes = productListIndexes.filter(
      (el) => !removedelementsIndexes.includes(el)
    );
    const finalProductsArray = finalProductsArrayIndexes.map(
      (el) => productList[el!]
    );
    setFilteredProducts(finalProductsArray);
  };
  const updateRemovedElement = (items: Product[]) => {
    removedElements.push(...items);
  };


  return (
    <>
      <Search
        inputValue={inputValue}
        setInputValue={setInputValue}
        searchForElement={searchForElement}
        productList={filteredProducts}
        setFilteredProduct={setFilteredProducts}
        removedElements={removedElements}
        updateRemovedElement={updateRemovedElement}
      />
      <div className="productList">
        {filteredProducts.map((Product, index) => (
          <ProductCard
            key={index}
            id={Product.id}
            label={Product.label}
            category={Product.category}
            price={Product.price}
            quantity={Product.quantity}
            image={Product.image}
            removeElement={removeElement}
          />
        ))}{" "}
      </div>
    </>
  );
};
