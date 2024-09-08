import { productList } from './api/productData';
import { Dispatch, SetStateAction } from "react";

export interface Product {
    id: number;
    label : string;
    quantity : number;
    price : number;
    image : string;
    category : string;
}


export interface ProductProps {
    id: number;
    label : string;
    quantity : number;
    price : number;
    image : string;
    category : string;
    removeElement : (id:number)=> void;
}

export interface SearchProps {
    inputValue : string;
    setInputValue: Dispatch<SetStateAction<string>>;
    searchForElement : () => void;
    productList : Product[];
    setFilteredProduct : Dispatch<SetStateAction<Product[]>>;
    removedElements : Product[];
    updateRemovedElement : (items:Product[])=>void; 
}
