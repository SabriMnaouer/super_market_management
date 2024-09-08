import React from "react";
import "./productCard.css";
import { ProductProps } from "../../types";
import { TiDelete } from "react-icons/ti";

export const ProductCard: React.FunctionComponent<ProductProps> = (props) => {
  const deleteIcon = () => {
    props.removeElement(props.id);
  };

  return (
    <div className="productCard">
      <div className="cardHeader">
        <img src={props.image} alt="product img" className="productImage" />
        <TiDelete size={30} cursor={"pointer"} onClick={deleteIcon} />
      </div>
      <h2 className="productId">Id : {props.id}</h2>
      <h2 className="productLabel">Label : {props.label}</h2>
      <p className="productCategory">Category : {props.category}</p>
      <p className="productQuantity">Quantity : {props.quantity}</p>
      <p className="productPrice">Price : {props.price}</p>
    </div>
  );
};
