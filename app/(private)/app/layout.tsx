import { AppProvider } from "@/app/_providers/app-provider";
import { AppLeftMenu } from "@/widgets/app-left-menu/app-left-menu";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <AppLeftMenu />
      {children}
    </AppProvider>
  );
}
