import React, { PropsWithChildren, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export function TabPanel(props: any) {
  const {
    children,
    value,
    id,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== id}
      id={`vertical-tabpanel-${id}`}
      aria-labelledby={`vertical-tab-${id}`}
      {...other}
    >
      {value === id && (
        <Box p={3}>
            {children}
          {/* <Typography>{children}</Typography> */}
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

type VerticalTabsProps = PropsWithChildren<{
    activeTabId: string | undefined,
    onActiveTabIdChange: (x: string) => void,
    tabs: ReactNode[],
    tabPanels: ReactNode[]
}>

export default function VerticalTabs({
  activeTabId,
  onActiveTabIdChange,
  tabs,
  tabPanels,
}: VerticalTabsProps) {
  const classes = useStyles();

  console.log('activeTabId', activeTabId);

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        // value={activeTabId}
        value="task-1"
        onChange={(ev, v) => { onActiveTabIdChange(v); }}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {tabs}
      </Tabs>
      <TabPanel value="task-1" id={activeTabId}>
        Item One
      </TabPanel>
      <TabPanel value={1} id={1}>
        Item Two
      </TabPanel>
      <TabPanel value={0} id={2}>
        Item Three
      </TabPanel>
      { tabPanels }
    </div>
  );
}
