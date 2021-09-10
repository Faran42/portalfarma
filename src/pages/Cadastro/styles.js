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
  background-color: #1306ff;

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

 

  text-align: center;

  margin-bottom: 1%;

`;

