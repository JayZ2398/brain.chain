import React, { PropsWithChildren, useState } from "react";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box"

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


const useTabStyles = makeStyles((theme) => ({
  wrapper: {
    textTransform: "none",
    alignItems: "start",
  },
}));

function Squad({ squad, squadLoading, children, ...rest }: SquadProps) {
  const [activeTaskIndex, setActiveTaskIndex] = useState<number>(0);

  const tabStyles = useTabStyles();
  if (!squad || squadLoading) return <div>loading</div>;


  return (
    <VerticalTabs
      activeTabIndex={activeTaskIndex}
      onActiveTabIndexChange={setActiveTaskIndex}
      tabsTitle={
        // <TasksTitle>Squad Tasks</TasksTitle>
        <Box marginBottom="16px" paddingLeft="12px" color="#00000066" >
            SQUAD TASKS
        </Box>
      }
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
