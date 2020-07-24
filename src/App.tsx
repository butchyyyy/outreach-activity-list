import React, { useCallback, useState } from "react";
import { Activity } from "model/Activity";
import { ActivityList } from "components/ActivityList";
import { ActivityForm } from "components/ActivityForm";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem auto 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
`

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const addActivity = /*useCallback(*/
    (activity: Omit<Activity, "person" | "id">) => {
      setActivities([
        {
          ...activity,
          person: "Milton Romaguera",
          id: String(Math.random() * 10000)
        },
        ...activities
      ]);
    }/*,
    [activities]
  );*/

  return (
    <Container>
      <ActivityForm addActivity={addActivity} />
      <ActivityList activities={activities} />;
    </Container>
  );
}

export default App;
