import styled from 'styled-components'

export const Container = styled.div`
  width: 18vw;
  height: 10vh;

  display: flex;

  justify-content: center;
  align-items: center;

  transition: 0.8s;

  background-color: #4578F7;

  border-radius: 5vh;

  margin-bottom: 0%;

  &:hover {
    transition: 0.8s;
    background-color: #1a49bd;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
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



