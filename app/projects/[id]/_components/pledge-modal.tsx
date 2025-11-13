"use client";

import { useState } from "react";
import type { Project, Reward } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function PledgeModal({
  project,
  reward,
  onClose,
}: {
  project: Project;
  reward: Reward;
  onClose: () => void;
}) {
  const [pledgeAmount, setPledgeAmount] = useState(reward.amount);

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader className="border-b border-border pb-6">
          <DialogTitle className="text-xl font-bold">
            プロジェクトを支援
          </DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="space-y-6">
          {/* Project Info */}
          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-foreground/60 mb-2">プロジェクト</p>
            <h3 className="font-bold text-foreground">{project.title}</h3>
          </div>

          {/* Selected Reward */}
          <div className="border border-border rounded-lg p-4 bg-gradient-to-br from-primary/5 to-accent/5">
            <p className="text-sm text-foreground/60 mb-2">選択したリターン</p>
            <h4 className="font-bold text-foreground mb-2">{reward.title}</h4>
            <p className="text-sm text-foreground/70 mb-4">
              {reward.description}
            </p>
            <div className="text-2xl font-bold text-primary">
              ¥{reward.amount.toLocaleString()}
            </div>
          </div>

          {/* Pledge Amount */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              支援金額
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground">
                ¥
              </span>
              <input
                type="number"
                value={pledgeAmount}
                onChange={(e) =>
                  setPledgeAmount(
                    Math.max(reward.amount, Number(e.target.value))
                  )
                }
                className="w-full pl-8 pr-4 py-2 border border-border rounded-lg bg-muted text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
                min={reward.amount}
              />
            </div>
            <p className="text-xs text-foreground/60 mt-2">
              最低支援金額: ¥{reward.amount.toLocaleString()}
            </p>
          </div>

          {/* Rewards Summary */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <h5 className="font-semibold text-foreground">受け取れる内容:</h5>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li className="flex gap-2">
                <span className="text-success font-bold">✓</span>
                <span>{reward.title}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success font-bold">✓</span>
                <span>支援者限定アップデート（メール）</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success font-bold">✓</span>
                <span>クレジットへのお名前掲載</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-4">
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg">
              支払いに進む
            </Button>
            <Button
              variant="outline"
              className="w-full border-border hover:bg-muted bg-transparent"
              onClick={onClose}
            >
              キャンセル
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="pt-4 border-t border-border text-center">
            <p className="text-xs text-foreground/60 flex items-center justify-center gap-2">
              <span>🔒</span> 安全な決済処理
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
