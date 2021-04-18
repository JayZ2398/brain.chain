import React, { PropsWithChildren, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { useDispatch, useEquivSelector } from "../../../shared/redux/hooks";
import { nanoid } from "@reduxjs/toolkit";

import { Task as TaskModel, Comment, User } from "../../../shared/models";
import DueIndicator from "./DueIndicator";
import { UpperSubTitle } from "../../../shared/components";
import TaskDiscussion from "../../tasks/ui/TaskDiscussion";
import { users } from "../../../shared/data";
import AddComment from "../../comments/ui/AddComment";
import { actions, selectComments } from "../../comments/slice";

type TaskProps = PropsWithChildren<{
  taskLoading: boolean;
  task: TaskModel;
}>;

function Task({ task, ...rest }: TaskProps) {
  const comments = useEquivSelector(selectComments);
  const taskComments = comments.filter((c) => c.taskId === task.id);
  const dispatch = useDispatch();

  const curUser: User = users[0];

  const [commentText, setCommentText] = useState<string | undefined>(undefined);
  const [replyingToCommentId, setReplyingToComment] = useState<
    string | undefined
  >();

  function handleSubmitComment() {
    if (!commentText) return;

    const newComment: Comment = {
      id: nanoid(),
      userId: curUser.id,
      isTaskComment: true,
      taskId: task.id,
      isQuestion: true,
      text: commentText,
    };
    if (replyingToCommentId) newComment.parentId = replyingToCommentId;
    dispatch(actions.setComments([...comments, newComment]));

    setCommentText(undefined);
  }

  // TODO: memo
  const replyingToComment = comments.find((c) => c.id === replyingToCommentId);
  const replyingToUser = users.find((u) => u.id === replyingToComment?.userId);
  function handleCommentReply(commentId: string) {
    setReplyingToComment(commentId);
  }

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
          <Grid container spacing={4}>
            <Grid
              style={{
                width: "100%",
              }}
              item
            >
              <UpperSubTitle> Discussion </UpperSubTitle>
              <TaskDiscussion
                comments={taskComments}
                task={task}
                onCommentReply={handleCommentReply}
              />
            </Grid>
            <Grid
              style={{
                width: "100%",
              }}
              item
            >
              <AddComment
                textFieldProps={{
                  label: !replyingToComment
                    ? "Task question"
                    : `Reply to ${(replyingToUser as User)?.name}`,
                  placeholder: !replyingToComment
                    ? "All questions are good questions!"
                    : `Say anything`,
                }}
                value={commentText}
                onChange={setCommentText}
                onSubmit={handleSubmitComment}
                submitDisabled={commentText === undefined}
                style={{
                  width: "100%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Task;
