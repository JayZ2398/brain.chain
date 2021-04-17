import React, { PropsWithChildren, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props: any) {
  const {
    children,
    value,
    index,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
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

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={activeTabId}
        onChange={(ev, v) => { onActiveTabIdChange(v); }}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {tabs}
      </Tabs>
      { tabPanels }
    </div>
  );
}
