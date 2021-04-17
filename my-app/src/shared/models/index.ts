export type WithId<TObj = {}, TId = string> = TObj & { id: TId };

export type Subject = WithId & {
  name: string;
  users: User[];
};

export type Squad = WithId & {
  name: string;
  displayPicture?: string;

  users: User[];
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

  subjects?: Subject[];
  subjectIds?: string[];
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
  isQuestion: boolean;
  text: string;
};
