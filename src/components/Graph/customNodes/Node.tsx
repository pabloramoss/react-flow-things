import React, { memo, useState } from "react";
import { NodeToolbar } from "reactflow";

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

  // Collapse contentWrapper on icon click
  return (
    // @ts-ignore
    <div style={{ ...style.body, ...(selected ? style.selected : []), position: "" }}>
      <NodeToolbar id={["1", "2"]} isVisible={true}>
        <button>delete</button>
        <button>copy</button>
      </NodeToolbar>
      {/* @ts-ignore */}
      <div style={customTitle} />
      <div style={style.contentWrapper}>{content}</div>
      <p style={{ position: "absolute", top: 0, right: 0, margin: "4px", color: "grey" }}>{id}</p>
    </div>
  );
};

export default memo(Node);
