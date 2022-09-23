import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  display: flex;
  /* width: 100%; */
  left: 10rem;
  height: 5.5rem;
  align-items: center;
  padding: 0rem 0rem 0 2rem;

  @media (max-width: 350px) {
    padding: 0rem 0rem 0 0rem;
  }
`

export const SwitchIcon = styled.img`
  margin: 4px;
  height: 70%;
  width: 70%;
`