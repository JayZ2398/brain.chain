import * as type from "./index";
import { withId } from "../db/db";

const defaultUser: type.User = {
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

const defaultSquadData: type.SquadData = {
  name: "Super Studs",
  users: [],
  tasks: [],
};
export function someSquadData(squadData: Partial<type.SquadData>) {
  return { ...defaultSquadData, ...squadData };
}

export function someSquad(squadData: Partial<type.SquadData>) {
  return withId(someSquadData(squadData));
}

const defaultSubjectData: type.SubjectData = {
  name: "Math",
};
export function someSubject(subjectData: Partial<type.SubjectData>) {
  return withId({ ...defaultSubjectData, ...subjectData });
}

const defaultCommentData: type.CommentData = {
  author: someUser({}),
  text: "Is the mitochondria the powerhouse of the cell?",
  isQuestion: true,
};
export function someComment(commentData: Partial<type.CommentData>) {
  return withId({ ...defaultCommentData, ...commentData });
}

const defaultTaskData: type.TaskData = {
  name: "All about the human cell",
  text:
    "What is the purpose of the mitochondria?\nHow do human cells produce energy?",
  comments: [someComment({})],
  due: "Next Friday",
};
export function someTask(taskData: Partial<type.TaskData>) {
  return withId({ ...defaultTaskData, ...taskData });
}
