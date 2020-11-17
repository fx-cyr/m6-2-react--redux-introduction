import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <Wrapper>
      <TopSection>
        <Title>This Item</Title>
        <CloseBtn>X</CloseBtn>
      </TopSection>

      <Quantity>
        Quantity:<Count>0</Count>
      </Quantity>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5px;
  border: 2px dotted lightgrey;
`;

const TopSection = styled.div`
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: white;
`;

const CloseBtn = styled.button`
  width: 20px;
  height: 20px;
  border: 0px;
`;

const Quantity = styled.div`
  background-color: #301733;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Count = styled.span`
  background-color: white;
  color: black;
  margin-left: 8px;
  padding: 5px;
`;

export default CartItem;
