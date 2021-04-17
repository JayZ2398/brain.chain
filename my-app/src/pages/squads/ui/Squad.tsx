import React, { PropsWithChildren, useState } from 'react';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import { Squad as SquadModel } from '../../../shared/models';
import VerticalTabs, { TabPanel } from '../../../shared/components/mui/TabPanels';
import Task from '../../tasks/ui/Task';
import { getTaskDisplayName } from '../../tasks/funcs';

type SquadProps = PropsWithChildren<{
    squad?: SquadModel,
    squadLoading: boolean,
}>

function Squad({
  squad,
  squadLoading,
  children,
  ...rest
}: SquadProps) {
  const [activeTaskIndex, setActiveTaskIndex] = useState<number>(0);

  if (!squad || squadLoading) return <div>loading</div>;

  return (
    <VerticalTabs
      activeTabIndex={activeTaskIndex}
      onActiveTabIndexChange={setActiveTaskIndex}
      tabsTitle={(
        <Typography
          style={{
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Squad Tasks
        </Typography>
        )}
      tabs={squad.tasks.map((t) => (
        <Tab label={getTaskDisplayName(t)} id={t.id} />
      ))}
      tabPanels={squad.tasks.map((t, i) => (
        <TabPanel
          activeIndex={activeTaskIndex}
          tabIndex={i}
        >
          <Task taskLoading={squadLoading} task={t} />
        </TabPanel>
      ))}
    />
  );
}

export default Squad;
