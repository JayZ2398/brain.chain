import React, { PropsWithChildren } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { WithStyle } from "../../../shared/types";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { Squad } from "../../../shared/models";

type MeetSquadProps = PropsWithChildren<{
  squad?: Squad;
  squadLoading: boolean;
}> &
  WithStyle;

function MeetSquad({ squad, squadLoading, ...rest }: MeetSquadProps) {
  if (squadLoading || !squad) return <div>loading...</div>;

  return (
    <Grid container direction="column" spacing={2} {...rest}>
      <Grid item>
        <Typography variant="h5">Meet your Squad 👋</Typography>
      </Grid>

      <Grid item>
        <Typography variant="subtitle1">
          Before you get cracking, say hi to your squad members!
        </Typography>
      </Grid>

      <Grid item container spacing={3}>
        {squad.users.map((u) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={`${u.name}'s profile picture`}
                  height="140"
                  image={u.displayPicture}
                  title={u.name}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {u.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default MeetSquad;
