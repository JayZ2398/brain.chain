import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import { Comment, User } from "../../../shared/models";

interface CommentCardProps {
  user: User;
  comment: Comment;
}

export default function CommentCard({
  comment,
  user,
  ...rest
}: CommentCardProps) {
  return (
    <ListItem {...rest}>
      <ListItemAvatar>
        <Avatar
          alt="Jasmine"
          src="https://images.unsplash.com/photo-1542297919088-a2b78b2c578b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
        />
      </ListItemAvatar>
      <ListItemText primary={user.name} secondary={comment.text} />
    </ListItem>
  );
}
