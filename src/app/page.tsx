"use client";
import { useState } from "react";

import { AsideMenu } from "@/components/AsideMenu";
import { UsersSection } from "@/components/UsersSection";
import userData from "@/data/users.json";
import { ProductsSection } from "@/components/ProductsSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { SalesSection } from "@/components/SalesSection";

export enum Sections {
  Users = "Users",
  Products = "Products",
  Categories = "Categories",
  Sales = "Sales",
}

export default function Home() {
  const [currentView, setCurrentView] = useState<Sections>(Sections.Users);

  return (
    <main className="flex min-h-screen flex-row">
      <AsideMenu currentView={currentView} setCurrentView={setCurrentView} />
      {currentView === Sections.Users && <UsersSection userData={userData} />}
      {currentView === Sections.Products && <ProductsSection />}
      {currentView === Sections.Categories && <CategoriesSection />}
      {currentView === Sections.Sales && <SalesSection />}
    </main>
  );
}
