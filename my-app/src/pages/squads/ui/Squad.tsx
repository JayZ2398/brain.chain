import React, { PropsWithChildren, useState } from "react";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import { Squad as SquadModel } from "../../../shared/models";
import VerticalTabs, {
  TabPanel,
} from "../../../shared/components/mui/TabPanels";
import Task from "../../tasks/ui/Task";
import { getTaskDisplayName } from "../../tasks/funcs";
import { makeStyles } from "@material-ui/core/styles";

type SquadProps = PropsWithChildren<{
  squad?: SquadModel;
  squadLoading: boolean;
}>;

import styled from "styled-components";

const useTabStyles = makeStyles((theme) => ({
  wrapper: {
    textTransform: "none",
    alignItems: "start",
  },
}));

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

  if (!squad || squadLoading) return <div>loading</div>;

  const tabStyles = useTabStyles();

  return (
    <VerticalTabs
      activeTabIndex={activeTaskIndex}
      onActiveTabIndexChange={setActiveTaskIndex}
      tabsTitle={<TasksTitle>Squad Tasks</TasksTitle>}
      tabs={squad.tasks.map((t) => (
        <Tab classes={tabStyles} label={getTaskDisplayName(t)} id={t.id} />
      ))}
      tabPanels={squad.tasks.map((t, i) => (
        <TabPanel activeIndex={activeTaskIndex} tabIndex={i}>
          <Task taskLoading={squadLoading} task={t} />
        </TabPanel>
      ))}
    />
  );
}

export default Squad;
