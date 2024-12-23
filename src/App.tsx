import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { DailyCheckinPage } from "./pages/DailyCheckinPage";
import { CrossroadPage } from "./pages/CrossroadPage";
import { PastTemptationPage } from "./pages/PastTemptationPage";
import { ReflectionPage } from "./pages/ReflectionPage";
import { JournalPage } from "./pages/JournalPage";
import { SettingsPage } from "./pages/SettingsPage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { BottomNav } from "./components/ui/BottomNav";
import { Toaster } from "./components/ui/Toaster";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/daily-checkin" element={<DailyCheckinPage />} />
        <Route path="/crossroad" element={<CrossroadPage />} />
        <Route path="/past-temptation" element={<PastTemptationPage />} />
        <Route path="/reflection" element={<ReflectionPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
      <BottomNav />
      <Toaster />
    </Router>
  );
}

export default App;
