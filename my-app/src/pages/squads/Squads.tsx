import React, { PropsWithChildren, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { useDispatch, useEquivSelector } from "../../shared/redux/hooks";

import SubjectSelect from "../../pages/subjects/ui/SubjectSelect";
import Squad from "./ui/Squad";
import LinearProgressWithLabel from "../../shared/components/LinearProgressWithLabel";
import { squads } from "../../shared/data";
import { Squad as SquadModel } from "../../shared/models";
import { actions, selectActiveSquad } from "../../pages/squads/slice";

const Outerlayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: min-content min-content 1fr;
  grid-gap: 32px 16px;
`;

type SquadsProps = PropsWithChildren<{}>;

const defaultActiveSquad = squads[0].id;

function Squads({ children, ...rest }: SquadsProps) {
  const activeSquadId = useEquivSelector(selectActiveSquad);
  const dispatch = useDispatch();
  const setActiveSquadId = (x: string | undefined) =>
    dispatch(actions.setActiveSquadId(x));

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
