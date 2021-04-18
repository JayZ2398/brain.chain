import react from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useDispatch } from "../../shared/redux/hooks";
import { useHistory } from "react-router-dom";

import { Subject, Squad } from "../../shared/models";
import LinearProgressWithLabel from "../../shared/components/LinearProgressWithLabel";
import { subjects, tasks, squads } from "../../shared/data";
import SubjectCard from "../../pages/subjects/ui/SubjectCard";
import { getPriorityTask } from "../tasks/funcs";
import { RequireField } from "../../shared/types";
import { actions } from "../../pages/squads/slice";

type SquadWithSubject = RequireField<Squad, "subject">;

export default function DashboardPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  function handleSubjectClicked(squad: SquadWithSubject) {
    dispatch(actions.setActiveSquadId(squad.id));
    history.replace("/squads");
  }

  // TODO: why type no worky?
  // const squadsWithSubjects: RequireField<Squad, 'subject'> = squads.map((s) => ({
  const squadsWithSubjects: any = squads.map((s) => ({
    ...s,
    // this is a required one-one relationship, so it is never undefined
    subject: subjects.find((subj) => subj.id === s.subjectId) as Subject,
  }));

  return (
    <Container maxWidth={"md"}>
      <Grid container spacing={6} direction="column">
        <Grid item>
          <Typography variant="h4">Subjects</Typography>
        </Grid>
        <Grid item container spacing={3}>
          {squadsWithSubjects.map((squad: SquadWithSubject) => (
            <Grid item xs={6}>
              <SubjectCard
                onClick={() => handleSubjectClicked(squad)}
                subject={squad.subject}
                highlightedTask={getPriorityTask(
                  tasks.filter((t) => t.squadId === squad.id)
                )}
              />
            </Grid>
          ))}
        </Grid>

        <Grid item>
          <Typography variant="h4">Progress</Typography>
        </Grid>
        <Grid item>
          <LinearProgressWithLabel value={80} />
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
            <img
              width="100%"
              alt="map"
              src={window.location.origin + "/map.png"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
