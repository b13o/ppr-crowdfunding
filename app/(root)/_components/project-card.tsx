import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/types";
import Image from "next/image";

export function ProjectCard({ project }: { project: Project }) {
  const fundingPercentage = Math.round(
    (project.fundedAmount / project.goalAmount) * 100
  );

  return (
    <Link href={`/projects/${project.id}`}>
      <Card className="overflow-hidden py-0 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-full flex flex-col cursor-pointer">
        {/* Project Image */}
        <div className="relative w-full h-48 bg-muted overflow-hidden">
          <Image
            src={`/ppr-crowdfunding/${project.image}`}
            width={387}
            height={192}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
            {project.category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-bold text-lg text-foreground mb-1 line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
            作成者: {project.creator}
          </p>

          {/* Funding Stats */}
          <div className="mb-4 flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-foreground">
                ¥{project.fundedAmount.toLocaleString()}
              </span>
              <span className="text-sm text-foreground/60">
                {fundingPercentage}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-border rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-success to-accent transition-all duration-500"
                style={{ width: `${Math.min(fundingPercentage, 100)}%` }}
              />
            </div>
          </div>

          {/* Footer Stats */}
          <div className="border-t border-border pt-4 flex justify-between text-xs text-foreground/60">
            <span>{project.backers.toLocaleString()} 人が支援</span>
            <span>残り {project.daysRemaining} 日</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
