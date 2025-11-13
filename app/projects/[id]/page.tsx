import { ProjectStats } from "@/app/projects/[id]/_components/project-stats";
import { ProjectDescription } from "@/app/projects/[id]/_components/project-description";
import { RewardsSection } from "@/app/projects/[id]/_components/rewards-section";
import { CreatorCard } from "@/app/projects/[id]/_components/creator-card";
import { fetchProjectById, fetchProjects } from "@/lib/api";
import { Project } from "@/lib/types";
import Image from "next/image";

// export const dynamic = "force-dynamic";

export const generateStaticParams = async () => {
  const projects = await fetchProjects();
  return projects.map((project: Project) => ({ id: project.id }));
};

const getProject = async (projectId: string) => {
  "use cache"; // ← これを追加！
  return await fetchProjectById(projectId);
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const projectId = (await params).id as string;
  const project = await getProject(projectId);

  return (
    <>
      {/* hero section */}
      <div className="relative w-full h-96 sm:h-[500px] bg-muted overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <ProjectStats project={project} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-12">
          <CreatorCard project={project} />
          <ProjectDescription project={project} />
          <RewardsSection project={project} />
        </div>
        <div>
          <div className="sticky top-24 space-y-4">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="text-sm text-foreground/60 mb-2">目標金額</div>
              <div className="text-3xl font-bold text-foreground mb-4">
                ¥{project.goalAmount.toLocaleString()}
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition">
                このプロジェクトを支援
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
