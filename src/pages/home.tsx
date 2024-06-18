"use client";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { Button } from "@/shared/ui/button";
import { useQuery } from "@tanstack/react-query";

export function HomePage() {
  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: () => authControllerGetSessionInfo(),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Button</Button>
      {data?.email}
    </main>
  );
}
