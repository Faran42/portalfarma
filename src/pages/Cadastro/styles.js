import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: transparent;

  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;
`;

export const Card = styled.div`

  width: 55vw;
  height: 70vh;  
  background-color: #4578f7;

  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;

  border-radius: 30px;
`;

export const Title = styled.h1`
  font-size: 35px;
  color: #fff;

  -webkit-text-stroke-width: 0.15vh;
  -webkit-text-stroke-color: #000;

  text-align: center;

  margin-bottom: 5%;

`;

