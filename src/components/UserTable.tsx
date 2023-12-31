import React from "react";
import Image from "next/image";
import { MdDelete, MdOutlinePersonOff } from "react-icons/md";

export enum userRolesInterface {
  superadmin = "superadmin",
  admin = "admin",
  user = "user",
}

export interface usersInterface {
  id: number;
  avatar: string;
  fullName: string;
  email: string;
  rol: string;
  blocked: boolean;
}

export function UserTable({ userData }: { userData: usersInterface[] }) {
  const rolValidator = (rol: string) => {
    switch (rol) {
      case userRolesInterface.superadmin:
        return "bg-amber-400 text-black";
      case userRolesInterface.admin:
        return "bg-primary text-black";
      case userRolesInterface.superadmin:
        return "bg-slate-600 text-white";
      default:
        return "bg-slate-600 text-white";
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Rol</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return (
              <tr key={user.id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={user.avatar}
                        alt="Avatar Tailwind CSS Component"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-bold">{user.fullName}</div>
                </td>
                <td>{user.email}</td>
                <td>
                  <span
                    className={`badge badge-ghost badge-md ${rolValidator(
                      user.rol
                    )}`}
                  >
                    {user.rol}
                  </span>
                </td>
                <th>
                  <section className="flex flex-row items-center justify-center gap-4">
                    <button className="btn btn-sm btn-circle btn-outline">
                      <MdOutlinePersonOff size="16px" />
                    </button>
                    <button className="btn btn-sm btn-circle btn-error">
                      <MdDelete size="16px" />
                    </button>
                  </section>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
