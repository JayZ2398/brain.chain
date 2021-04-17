import { v4 as uuid } from "uuid";
import * as type from "../models/index";
import { fakeUsers, fakeAccounts } from "./initialFakeData";

function withId<T>(object: T): T & { id: string } {
  return { id: uuid(), ...object };
}

export default class Database {
  users: Map<string, type.User>;
  accounts: Map<string, type.Account>;

  constructor() {
    this.users = new Map();
    fakeUsers.forEach((user) => this.createUser(user));

    this.accounts = new Map();
    fakeAccounts.forEach((account) => this.createAccount(account));
  }

  // Sanity check, drop whatever you want here
  async dbTest() {
    const userData: type.User = {
      name: "Bob",
      email: "bob@gmail.com",
      subjects: [],
      squads: [],
    };
    let user = await this.createUser(userData);
    console.log("Got user: ", this.getUser(user.email));
    const newUserData = { ...userData, name: "Jonah" };

    user = await this.updateUser(user.email, newUserData);
    console.log("Updated user: ", user);

    // account
    let accountData = {
      email: "jack@gmail.com",
      password: "password123",
    };
    await this.createAccount(accountData);
  }

  async createUser(userData: type.User) {
    const users = Array.from(this.users.values());
    // There is no existing user
    if (!users.map((user) => user.email).includes(userData.email)) {
      this.users.set(userData.email, userData);
      console.log("Created user: ", userData);
      return userData;
    }
    throw Error();
  }

  async getUser(email: string) {
    const res = this.users.get(email);
    if (res) return res;
    throw Error("Not found");
  }

  async getAllUsers() {
    return Array.from(this.users.values());
  }

  async updateUser(existingEmail: string, user: type.User) {
    const existingUser = await this.getUser(existingEmail);
    if (existingUser) {
      this.users.delete(existingEmail);
      const newUser = await this.createUser(user);
      return newUser;
    }
    throw Error();
  }

  async createAccount(accountData: type.Account) {
    const accountEmails = Array.from(this.accounts.keys());
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
