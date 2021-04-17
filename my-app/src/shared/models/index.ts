export type type<TObj = {}, TId = string> = TObj & { id: TId };

export type Subject = type & SubjectData;
export type SubjectData = {
  name: string;
  users?: User[]
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

export type User = type & UserData;
export type UserData = {
  name: string;
  email?: string;
  displayPicture?: string;

  subjects: Subject[];
  squads: Squad[];
  comments?: String[]

};

export type Task = type & TaskData;
export type TaskData = {
  name: string;
  text: string;
  comments: Comment[];
  due?: string;
};

export type Comment = type & CommentData;
export type CommentData = {
  author: User;
  text: string;
  isQuestion: boolean;
};
