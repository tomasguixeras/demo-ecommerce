import { Sections } from "@/app/page";
import React, { Dispatch, SetStateAction } from "react";
import {
  MdOutlinePersonOutline,
  MdOutlineShoppingBag,
  MdCategory,
  MdAttachMoney,
  MdMotionPhotosOff,
} from "react-icons/md";

export interface AsideButtonInterface {
  icon: string;
  name: string;
  currentView: Sections;
  setCurrentView: Dispatch<SetStateAction<Sections>>;
}

export function AsideButton({
  icon,
  name,
  currentView,
  setCurrentView,
}: AsideButtonInterface) {
  const renderIcon = () => {
    switch (icon) {
      case "users":
        return <MdOutlinePersonOutline size="28px" />;
      case "products":
        return <MdOutlineShoppingBag size="28px" />;
      case "categories":
        return <MdCategory size="28px" />;
      case "sales":
        return <MdAttachMoney size="28px" />;
      default:
        return <MdMotionPhotosOff size="28px" />;
    }
  };

  const changeView = (view: string) => {
    setCurrentView(Sections[view as Sections]);
  };
  return (
    <div
      className={`flex flex-row items-center justify-start gap-4 w-2/3 ${
        currentView === name && "text-primary"
      }`}
      onClick={() => changeView(name)}
    >
      {renderIcon()}
      <p>{name}</p>
    </div>
  );
}
