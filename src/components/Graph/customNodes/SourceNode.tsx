import React, { memo } from "react";
import { Handle, Position } from "reactflow";

import Node from "./Node";
import { contentStyle as style } from "./nodeStyle";

interface Props {
  data: any;
  selected: any;
  id: string;
}

const SourceNode: React.FC<Props> = ({ data, selected, id }) => {
  return (
    <Node
      color="#add5fa"
      content={
        // @ts-ignore
        <div style={style.io}>
          {data.label}
          <Handle
            id="o__data"
            position={Position.Bottom}
            style={{ ...style.handle, ...style.right }}
            type="source"
          />
        </div>
      }
      id={id}
      label={data.label}
      selected={selected}
    />
  );
};

export default memo(SourceNode);
