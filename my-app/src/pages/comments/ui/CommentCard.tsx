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
        <Avatar alt={user.name} src={user.displayPicture} />
      </ListItemAvatar>
      <ListItemText primary={user.name} secondary={comment.text} />
    </ListItem>
  );
}
