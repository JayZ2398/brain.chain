import react from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { Subject, Task } from "../../../shared/models";
import { DateArg, formatDateDisplay } from "../../../shared/datetime/funcs";

interface SubjectCardProps {
  subject: Subject;
  highlightedTask?: Task;
  onClick: () => void;
}

export function SubjectCard({
  subject,
  highlightedTask,
  ...rest
}: SubjectCardProps) {
  return (
    <Card variant="outlined" {...rest}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="h2">
            {subject.name}
          </Typography>

          {highlightedTask && (
            <>
              <Typography>{highlightedTask.name}</Typography>
              {highlightedTask.due && (
                <Typography color="textSecondary">
                  {formatDateDisplay(highlightedTask.due, {
                    format: "DateWithTime",
                  }).toUpperCase()}
                </Typography>
              )}
            </>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SubjectCard;
