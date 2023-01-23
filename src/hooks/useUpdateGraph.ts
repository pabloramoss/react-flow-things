import { useReactFlow } from "reactflow";

import { useAppDispatch } from "../redux/hooks";
import { addNode } from "../redux/slices/graphSlice";

interface Dimensions {
  width: number;
  height: number;
}

const useUpdateGraph = () => {
  const dispatch = useAppDispatch();

  const { project } = useReactFlow();

  const addNewNode = (elementDimensions: Dimensions) => {
    const relativePosition = project({
      x: elementDimensions.width / 2,
      y: elementDimensions.height / 2,
    });

    const centerX = relativePosition.x - 100;
    const centerY = relativePosition.y;
    const position = { x: centerX, y: centerY };

    const newNode = {
      id: String(Date.now()),
      data: { label: "New node", text: "" },
      position,
      type: "defaultNode",
    };

    dispatch(addNode(newNode));
  };

  return {
    addNewNode,
  };
};

export default useUpdateGraph;
