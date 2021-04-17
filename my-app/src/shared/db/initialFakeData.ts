import {
  someUser,
  someAccount,
  someSquad,
  someSubject,
  someTask,
} from "../models/fakeData";

const humanCellTask = someTask({});

const biology = someSubject({ name: "Biology" });
const history = someSubject({ name: "History" });
export const fakeSubjects = [biology, history];

const superStuds = someSquad({ name: "Super Studs", class: biology });
const royalReaders = someSquad({ name: "Royal Readers", class: history });
export const fakeSquads = [superStuds, royalReaders];

export const fakeUsers = [
  someUser({
    email: "jack@gmail.com",
    name: "Jack Zezula",
    squads: [fakeSquads[0], fakeSquads[1]],
  }),
  someUser({
    email: "kevin@gmail.com",
    name: "Kevin Russell",
    squads: [fakeSquads[0]],
  }),
  someUser({
    email: "jasmine@gmail.com",
    name: "Jasmine Banares",
    squads: [fakeSquads[0]],
  }),
  someUser({
    email: "david@gmail.com",
    name: "David Liu",
    squads: [fakeSquads[0]],
  }),
  someUser({
    email: "jonah@gmail.com",
    name: "Jonah Baker",
    squads: [fakeSquads[0], fakeSquads[1]],
  }),
];

export const fakeAccounts = fakeUsers.map((user) =>
  someAccount({ email: user.email })
);
