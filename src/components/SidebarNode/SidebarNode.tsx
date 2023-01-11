import { Container } from "./SidebarNode.styles";

const SidebarNode: React.FC = () => {
  const isOpen = true;

  return (
    <Container isOpen={isOpen}>
      <textarea placeholder="Write your text" />
      <button>Apply</button>
    </Container>
  );
};

export default SidebarNode;
