import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  emoji?: string;
  icon?: LucideIcon;
  label: string;
  onClick: () => void;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  disabled?: boolean;
}

export function ActionButton({ 
  emoji,
  icon: Icon, 
  label, 
  onClick, 
  variant = "default", 
  className,
  disabled 
}: ActionButtonProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      className={cn(
        "flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-base sm:text-lg h-auto py-4 sm:py-6 px-6 sm:px-8",
        "rounded-2xl font-bold transition-all duration-300",
        "shadow-md hover:shadow-lg active:scale-95",
        variant === "default" && "bg-duo-500 hover:bg-duo-600 active:bg-duo-700",
        variant === "outline" && "hover:bg-gray-50 border-gray-300 hover:border-gray-400 hover:shadow-xl hover:scale-[1.02] text-gray-700",
        className
      )}
      disabled={disabled}
    >
      <div className="flex items-center gap-3">
        {emoji ? (
          <span className="text-2xl sm:text-4xl">{emoji}</span>
        ) : Icon && (
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" />
        )}
        <span>{label}</span>
      </div>
    </Button>
  );
}