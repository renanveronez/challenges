import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  padding-top: 6rem;
  background-color: ${({ theme }) => theme.colors["background_body"]};

  > main {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2rem;
  }
`;
