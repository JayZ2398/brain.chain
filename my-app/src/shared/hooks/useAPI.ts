import useDatabase from "./useDatabase";
import "../models/fakeData";
import { someUser } from "../models/fakeData";

const REQUEST_DELAY_MILLISECONDS = 200;

const fakeDelay = () => setTimeout(() => {}, REQUEST_DELAY_MILLISECONDS);

export default function useAPI() {
  const db = useDatabase();

  async function signUp(name: string, email: string, password: string) {
    fakeDelay();
    try {
      await db.createAccount({ email, password });
      const user = await db.createUser(someUser({ name, email }));
      console.log("Signed up user: ", user);
      return;
    } catch (error) {
      throw error;
    }
  }

  async function login(email: string, password: string) {
    try {
      fakeDelay();
      const account = await db.getAccount(email);
      const user = await db.getUser(account.email);
      if (password === account?.password) {
        console.log("logged in user ", user);
        return user;
      } else {
        throw Error("Incorrect login details");
      }
    } catch (error) {
      throw error;
    }
  }

  return { db, login, signUp };
}
