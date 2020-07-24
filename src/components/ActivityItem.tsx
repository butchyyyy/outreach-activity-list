import { Activity } from "model/Activity";
import React from "react";

interface ActivityItemProps {
  activity: Activity;
}

export const ActivityItem = ({
  activity: { person, note }
}: ActivityItemProps) => {
  return (
    <div>
      <p>You had a meeting with {person}</p>
      <p>{note}</p>
    </div>
  );
};
