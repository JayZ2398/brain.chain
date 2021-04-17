import { v4 as uuid } from "uuid";
import { someComment } from "../models/fakeData";
import * as type from "../models/index";
import {
  fakeUsers,
  fakeAccounts,
  fakeSquads,
  fakeSubjects,
} from "./initialFakeData";

export function withId<T>(object: T): T & { id: string } {
  return { id: uuid(), ...object };
}

export default class Database {
  users: Map<string, type.User>;
  accounts: Map<string, type.Account>;
  squads: Map<string, type.Squad>;
  subjects: Map<string, type.Subject>;

  constructor() {
    this.users = new Map();
    fakeUsers.forEach((user) => this.createUser(user));

    this.accounts = new Map();
    fakeAccounts.forEach((account) => this.createAccount(account));

    this.squads = new Map();
    fakeSquads.forEach((squad) => this.insertSquad(squad));
    // Define relations from user->squad in fake data
    this.users.forEach((user) =>
      user.squads.forEach((squad) => {
        this.addToSquad(user, squad);
      })
    );

    this.subjects = new Map();
    fakeSubjects.forEach((subject) => this.insertSubject(subject));
  }

  // Sanity check, drop whatever you want here
  async dbTest() {
    const userData: type.User = {
      id: "Bob_id",
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

  // Account
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

  // User
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

  // Squads
  async insertSquad(squad: type.Squad) {
    this.squads.set(squad.id, squad);
  }

  // User->Squads
  async addToSquad(user: type.User, squad: type.Squad) {
    try {
      if (!squad.users.includes(user)) squad.users.push(user);
      if (!user.squads.includes(squad)) user.squads.push(squad);
    } catch (error) {
      throw error;
    }
  }

  // Subjects
  async insertSubject(subject: type.Subject) {
    this.subjects.set(subject.id, subject);
  }

  // get user tasks
  async getUserTasks(user: type.User) {
    const tasks: type.Task[] = [];
    user.squads.forEach((squad) => tasks.concat(squad.tasks));
    return tasks;
  }

  // create comment
  async createComment(commentData: type.Comment, task: type.Task) {
    const newComment = someComment(commentData);
    task.comments.push(newComment);
  }
}
