import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import Node from "./Node";
import { contentStyle as style } from "./nodeStyle";

interface Props {
  data: any;
  selected: any;
  id: string;
}

const TargetNode: React.FC<Props> = ({ data, selected, id }) => {
  return (
    <Node
      color="#e0bbe4"
      content={
        // @ts-ignore
        <div style={style.io}>
          {data.label}
          <Handle
            id="o__data"
            position={Position.Top}
            style={{ ...style.handle, ...style.right }}
            type="target"
          />
        </div>
      }
      id={id}
      label={data.label}
      selected={selected}
    />
  );
};

export default memo(TargetNode);
