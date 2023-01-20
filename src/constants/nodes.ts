import { Node } from "reactflow";

import DefaultNode from "../components/Graph/customNodes/DefaultNode";
import SourceNode from "../components/Graph/customNodes/SourceNode";
import TargetNode from "../components/Graph/customNodes/TargetNode";

export const initialNode: Node = {
  id: "0",
  data: { label: "Initial node", text: "" },
  position: { x: 0, y: 0 },
  type: "sourceNode",
};

export const nodeTypes = {
  sourceNode: SourceNode,
  targetNode: TargetNode,
  defaultNode: DefaultNode,
};
