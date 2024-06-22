import { LogoIcon } from "@/shared/ui/logo-icon";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <LogoIcon className="h-6 w-6" />
      <span className="font-bold inline-block">PushToLearn</span>
    </div>
  );
}
