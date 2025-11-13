import type { Project } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CreatorCard({ project }: { project: Project }) {
  return (
    <Card className="p-6 bg-muted/50">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden flex-shrink-0">
            <span className="text-2xl font-bold text-primary-foreground">
              {project.creator.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-bold text-lg text-foreground mb-1">
              {project.creator}
            </h3>
            <p className="text-sm text-foreground/60 mb-3">作成者</p>
            <p className="text-sm text-foreground/80">
              革新的なアイデアを実現することに情熱を持っています
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          className="border-border hover:bg-background bg-transparent"
        >
          連絡する
        </Button>
      </div>
    </Card>
  );
}
