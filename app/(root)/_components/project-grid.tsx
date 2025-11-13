import { ProjectCard } from "@/app/(root)/_components/project-card";
import { fetchProjects } from "@/lib/api";
import { Project } from "@/lib/types";

export async function ProjectGrid() {
  const projects = await fetchProjects();

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2
            id="projects"
            className="text-3xl sm:text-5xl font-bold text-foreground mb-4"
          >
            注目のプロジェクト
          </h2>
          <p className="text-foreground/80 text-lg">
            世界中のクリエイティブなプロジェクトを発見
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
