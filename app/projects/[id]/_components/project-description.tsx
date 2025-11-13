import type { Project } from "@/lib/types";

export function ProjectDescription({ project }: { project: Project }) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
          概要
        </h2>
        <p className="text-base text-foreground/80 leading-relaxed mb-6">
          {project.story}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">
          なぜこのプロジェクトが重要なのか
        </h3>
        <p className="text-base text-foreground/80 leading-relaxed">
          このプロジェクトはテック空間の革新を表しています。このプロジェクトを支援することで、
          あなたはただ製品を手に入れるだけでなく、創造的な心をサポートし、可能なことの限界を押し広げています。
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-foreground mb-4">
          プロジェクト遂行に向けて
        </h3>
        <ul className="space-y-3 text-foreground/80">
          <li className="flex gap-3">
            <span className="text-success font-bold">✓</span>
            <span>完全にデザインされ、テストされた</span>
          </li>
          <li className="flex gap-3">
            <span className="text-success font-bold">✓</span>
            <span>製造パートナーシップが整っている</span>
          </li>
          <li className="flex gap-3">
            <span className="text-success font-bold">✓</span>
            <span>配達タイムラインが確立されている</span>
          </li>
          <li className="flex gap-3">
            <span className="text-success font-bold">✓</span>
            <span>実績のあるチーム</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
