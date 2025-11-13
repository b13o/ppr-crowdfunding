import { Badge } from "@/components/ui/badge";
import { LiveFundingStat } from "@/app/projects/[id]/_components/live-funding-stat";
import type { Project } from "@/lib/types";

export function ProjectStats({ project }: { project: Project }) {
  const fundingPercentage = Math.round(
    (project.fundedAmount / project.goalAmount) * 100
  );

  return (
    <section className="bg-card border-b border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-foreground/60 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="capitalize">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <LiveFundingStat project={project} />
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-destructive mb-1">
              {project.daysRemaining}
            </div>
            <p className="text-sm text-foreground/60">残り日数</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-border rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-success to-accent transition-all duration-500"
            style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
