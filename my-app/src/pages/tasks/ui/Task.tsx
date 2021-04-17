import React, { PropsWithChildren } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Task as TaskModel } from "../../../shared/models";

type TaskProps = PropsWithChildren<{
  taskLoading: boolean;
  task: TaskModel;
}>;

function Task({ task, ...rest }: TaskProps) {
  return (
    <div {...rest}>
      <Grid container spacing={4}>
        <Grid item>
          <Typography variant={"h4"}>{task.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body2"}>{task.text}</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Task;
