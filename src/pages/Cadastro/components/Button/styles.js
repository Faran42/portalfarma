import styled, { css } from 'styled-components'

export const Container = styled.button`
  width: 14vw;
  height: 8vh;

  display: flex;

  justify-content: center;
  align-items: center;

  transition: 0.8s;

  ${({ buttonbgc }) => buttonbgc ?
    css` 
      background: rgb(103,223,87);
      background: linear-gradient(180deg, rgba(103,223,87,1) 24%, rgba(45,217,114,1) 53%, rgba(19,242,146,1) 85%);
  `:
    css`
      background: rgb(219,62,45);
      background: linear-gradient(27deg, rgba(219,62,45,1) 24%, rgba(231,44,11,1) 53%, rgba(236,3,3,1) 85%);
    `
  };

  border-radius: 5vh;

  margin-bottom: 0%;

  &:hover {
    transition: 0.8s;
    background-color: #1a49bd;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #fff;
`;

export const Link = styled.a`
  text-decoration: none;

  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: center;
`;



