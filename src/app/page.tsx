"use client";
import HomeModule from "@/modules/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <HomeModule />
      </div>
    </QueryClientProvider>
  );
}
