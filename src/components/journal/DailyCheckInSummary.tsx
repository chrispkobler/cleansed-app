import { format } from "date-fns";
import { Flame } from "lucide-react";
import { getMoodEmoji } from "./EntryDetailsDialog";
import { getSinEmoji } from "@/utils/sinEmoji";

interface DailyCheckInSummaryProps {
  entry: {
    date: Date;
    trigger: string;
    level: string;
    mood?: number;
  };
}

export const DailyCheckInSummary = ({ entry }: DailyCheckInSummaryProps) => {
  return (
    <div className="space-y-3">
      <div className="bg-primary/5 p-3 rounded-xl border border-primary/10">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-primary">Mood</p>
          <span className="text-2xl">{getMoodEmoji(entry.mood)}</span>
        </div>
        <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${entry.mood}%` }}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white p-3 rounded-xl border">
          <p className="text-xs font-semibold text-primary mb-1">Challenge</p>
          <div className="flex items-center gap-2">
            <span className="text-xl">{getSinEmoji(entry.trigger)}</span>
          </div>
        </div>
        
        <div className="bg-white p-3 rounded-xl border">
          <p className="text-xs font-semibold text-primary mb-1">Intensity</p>
          <div className="flex items-center gap-2">
            <Flame 
              className="h-6 w-6 text-orange-500" 
              style={{ 
                opacity: parseInt(entry.level) / 100 
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};