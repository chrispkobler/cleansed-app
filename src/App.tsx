import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CrossroadPage from "./pages/CrossroadPage";
import ReflectionPage from "./pages/ReflectionPage";

const queryClient = new QueryClient();

export default () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/crossroad" element={<CrossroadPage />} />
          <Route path="/reflection" element={<ReflectionPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);