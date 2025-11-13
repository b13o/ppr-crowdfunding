"use cache";

import { Hero } from "@/app/(root)/_components/hero";
import { ProjectGrid } from "@/app/(root)/_components/project-grid";

export default async function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
    </>
  );
}
