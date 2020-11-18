import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { getStoreItemArray } from "../reducers";
import { useSelector } from "react-redux";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  console.log(storeItems);
  let total = 0;
  storeItems.forEach((item) => {
    total += item.price * item.quantity;
    return total;
  });

  return (
    <>
      <Wrapper>
        <Title>Your Cart</Title>
        <CartCount>{storeItems.length} Items</CartCount>
        {storeItems.map((item) => {
          console.log(item.id);
          return <CartItem item={item} id={item.id} />;
        })}

        <TotalContainer>
          <TotalAmount>
            Total: <Bold>{total}</Bold>{" "}
          </TotalAmount>
          <Button>Purchase</Button>
        </TotalContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 15px;
  padding: 0 10px;
`;

const Title = styled.h2`
  color: white;
`;

const CartCount = styled.p`
  color: lightgray;
`;

const TotalContainer = styled.div`
  margin-top: 50px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalAmount = styled.div``;

const Bold = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  position: relative;
  width: 100px;
  display: block;
  border-radius: 12px;
  background: #ff406e;
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export default Cart;
