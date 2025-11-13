import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight">
          クリエイティブなアイデアを現実に
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          革新的なプロジェクトを発見して、クリエイターを直接支援しましょう。一緒に素晴らしいことを実現できます。
        </p>

        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          asChild
        >
          <Link href="#projects">プロジェクトを探す</Link>
        </Button>
      </div>
    </section>
  );
}
