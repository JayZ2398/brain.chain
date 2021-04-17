import { someUser, someAccount } from "../models/fakeData";

export const fakeUsers = [
  someUser({ email: "jack@gmail.com", name: "Jack Zezula" }),
  someUser({ email: "kevin@gmail.com", name: "Kevin Russell" }),
  someUser({ email: "jasmine@gmail.com", name: "Jasmine Banares" }),
  someUser({ email: "david@gmail.com", name: "David Liu" }),
  someUser({ email: "jonah@gmail.com", name: "Jonah Baker" }),
];

export const fakeAccounts = fakeUsers.map((user) =>
  someAccount({ email: user.email })
);
