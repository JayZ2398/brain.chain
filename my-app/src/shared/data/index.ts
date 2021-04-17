import { Squad as SquadModel, User, Subject, Task } from "../../shared/models";

export const user: User = {
  id: "user-1",
  displayPicture:
    "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
  name: "John",
  subjectIds: ["subject-1", "subject-2", "subject-3"],
  subjects: [],
  commentIds: [],
  comments: [],
  squadIds: [],
  squads: [],
};

export const subjects: Subject[] = [
  {
    id: "subject-1",
    users: [],
    name: "Science",
  },
  {
    id: "subject-2",
    users: [],
    name: "Mathematics",
  },
  {
    id: "subject-3",
    users: [],
    name: "English",
  },
];

export const squads: SquadModel[] = [
  {
    id: "squad-1",
    name: "BioBrains",
    subjectId: "subject-1",
    users: [
      {
        id: "user-1",
        displayPicture:
          "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
        name: "John",
        subjectIds: ["subject-1", "subject-2", "subject-3"],
        subjects: [],
        commentIds: [],
        comments: [],
        squadIds: [],
        squads: [],
      },
      {
        id: "user-2",
        displayPicture:
          "https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2125&q=80",
        name: "Alan",
        subjectIds: ["subject-1", "subject-2", "subject-3"],
        subjects: [],
        commentIds: [],
        comments: [],
        squadIds: [],
        squads: [],
      },
      {
        id: "user-3",
        displayPicture:
          "https://images.unsplash.com/photo-1534982841079-afde227ada8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80",
        name: "Naomi",
        subjectIds: ["subject-1", "subject-2", "subject-3"],
        subjects: [],
        commentIds: [],
        comments: [],
        squadIds: [],
        squads: [],
      },
    ],
    tasks: [
      {
        id: "task-1",
        name: "What is photosynthesis 🌱",
        text: "Last week we explored plant biology, what does this word mean?",
        due: "2021-04-18T05:00:00+1000",
        squadId: "squad-1",

        comments: [],
      },
      {
        id: "task-2",
        name: "What does pythag's theorem mean? 📐",
        text: "Something about triangles...",
        due: "2021-04-19T08:00:00+0000",
        squadId: "squad-1",

        comments: [],
      },
    ],
  },
];

export const tasks: Task[] = [
  {
    id: "task-1",
    name: "What is photosynthesis 🌱",
    text: "Last week we explored plant biology, what does this word mean?",
    due: "2021-04-18T05:00:00+1000",
    squadId: "squad-1",

    comments: [],
  },
  {
    id: "task-2",
    name: "What does pythag's theorem mean? 📐",
    text: "Something about triangles...",
    due: "2021-04-19T08:00:00+0000",
    squadId: "squad-1",

    comments: [],
  },
];
