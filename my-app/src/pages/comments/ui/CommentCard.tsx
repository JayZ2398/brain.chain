import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ReplyIcon from "@material-ui/icons/Reply";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import { Comment, User } from "../../../shared/models";

interface CommentCardProps {
  user: User;
  comment: Comment;
  onReply: () => void;
}

export default function CommentCard({
  comment,
  user,
  onReply,
  ...rest
}: CommentCardProps) {
  return (
    <ListItem {...rest}>
      <ListItemAvatar>
        <Avatar alt={user.name} src={user.displayPicture} />
      </ListItemAvatar>
      <ListItemText primary={user.name} secondary={comment.text} />
      <ListItemSecondaryAction>
        <IconButton onClick={onReply} edge="end" aria-label="delete">
          <ReplyIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
