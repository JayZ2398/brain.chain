import React from "react";
import CommentCard from "../../../pages/comments/ui/CommentCard";
import List from "@material-ui/core/List";

import { useKeyById } from "../../../shared/hooks/misc";
import { Comment, Task, User } from "../../../shared/models";
import { Dict } from "../../../shared/types";
import { users } from "../../../shared/data";

interface TaskDiscussionProps {
  task: Task;
  comments: Comment[];
  loading?: boolean;
}

function TaskDiscussion({ task, comments, loading }: TaskDiscussionProps) {
  if (loading) return <div> loadign </div>;

  const userDict = useKeyById(users) as Dict<User>;

  return (
    <List component="nav">
      {comments.map((c) => (
        <CommentCard user={userDict[c.userId]} comment={c} />
      ))}
    </List>
  );
}

export default TaskDiscussion;
