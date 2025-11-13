import { fetchProjectById } from "@/lib/api";
import type { Project } from "@/lib/types";

const fetchProjectStats = async (projectId: string) => {
  const project = await fetchProjectById(projectId);
  return {
    fundedAmount: project.fundedAmount,
    backers: project.backers,
  };
};

export async function LiveFundingStat({ project }: { project: Project }) {
  const stats = await fetchProjectStats(project.id);

  const fundingPercentage = Math.round(
    (stats.fundedAmount / project.goalAmount) * 100
  );

  return (
    <>
      <div>
        <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 transition-all duration-300">
          ¥{stats.fundedAmount.toLocaleString()}
        </div>
        <p className="text-sm text-foreground/60">
          目標 ¥{project.goalAmount.toLocaleString()}
        </p>
      </div>

      <div>
        <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 transition-all duration-300">
          {stats.backers.toLocaleString()}
        </div>
        <p className="text-sm text-foreground/60">支援者</p>
      </div>

      <div>
        <div className="text-2xl sm:text-3xl font-bold text-success mb-1 transition-all duration-300">
          {fundingPercentage}%
        </div>
        <p className="text-sm text-foreground/60">達成</p>
      </div>
    </>
  );
}
