import styled from "styled-components";

export const FeedContainerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80vw;
  justify-items: center;
  grid-gap: 10px 0;
  padding-top: 20px;
  margin: 0 auto;
`;

export const RecipeCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  border: 1px solid black;
  transition: 0.5s;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  img {
    padding: 10px;
    max-width: 95%;
    max-height: 80%;
  }
  h3 {
    bottom: 2px;
    align-self: flex-end;
  }
`;
