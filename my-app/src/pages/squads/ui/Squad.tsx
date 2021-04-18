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
import { UpperSubTitle } from "../../../shared/components";

import styled from "styled-components";

const SquadTasksTitle = styled(UpperSubTitle)`
  margin-bottom: 16px;
  // align with <Tab />
  padding-left: 12px;
`;

type SquadProps = PropsWithChildren<{
  squad?: SquadModel;
  squadLoading: boolean;
}>;

function Squad({ squad, squadLoading, children, ...rest }: SquadProps) {
  const [activeTaskIndex, setActiveTaskIndex] = useState<number>(0);

  if (!squad || squadLoading)
    return (
      <EmptyDisplay
        style={{
          gridColumn: "1 / 3",
          width: "100%",
        }}
        text="You haven't been assigned to a squad yet! 🐱‍🚀🐱‍🚀"
        picture={
          <UndrawChildren
            {...{
              width: "50vw",
            }}
          />
        }
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
        tabsTitle={<SquadTasksTitle>Squad Tasks</SquadTasksTitle>}
        tabs={squad.tasks.map((t) => (
          <Tab label={getTaskDisplayName(t)} id={t.id} />
        ))}
      />
    </>
  );
}

export default Squad;
