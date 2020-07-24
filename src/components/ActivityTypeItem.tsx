import {ActivityType} from "model/AcitivtyType";
import React from "react";

interface ActivityTypeItemProps {
  type: ActivityType
  onClick: () => void
}

export const ActivityTypeItem = ({type, onClick}: ActivityTypeItemProps) => {
  return <div onClick={onClick}>{type}</div>
}
