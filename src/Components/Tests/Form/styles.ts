import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 3rem;
  height: calc(100vh - 10rem);
  background: #B1B1B1;
  position: relative;
  display: flex;
  flex-direction: column;

  div {
    background: #421010;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: #fff;
    }
  }
`