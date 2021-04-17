import React, { PropsWithChildren, useState, Fragment } from "react";
import Typography from "@material-ui/core/Typography";

import { Squad as SquadModel } from "../../../shared/models";
import VerticalTabs, {
  TabPanel,
} from "../../../shared/components/mui/TabPanels";
import Tab from "../../../shared/components/mui/Tab";
import Task from "../../tasks/ui/Task";
import { getTaskDisplayName } from "../../tasks/funcs";
import { makeStyles } from "@material-ui/core/styles";
import MeetSquad from "./MeetSquad";
import EmptyDisplay from "../../../shared/components/EmptyDisplay";
import UndrawChildren from "../../../shared/components/arty/UndrawChildren";

type SquadProps = PropsWithChildren<{
  squad?: SquadModel;
  squadLoading: boolean;
}>;

import styled from "styled-components";

const TasksTitle = styled.div`
  text-transform: uppercase;
  margin-bottom: 16px;
  // align with <Tab />
  padding-left: 12px;
  // 40%
  color: #00000066;
`;

function Squad({ squad, squadLoading, children, ...rest }: SquadProps) {
  const [activeTaskIndex, setActiveTaskIndex] = useState<number>(0);

  if (!squad || squadLoading)
    return (
      <EmptyDisplay
        style={{
          gridColumns: "1 / 3",
        }}
        text="You haven't been assigned to a squad yet! 🐱‍🚀🐱‍🚀"
        picture={<UndrawChildren />}
      />
    );

  const tabPanels = squad.tasks.map((t, i) => (
    <TabPanel activeIndex={activeTaskIndex} tabIndex={i}>
      <Task taskLoading={squadLoading} task={t} />
    </TabPanel>
  ));

  return (
    <>
      <div
        style={{
          gridArea: "tasks",
        }}
      >
        {tabPanels}
      </div>

      <MeetSquad
        squad={squad}
        squadLoading={squadLoading}
        style={{
          gridArea: "meet-squad",
          display: "block",
        }}
      />

      <VerticalTabs
        style={{
          gridArea: "task-nav",
        }}
        activeTabIndex={activeTaskIndex}
        onActiveTabIndexChange={setActiveTaskIndex}
        tabsTitle={<TasksTitle>Squad Tasks</TasksTitle>}
        tabs={squad.tasks.map((t) => (
          <Tab label={getTaskDisplayName(t)} id={t.id} />
        ))}
      />
    </>
  );
}

export default Squad;
