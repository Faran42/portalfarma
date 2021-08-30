import styled from 'styled-components';

export const Container = styled.div`
  
  background-color: #34b7eb;

  width: 100vw;
  height: 6vh;
 
  margin: 0;

  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0 3%;

  border-bottom: 1px solid #ddd;
`;

export const Wrapper1 = styled.div`
  width: 50vw;
  height: 8vh;

  display: flex;

  flex-direction: row;

  justify-content: space-around;
  align-items: center;

`;

export const Wrapper2 = styled.div`
  width: 25vw;
  height: 8vh;

  display: flex;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;

`;

export const Text = styled.h1`

  font-size: 3vh;
  color: #fff;

  -webkit-text-stroke-width: 0.1vh;
  -webkit-text-stroke-color: #000;

  font-weight: bold;
  
`;

export const Avatar = styled.img`
  
  height: 60%;

  border-radius: 50%;

  border: 1px solid #C3C3C3;
`;
