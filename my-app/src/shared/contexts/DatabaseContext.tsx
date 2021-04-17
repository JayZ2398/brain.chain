import React from "react";
import Database from "../db/db";

const DatabaseContext = React.createContext(new Database());

export function DatabaseContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DatabaseContext.Provider value={new Database()}>
      {children}
    </DatabaseContext.Provider>
  );
}

export default DatabaseContext;
