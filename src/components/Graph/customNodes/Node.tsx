import React, { memo } from "react";
import { NodeToolbar } from "reactflow";

import { useAppDispatch } from "../../../redux/hooks";
import { deleteNode } from "../../../redux/slices/graphSlice";

import { style } from "./nodeStyle";
interface NodeProps {
  label: string;
  selected: boolean;
  color?: string;
  content: React.ReactNode;
  id: string;
}
const Node: React.FC<NodeProps> = ({ label, selected, color, content, id }: NodeProps) => {
  let customTitle = { ...style.title };

  if (color) customTitle.backgroundColor = color;

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteNode(id));
  };

  // Collapse contentWrapper on icon click
  return (
    // @ts-ignore
    <div style={{ ...style.body, ...(selected ? style.selected : []), position: "" }}>
      <NodeToolbar style={{ zIndex: 30 }}>
        <button onClick={handleDelete}>delete</button>
        {/* <button onClick={() => dispatch(copyNode())}>copy</button> */}
      </NodeToolbar>
      {/* @ts-ignore */}
      <div style={customTitle} />
      <div style={style.contentWrapper}>{content}</div>
      <p style={{ position: "absolute", top: 0, right: 0, margin: "4px", color: "grey" }}>{id}</p>
    </div>
  );
};

export default memo(Node);
