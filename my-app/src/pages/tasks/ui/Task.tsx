import React, { PropsWithChildren } from 'react';

import { Task as TaskModel } from '../../../shared/models';

type TaskProps = PropsWithChildren<{
    taskLoading: boolean,
    task: TaskModel
}>

function Task({
  task,
  ...rest
}: TaskProps) {
  return (
    <div
      {...rest}
    >
      {task.name}
    </div>
  );
}

export default Task;
