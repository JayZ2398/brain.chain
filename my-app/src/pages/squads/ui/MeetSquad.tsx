import React, { PropsWithChildren } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { WithStyle } from "../../../shared/types";
import styled from "styled-components";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { Squad, User } from "../../../shared/models";
import { users } from "../../../shared/data";

const CardLayout = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: min-content;
  grid-gap: 5vh 5vw;
`;

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

      <Grid item>
        <CardLayout>
          {squad.users.map((u) => {
            // const user = users.map((user) => user.id === u)[0]
            // console.log(user)
            // // const user  = users.find(u)
            // console.log(u)
            // console.log(users)
            const user = users.find(x => x.id === u)
            if(user){

            return (
            <Card variant="outlined">
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={`${user.name}'s profile picture`}
                  height="140"
                  image={user.displayPicture}
                  title={user.name}
                />
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {user.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )} else {
            return <> </>
          }})}
        </CardLayout>
      </Grid>
    </Grid>
  );
}

export default MeetSquad;
