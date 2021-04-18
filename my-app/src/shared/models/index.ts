import { WithId } from "../types";

export type Subject = WithId & {
  name: string;
  users: User[];
};

export type Squad = WithId & {
  name: string;
  displayPicture?: string;

  users: String[];
  subjectId: string;
  subject?: Subject;
  tasks: Task[];
};

export type Account = {
  email: string;
  password: string;
};

export type User = WithId & {
  name: string;
  displayPicture?: string;
  email: string;
  subjectIds?: string[];
  subjects?: Subject[];
  squadIds?: string[];
  squads: Squad[];
  commentIds?: string[];
  comments?: Comment[];
};

export type Task = WithId & {
  name: string;
  text: string;

  squadId: string;
  squad?: Squad;
  comments: Comment[];
  due?: string;
};

export type Comment = WithId & {
  userId: string;
  parentId?: string;
  isTaskComment: boolean;
  taskId: string;
  isQuestion: boolean;
  text: string;
};
