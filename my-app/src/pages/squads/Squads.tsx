import React, { PropsWithChildren, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

import SubjectSelect from "../../pages/subjects/ui/SubjectSelect";
import Squad from "./ui/Squad";
import { Squad as SquadModel } from "../../shared/models";
import LinearProgressWithLabel from "../../shared/components/LinearProgressWithLabel";

const Outerlayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: min-content 1fr;
  grid-gap: 32px 16px;
`;

type SquadsProps = PropsWithChildren<{}>;

const squads: SquadModel[] = [
  {
    id: "squad-1",
    name: "BioBrains",
    users: [
      {
        id: "user-1",
        name: "John",
        subjects: [],
        squads: [],
        comments: [],
      },
    ],
    tasks: [
      {
        id: "task-1",
        name: "What is photosynthesis",
        text: "Last week we explored plant biology, what does this word mean?",

        comments: [],
      },
      {
        id: "task-2",
        name: "What does pythag's theorem mean?",
        text: "Last week we explored plant biology, what does this word mean?",

        comments: [],
      },
    ],
  },
];
const defaultActiveSquad = squads[0].id;

function Squads({ children, ...rest }: SquadsProps) {
  const [activeSquadId, setActiveSquadId] = useState<string | undefined>(
    defaultActiveSquad
  );

  let activeSquad: SquadModel | undefined;
  if (activeSquadId) {
    const s = squads.find((x) => x.id === activeSquadId);
    if (s) activeSquad = s;
    else {
      throw new Error(
        `Dev error - could not find a squad with id '${activeSquadId}'`
      );
    }
  }

  return (
    <Outerlayout>
      <SubjectSelect />

      <LinearProgressWithLabel value={80} />

      <Squad squad={activeSquad} squadLoading={false} />
    </Outerlayout>
  );
}

export default Squads;
