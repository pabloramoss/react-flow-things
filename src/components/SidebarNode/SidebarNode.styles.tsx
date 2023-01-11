import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const Container = styled.div<Props>`
  height: 100%;
  width: ${(p) => (p.isOpen ? "500px" : "0")};
  transition: 0.5s width;
`;
