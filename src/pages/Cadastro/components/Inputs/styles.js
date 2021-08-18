import styled from 'styled-components'

export const Container = styled.div`
  width: 39vw;
  height: auto;

  display: flex;
  flex-direction: row;

  margin: 1vw 0;

  justify-content: space-between;
`;

export const Label = styled.div`
  font-size: 2vw;

  color: #fff;

  -webkit-text-stroke-width: 0.15vh;
  -webkit-text-stroke-color: #000;

  font-weight: bold;
`;

export const Input = styled.input`
  font-size: 1.25vw;

  width: 20vw;
  height: 5vh;


  border: solid 0.1vw ;
  border-radius: 1vh;

  padding: 0 1vw;
  margin: 0 0 0 1vw;
`;