import { useEffect, useState } from "react";
import { useStore } from "reactflow";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { modifyNode, setSidebarOpen } from "../../redux/slices/graphSlice";

import { Container } from "./SidebarNode.styles";
const SidebarNode: React.FC = () => {
  const isOpen = useAppSelector((state) => state.graph.sidebarOpen);
  const dispatch = useAppDispatch();
  const selectedNodes = useStore((store) => store.getNodes().filter((node) => node.selected));
  const initialTitle = selectedNodes.length === 1 ? selectedNodes[0].data.label : "";
  const [title, setTitle] = useState(initialTitle);

  const handleApply = () => {
    dispatch(setSidebarOpen(false));
  };

  // useEffect(() => {
  //   if (selectedNodes.length === 1) setTitle(selectedNodes[0].data.label);
  // }, [selectedNodes]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedNodes.length === 1) {
      const newNode = {
        ...selectedNodes[0],
        data: { ...selectedNodes[0].data, label: e.target.value },
      };

      dispatch(modifyNode(newNode));
    }
  };

  return (
    <Container isOpen={isOpen}>
      <div>
        <h3>{selectedNodes.length && selectedNodes[0].id}</h3>
        <input
          placeholder="Titulo"
          value={selectedNodes.length === 1 ? selectedNodes[0].data.label : ""}
          onChange={handleChange}
        />
        <textarea placeholder="Write your text" style={{ height: "300px" }} />
      </div>
      <button onClick={handleApply}>Apply</button>
    </Container>
  );
};

export default SidebarNode;
