import React, { Dispatch, SetStateAction } from "react";
import { MdOutlineWbSunny, MdExitToApp } from "react-icons/md";
import { AsideButton } from "./AsideButton";
import sectionsData from "@/data/sections.json";
import { Sections } from "@/app/page";

export interface AsideInterface {
  currentView: Sections;
  setCurrentView: Dispatch<SetStateAction<Sections>>;
}

export function AsideMenu({ currentView, setCurrentView }: AsideInterface) {
  return (
    <aside className="h-screen w-[250px] fixed bg-black flex flex-col justify-between">
      <section className="h-24 flex items-center justify-center">
        <p>Logo</p>
      </section>
      <div className="flex-1 flex flex-col gap-5 py-3 w-full items-center">
        {sectionsData.map((section) => {
          return (
            <AsideButton
              key={section.id}
              icon={section.icon}
              name={section.name}
              currentView={currentView}
              setCurrentView={setCurrentView}
            />
          );
        })}
      </div>
      <section className="h-24 w-full flex flex-row items-center justify-center gap-3">
        <button className="btn btn-circle btn-outline">
          <MdOutlineWbSunny size="20px" />
        </button>
        <button className="btn btn-circle btn-outline">
          <MdExitToApp size="20px" />
        </button>
      </section>
    </aside>
  );
}
