import React, { PropsWithChildren, useState, useEffect } from 'react';
import Tab from '@material-ui/core/Tab';

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
  const [activeTask, setActiveTask] = useState<string | undefined>();
  useEffect(() => {
    if (!activeTask && squad && squad.tasks && squad.tasks.length > 0) {
      console.log('setting active task');
      setActiveTask(squad.tasks[0].id);
    }
  }, [JSON.stringify(squad)]);

  if (!squad || squadLoading || !activeTask) return <div>loading</div>;

  console.log('activeTask', activeTask);
  return (
    <VerticalTabs
      activeTabId={activeTask as string}
      onActiveTabIdChange={setActiveTask}
      tabs={squad.tasks.map((t) => (
        <Tab label={getTaskDisplayName(t)} id={t.id} />
      ))}
      tabPanels={squad.tasks.map((t) => (
        <TabPanel
          id={t.id}
        >
          <Task taskLoading={squadLoading} task={t} />
        </TabPanel>
      ))}
    />
  );
}

export default Squad;
