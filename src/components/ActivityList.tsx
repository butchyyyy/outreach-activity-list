import { Activity } from "model/Activity";
import { ActivityItem } from "components/ActivityItem";
import React from "react";

interface ActivityListProps {
  activities: Activity[];
}

export const ActivityList = ({ activities }: ActivityListProps) => {
  return (
    <>
      {activities.map(activity => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </>
  );
};
