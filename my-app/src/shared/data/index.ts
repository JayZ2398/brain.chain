import {
  Squad as SquadModel,
  User,
  Subject,
  Task,
  Comment,
} from "../../shared/models";

export const user: User = {
  id: "user-1",
  email: "user_1@gmail.com",

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

export const comments: Comment[] = [
  {
    id: "comment-1",
    userId: "user-1",
    taskId: "task-1",
    isTaskComment: true,
    isQuestion: true,
    parentId: undefined,
    text:
      "Okay, sunlight gives a plant energy, but why does a plant need energy?",
  },

  {
    id: "comment-2",
    userId: "user-2",
    taskId: "task-1",
    isTaskComment: true,
    isQuestion: true,
    parentId: undefined,
    text: "Do people photosynthesise too?",
  },

  {
    id: "comment-3",
    userId: "user-1",
    taskId: "task-2",
    isTaskComment: true,
    isQuestion: true,
    parentId: undefined,
    text: "How can I understand pythag's theorem geometrically?",
  },

  {
    id: "comment-4",
    userId: "user-3",
    taskId: "task-2",
    isTaskComment: true,
    isQuestion: false,
    parentId: "comment-3",
    text:
      "Hey John! Here's a picture that might help: https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pythagorean.svg/390px-Pythagorean.svg.png",
  },
];

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

export const users: User[] = [
  {
    id: "user-1",
    email: "user-1@gmail.com",
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
    email: "user-2@gmail.com",
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
    email: "user-3@gmail.com",
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
];

export const squads: SquadModel[] = [
  {
    id: "squad-1",
    name: "BioBrains",
    subjectId: "subject-1",
    users: ["user-1", "user-2", "user-3"],
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
