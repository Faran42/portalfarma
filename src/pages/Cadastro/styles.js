import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  background-color: transparent;

  display: flex;

  margin-top: 3%;
  align-items: center;

  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 60%;

  margin-top: 5%;

  display: flex;

  flex-direction: row;

  justify-content: space-around;
`;

export const Card = styled.div`

  width: 55vw;
  height: 75vh;  
  background: rgb(82,155,255);
  background: linear-gradient(356deg, rgba(82,155,255,1) 24%, rgba(45,176,217,1) 53%, rgba(19,160,242,1) 85%);

  display: flex;

  justify-content: center;
  align-items: center;

  flex-direction: column;

  border-radius: 30px;

  box-shadow: 5px 5px rgba(30,30,30,0.3);

  
`;

export const Title = styled.h1`
  font-size: 35px;
  color: #fff;

  -webkit-text-stroke-width: 0.15vh;
  -webkit-text-stroke-color: #000;

  text-align: center;

  margin-bottom: 1%;

`;

