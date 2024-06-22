import { Button } from "@/shared/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "@/shared/ui/sheet";
import { Menu } from "lucide-react";

export function Layout({
  logo,
  nav,
  profile,
  actions,
}: {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  profile?: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <header>
        <div className="container flex items-center flex-col">
          <div className="mr-4">{logo}</div>
          <div className="items-center flex-1 flex">
            <div className="hidden md:flex">{nav}</div>
            <div className="flex flex-1 items-center justify-end space-x-3 ">
              {actions}
              {profile}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
