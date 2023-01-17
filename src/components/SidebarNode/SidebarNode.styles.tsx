import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  height: 100%;
  width: ${(p) => (p.isOpen ? "500px" : "0")};
  transition: 0.3s width;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
  background: grey;
`;
