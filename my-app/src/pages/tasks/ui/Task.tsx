import React, { PropsWithChildren } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { Task as TaskModel } from "../../../shared/models";
import DueIndicator from "./DueIndicator";
import { UpperSubTitle } from "../../../shared/components";
import TaskDiscussion from "../../tasks/ui/TaskDiscussion";
import { comments } from "../../../shared/data";

type TaskProps = PropsWithChildren<{
  taskLoading: boolean;
  task: TaskModel;
}>;

function Task({ task, ...rest }: TaskProps) {
  const taskComments = comments.filter((c) => c.taskId === task.id);

  return (
    <div {...rest}>
      <Grid container spacing={4} direction={"column"}>
        <Grid item>
          <Typography variant={"h4"}>{task.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body2"}>{task.text}</Typography>
        </Grid>

        <Grid item>
          {task.due !== undefined && <DueIndicator due={task.due} />}
        </Grid>

        <Grid item>
          <Divider />
        </Grid>

        <Grid item>
          <UpperSubTitle> Discussion </UpperSubTitle>
          <TaskDiscussion comments={taskComments} task={task} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Task;
