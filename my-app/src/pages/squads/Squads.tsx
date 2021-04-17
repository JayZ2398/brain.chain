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
  grid-template-rows: min-content min-content 1fr;
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
        displayPicture:
          "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
        name: "John",
        subjects: [],
        squads: [],
        comments: [],
      },
      {
        id: "user-2",
        displayPicture:
          "https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80",
        name: "Alan",
        subjects: [],
        squads: [],
        comments: [],
      },
      {
        id: "user-3",
        displayPicture:
          "https://images.unsplash.com/photo-1534982841079-afde227ada8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80",
        name: "Naomi",
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
        due: "2021-04-18T05:00:00+1000",

        comments: [],
      },
      {
        id: "task-2",
        name: "What does pythag's theorem mean?",
        text: "Last week we explored plant biology, what does this word mean?",
        due: "2021-04-19T08:00:00+0000",

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
