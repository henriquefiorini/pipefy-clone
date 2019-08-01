import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 320px;
  height: 100%;
  padding: 0 15px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;

    h2 {
      padding: 0 10px;
      font-size: 16px;
      font-weight: 500;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 42px;
      height: 42px;
      border: 0;
      border-radius: 18px;
      background: #3B5BFD;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;