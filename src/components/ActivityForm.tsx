import React, { useCallback, useState } from "react";
import { ActivityType } from "model/AcitivtyType";
import { ActivityTypeItem } from "components/ActivityTypeItem";
import { Activity } from "model/Activity";
import styled from "styled-components";

interface ActivityFormProps {
  addActivity: (activity: Omit<Activity, "person" | "id">) => void;
}

const FormContainer = styled.div`
  display: flex;
  background: lightgray;
  width: 100%;
`;


const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const SubmitButton = styled.button`
  align-self: flex-end;
`

export const ActivityForm = ({ addActivity }: ActivityFormProps) => {
  const [note, setNote] = useState();
  const [type, setType] = useState();

  const handleNoteChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNote(e.target.value);
    },
    []
  );

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      addActivity({
        note: note,
        type: type
      });

      setNote("");
      setType(ActivityType.MESSAGE);

      e.preventDefault();
    },
    [addActivity, note, type]
  );

  return (
    <FormContainer>
      <form onSubmit={onSubmit}>
        <textarea onChange={handleNoteChange} value={note} />
        <ActionsContainer>
          <ActivityTypeItem
            type={ActivityType.MESSAGE}
            onClick={() => setType(ActivityType.MESSAGE)}
          />
          <ActivityTypeItem
            type={ActivityType.BEER}
            onClick={() => setType(ActivityType.BEER)}
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </ActionsContainer>

      </form>
    </FormContainer>
  );
};
