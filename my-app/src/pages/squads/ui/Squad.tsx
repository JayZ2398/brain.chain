import React, { PropsWithChildren, useState } from "react";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Squad as SquadModel } from "../../../shared/models";
import VerticalTabs, {
  TabPanel,
} from "../../../shared/components/mui/TabPanels";
import Task from "../../tasks/ui/Task";
import { getTaskDisplayName } from "../../tasks/funcs";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
    <Grid container spacing={3}>
      <VerticalTabs
        activeTabIndex={activeTaskIndex}
        onActiveTabIndexChange={setActiveTaskIndex}
        tabsTitle={
          <Box marginBottom="16px" paddingLeft="12px" color="#00000066">
            SQUAD TASKS
          </Box>
        }
        tabs={squad.tasks.map((t) => (
          <Grid item md={3}>
            <Tab classes={tabStyles} label={getTaskDisplayName(t)} id={t.id} />
          </Grid>
        ))}
        tabPanels={squad.tasks.map((t, i) => (
          <>
            {/* <Grid item md={6}> */}
              <TabPanel activeIndex={activeTaskIndex} tabIndex={i}>
                <Box color="red">
                  <Task taskLoading={squadLoading} task={t} />
                </Box>
              </TabPanel>
            {/* </Grid>
            <Grid item md={3} /> */}
          </>
        ))}
      />
    </Grid>
  );
}

export default Squad;
