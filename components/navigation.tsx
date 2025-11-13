import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="border-b border-border bg-card sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">
              16
            </span>
          </div>
          <span className="font-bold text-xl hidden sm:inline">
            PPR CrowdFunding
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <Link href="#projects">プロジェクトを探す</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
