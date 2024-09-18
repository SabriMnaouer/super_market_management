import React from "react";
import "./productCard.css";
import { ProductProps } from "../../types";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export const ProductCard: React.FunctionComponent<ProductProps> = (props) => {
  const navigate = useNavigate();

  const deleteIcon = () => {
    props.removeElement(props.id);
  };

  const forwordToCard = () => {
    const { id, label, quantity, price, category, image } = props;
    navigate("/card", { state: { product: { id, label, quantity, price, category, image } } });
  };

  return (
    <div className="productCard" onClick={forwordToCard}>
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
