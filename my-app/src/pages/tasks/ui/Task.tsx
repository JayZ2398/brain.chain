import React, { PropsWithChildren } from 'react';

import { Task as TaskModel } from '../../../shared/models';

type TaskProps = PropsWithChildren<{
    taskLoading: boolean,
    task: TaskModel
}>

function Task({ children, ...rest }: TaskProps) {
  return (
    <div
      {...rest}
    >
      {children}
    </div>
  );
}

export default Task;
