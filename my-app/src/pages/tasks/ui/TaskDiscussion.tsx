import React from "react";
import CommentCard from "../../../pages/comments/ui/CommentCard";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import { useKeyById } from "../../../shared/hooks/misc";
import { Comment, Task, User } from "../../../shared/models";
import { Dict } from "../../../shared/types";
import { users } from "../../../shared/data";

interface TaskDiscussionProps {
  task: Task;
  comments: Comment[];
  loading?: boolean;
}

interface CommentCardStyledProps {
  isChild?: boolean;
}
const CommentCardStyled = styled(CommentCard)`
  ${({ isChild }: CommentCardStyledProps) =>
    isChild &&
    `
        padding-left: 72px;
  `}
`;

function TaskDiscussion({
  task,
  comments,
  loading,
  ...rest
}: TaskDiscussionProps) {
  if (loading) return <div> loadign </div>;

  const userDict = useKeyById(users) as Dict<User>;

  return (
    <List component="nav">
      {comments.map((c) => (
        <CommentCardStyled
          user={userDict[c.userId]}
          comment={c}
          isChild={c.parentId !== undefined}
        />
      ))}
    </List>
  );
}

export default TaskDiscussion;
