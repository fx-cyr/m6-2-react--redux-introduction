import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <Wrapper>
      <Title>Your Cart</Title>
      <CartCount>0 Items</CartCount>
      <CartItem />
      <TotalContainer>
        <TotalAmount>
          Total: <Bold>$0.00:</Bold>{" "}
        </TotalAmount>
        <Button>Purchase</Button>
      </TotalContainer>
    </Wrapper>
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
