import styled from 'styled-components';

export const Container = styled.div`
  
  background-color: #1306ff;
  /* background: linear-gradient(356deg, rgba(82,155,255,1) 24%, rgba(45,176,217,1) 53%, rgba(19,203,242,1) 85%); */

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

  justify-content: flex-end;
  align-items: center;

`;

export const Text = styled.h1`

  font-size: 1.25em;
  color: #fff;

  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #000;

  font-weight: bold;

  margin-right: 5%;
  
`;

export const Avatar = styled.img`
  width: 2.5vw;

  border-radius: 50%;

  border: 1px solid #C3C3C3;
`;
