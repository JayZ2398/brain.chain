import * as type from "./index";

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
