import { v4 as uuid } from "uuid";
import * as types from "../models/index";

function withId<T>(object: T): T & { id: string } {
  return { id: uuid(), ...object };
}

class Database {
  users: Map<string, types.User>;

  constructor() {
    this.users = new Map();
  }

  // add user
  async createUser(userData: types.UserData) {
    const users = Array.from(this.users.values());
    // There is no existing user
    if (!users.map((user) => user.email).includes(userData.email)) {
      const user = withId(userData);
      this.users.set(user.id, user);
      console.log('Created user: ', user);
      return user;
    }
    throw Error();
  }

  // async getUser(id: string) {
  //   const res = this.users[id];
  //   if (res) return res;
  //   throw Error("Not found");
  // }

  async updateUser() {}
}

export function dbTest() {  
  const db = new Database();
  const newUserData : types.UserData = {
    name: 'Jack',
    email: 'jack@gmail.com',
    subjects: [],
    squads: []
  }
  db.createUser(newUserData);
}
  
// get (login with) user

// given user

// get user tasks

// get user squads

// given task

// get users

// get description

// get discussion

// update discussion (add comment)

// add comment
