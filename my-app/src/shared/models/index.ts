export type type<TObj = {}, TId = string> = TObj & { id: TId };

export type Subject = type & SubjectData;
export type SubjectData = {
  name: string;
  users: User[];
};

export type Squad = type & SquadData;
export type SquadData = {
  name: string;
  displayPicture?: string;

  users: User[];
  classId?: string;
  class?: Subject;
  tasks: Task[];
};

export type Account = {
  email: string;
  password: string;
};

export type User = {
  name: string;
  email: string;
  displayPicture?: string;

  subjects: Subject[];
  squads: Squad[];
};

export type Task = type & TaskData;
export type TaskData = {
  name: string;
  text: string;
  subject: Subject;

  squad?: Squad;
  comments: Comment[];
  due?: string;
};

export type Comment = type & CommentData;
export type CommentData = {
  author: User;
  text: string;
  isQuestion: boolean;
};
