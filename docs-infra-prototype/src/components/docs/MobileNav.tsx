import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import DocsSidebar from "./DocsSidebar.astro"

export function MobileNav({ currentPath }: { currentPath: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" aria-label="Open Menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] p-0">
        <div className="h-full overflow-y-auto py-6 px-4">
          <DocsSidebar currentPath={currentPath} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
