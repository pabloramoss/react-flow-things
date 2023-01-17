import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSidebarOpen } from "../../redux/slices/graphSlice";

import { Container } from "./SidebarNode.styles";

const SidebarNode: React.FC = () => {
  const isOpen = useAppSelector((state) => state.graph.sidebarOpen);
  const dispatch = useAppDispatch();

  const handleApply = () => {
    dispatch(setSidebarOpen(false));
  };

  return (
    <Container isOpen={isOpen}>
      <textarea placeholder="Write your text" style={{ height: "300px" }} />
      <button onClick={handleApply}>Apply</button>
    </Container>
  );
};

export default SidebarNode;
