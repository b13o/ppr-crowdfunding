"use client";

import { useState } from "react";
import type { Project, Reward } from "@/lib/types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PledgeModal } from "@/app/projects/[id]/_components/pledge-modal";

export function RewardsSection({ project }: { project: Project }) {
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          リターン
        </h2>
        <p className="text-foreground/60">
          このプロジェクトを支援するリターンを選択してください
        </p>
      </div>

      <div className="space-y-4">
        {project.rewards.map((reward) => (
          <Card
            key={reward.id}
            className="p-6 cursor-pointer hover:border-primary hover:shadow-lg transition-all duration-200"
            onClick={() => setSelectedReward(reward)}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg text-foreground">
                    {reward.title}
                  </h3>
                  {reward.limited &&
                    reward.remaining &&
                    reward.remaining < 50 && (
                      <Badge variant="destructive" className="text-xs">
                        残り{reward.remaining}個
                      </Badge>
                    )}
                </div>
                <p className="text-foreground/60 text-sm mb-3">
                  {reward.description}
                </p>
                <p className="text-xs text-foreground/50 mb-3">
                  配送予定日:{" "}
                  {new Date(reward.deliveryDate).toLocaleDateString("ja-JP")}
                </p>
                <p className="text-sm text-foreground/70">
                  <span className="font-semibold">{reward.backers}</span>{" "}
                  人が支援
                </p>
              </div>
              <div className="flex flex-col items-end gap-3">
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    ¥{reward.amount.toLocaleString()}
                  </div>
                  <p className="text-xs text-foreground/60">以上</p>
                </div>
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedReward(reward);
                  }}
                >
                  選択する
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedReward && (
        <PledgeModal
          project={project}
          reward={selectedReward}
          onClose={() => setSelectedReward(null)}
        />
      )}
    </section>
  );
}
