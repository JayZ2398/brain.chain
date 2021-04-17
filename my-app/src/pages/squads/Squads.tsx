import React, { PropsWithChildren, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useEquivSelector } from "../../shared/redux/hooks";

import SubjectSelect from "../../pages/subjects/ui/SubjectSelect";
import Squad from "./ui/Squad";
import LinearProgressWithLabel from "../../shared/components/LinearProgressWithLabel";
import { squads, subjects } from "../../shared/data";
import { Squad as SquadModel } from "../../shared/models";
import { actions, selectActiveSquad } from "../../pages/squads/slice";
import { unwrapValueThen } from "../../shared/js";

const Outerlayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: minmax(0, auto) 1fr;
  grid-template-rows: min-content min-content 1fr;
  grid-template-areas:
    "subject-select progress"
    "task-nav       meet-squad"
    "filler         tasks";
  grid-gap: 5vh 5vw;
`;

type SquadsProps = PropsWithChildren<{}>;

function Squads({ children, ...rest }: SquadsProps) {
  const usersSubjects = subjects;
  const usersSquads = squads;

  const activeSquadId = useEquivSelector(selectActiveSquad);
  const dispatch = useDispatch();
  const setActiveSquadId = (x: string | undefined) =>
    dispatch(actions.setActiveSquadId(x));

  let activeSquad: SquadModel | undefined;
  if (activeSquadId) {
    const s = usersSquads.find((x) => x.id === activeSquadId);
    if (s) activeSquad = s;
    else {
      throw new Error(
        `Dev error - could not find a squad with id '${activeSquadId}'`
      );
    }
  }

  return (
    <Outerlayout>
      <SubjectSelect
        value={usersSubjects.find((s) => s.id === activeSquad?.subjectId)?.id}
        onChange={unwrapValueThen((subjId) => {
          const userSquadForSubject = usersSquads.find(
            (s) => s.subjectId === subjId
          )?.id;
          setActiveSquadId(userSquadForSubject);
        })}
      />

      <LinearProgressWithLabel value={80} />

      <Squad squad={activeSquad} squadLoading={false} />
    </Outerlayout>
  );
}

export default Squads;
