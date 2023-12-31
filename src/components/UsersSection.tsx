import React from "react";
import { UserTable, usersInterface } from "./UserTable";
import { UserStats } from "./UserStats";

export function UsersSection({ userData }: { userData: usersInterface[] }) {
  return (
    <div className="w-full px-3 pb-6 ml-[250px]">
      <header className=" my-4 flex flex-row items-center justify-between">
        <h1 className="text-2xl text-primary font-semibold">Users</h1>
        <UserStats />
      </header>
      <UserTable userData={userData} />
    </div>
  );
}
