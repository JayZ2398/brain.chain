import React, { PropsWithChildren, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';

export function TabPanel(props: any) {
  const {
    children,
    activeIndex,
    tabIndex,
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={activeIndex !== tabIndex}
      id={`vertical-tabpanel-${tabIndex}`}
      aria-labelledby={`vertical-tab-${tabIndex}`}
      {...other}
    >
      {activeIndex === tabIndex && (
        children
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
    activeTabIndex: number,
    onActiveTabIndexChange: (x: number) => void,
    tabsTitle: ReactNode,
    tabs: ReactNode[],
    tabPanels: ReactNode[]
}>

export default function VerticalTabs({
  activeTabIndex,
  onActiveTabIndexChange,
  tabs,
  tabPanels,
  tabsTitle,
}: VerticalTabsProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        { tabsTitle }
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={activeTabIndex}
          onChange={(ev, v) => { onActiveTabIndexChange(v); }}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {tabs}
        </Tabs>
      </div>

      { tabPanels }
    </div>
  );
}
