import React from "react";
import { MdDelete } from "react-icons/md";
import { IconButton } from "@material-ui/core";

function CardInsideLeftSection({ oddOrEven, onDelete, task }) {
  return (
    <div
      className={
        oddOrEven === "odd" ? "task-container-one" : "task-container-two"
      }
    >
      <p className="task-name">{task}</p>
      <IconButton>
        <MdDelete size={30} color="white" onClick={onDelete} />
      </IconButton>
    </div>
  );
}

export default CardInsideLeftSection;
