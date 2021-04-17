import { v4 as uuid } from "uuid";
import * as types from "../models/index";

function withId<T>(object: T): T & { id: string } {
  return { id: uuid(), ...object };
}

export class Database {
  users: Map<string, types.User>;
  accounts: Map<string, types.Account>;

  constructor() {
    this.users = new Map();
    this.accounts = new Map();
    this.dbTest();
  }

  // Sanity check, drop whatever you want here
  async dbTest() {
    const userData: types.UserData = {
      name: "Jack",
      email: "jack@gmail.com",
      subjects: [],
      squads: [],
    };
    let user = await this.createUser(userData);
    console.log("Got user: ", this.getUser(user.id));
    const newUserData = { ...userData, name: "Jonah" };

    user = await this.updateUser(user.id, newUserData);
    console.log("Updated user: ", user);

    // account
    let accountData = {
      email: "jack@gmail.com",
      password: "password123",
    };
    await this.createAccount(accountData);
  }

  async createUser(userData: types.UserData) {
    const users = Array.from(this.users.values());
    // There is no existing user
    if (!users.map((user) => user.email).includes(userData.email)) {
      const user: types.User = withId(userData);
      this.users.set(user.id, user);
      console.log("Created user: ", user);
      return user;
    }
    throw Error();
  }

  async getUser(id: string) {
    const res = this.users.get(id);
    if (res) return res;
    throw Error("Not found");
  }

  async updateUser(id: string, userData: types.UserData) {
    const user = await this.getUser(id);
    if (user) {
      const newUser: types.User = { ...userData, id };
      this.users.set(id, newUser);
      return newUser;
    }
    throw Error();
  }

  async createAccount(accountData: types.Account) {
    const accountEmails = Array.from(this.users.keys());
    // There is no existing user
    if (!accountEmails.includes(accountData.email)) {
      this.accounts.set(accountData.email, accountData);
      console.log("Created account: ", accountData);
      return accountData;
    }
    throw Error();
  }

  async getAccount(email: string) {
    const res = this.accounts.get(email);
    if (res) return res;
    throw Error("Not found");
  }
}

// given user

// get user tasks

// get user squads

// given task

// get users

// get description

// get discussion

// update discussion (add comment)

// add comment
