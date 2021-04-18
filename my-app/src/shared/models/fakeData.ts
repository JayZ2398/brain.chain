import * as type from "./index";
import { withId } from "../db/db";

const defaultUser: type.User = {
  id: "bob_dill",
  name: "Bob Dill",
  email: "bob@gmail.com",
  displayPicture: undefined,
  subjects: [],
  squads: [],
};
export function someUser(user: Partial<type.User>) {
  return { ...defaultUser, ...user };
}

const defaultAccount: type.Account = {
  email: "john@smithers.com",
  password: "password",
};
export function someAccount(account: Partial<type.Account>) {
  return { ...defaultAccount, ...account };
}

const defaultSquadData: type.Squad = {
  id: "squad_data",
  name: "Super Studs",
  subjectId: "Maths",
  users: [],
  tasks: [],
};
export function someSquadData(squadData: Partial<type.Squad>) {
  return { ...defaultSquadData, ...squadData };
}

export function someSquad(squadData: Partial<type.Squad>) {
  return withId(someSquadData(squadData));
}

const defaultSubjectData: type.Subject = {
  id: "subject_id",
  name: "Math",
  users: [],
};
export function someSubject(subjectData: Partial<type.Subject>) {
  return withId({ ...defaultSubjectData, ...subjectData });
}

const defaultCommentData: type.Comment = {
  id: "comment_id",
  userId: "bob_dill",
  taskId: "task_id",
  isTaskComment: true,
  text: "Is the mitochondria the powerhouse of the cell?",
  isQuestion: true,
};
export function someComment(commentData: Partial<type.Comment>) {
  return withId({ ...defaultCommentData, ...commentData });
}

const defaultTaskData: type.Task = {
  id: "Task ID",
  name: "All about the human cell",
  text:
    "What is the purpose of the mitochondria?\nHow do human cells produce energy?",
  comments: [someComment({})],
  due: "Next Friday",
  squadId: "squad_id",
};
export function someTask(taskData: Partial<type.Task>) {
  return withId({ ...defaultTaskData, ...taskData });
}
