import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoodStep } from "@/components/daily-checkin/MoodStep";
import { MissionStep } from "@/components/daily-checkin/MissionStep";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { TemptationTypeSelector } from "@/components/reflection/TemptationTypeSelector";
import { TemptationLevelStep } from "@/components/reflection/TemptationLevelStep";
import { Mascot } from "@/components/dashboard/Mascot";

export default function DailyCheckinPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState<number[]>([50]);
  const [description, setDescription] = useState("");
  const [selectedTemptation, setSelectedTemptation] = useState("");
  const [temptationLevel, setTemptationLevel] = useState<number[]>([50]);
  const [selectedStatement, setSelectedStatement] = useState("");

  const handleNext = () => {
    if (step === 4) {
      // Submit the check-in
      toast({
        title: "Check-in Complete!",
        description: "Thank you for your daily check-in.",
      });
      navigate('/');
    } else {
      setStep(step + 1);
    }
  };

  const isNextDisabled = () => {
    if (step === 2) return !selectedTemptation;
    if (step === 3) return temptationLevel.length === 0;
    if (step === 4) return !selectedStatement;
    return false;
  };

  const getMascotMessage = () => {
    switch (step) {
      case 1:
        return "How are you feeling today? Let's start with your mood.";
      case 2:
        return "What challenges are you facing? I'm here to support you.";
      case 3:
        return "Understanding your temptation level helps us support you better.";
      case 4:
        return "Let's end with your daily affirmation. You're doing great!";
      default:
        return "Let's do your daily check-in together!";
    }
  };

  const getStepContent = () => {
    switch (step) {
      case 1:
        return (
          <MoodStep
            mood={mood}
            description={description}
            onMoodChange={setMood}
            onDescriptionChange={setDescription}
          />
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center text-primary">Today's Biggest Challenge</h2>
            <p className="text-center text-muted-foreground mb-6">
              What type of temptation are you struggling with the most today?
            </p>
            <TemptationTypeSelector
              value={selectedTemptation}
              onChange={setSelectedTemptation}
            />
          </div>
        );
      case 3:
        return (
          <TemptationLevelStep
            sliderValue={temptationLevel}
            temptationLevel={getTemptationLevelText(temptationLevel[0])}
            onSliderChange={setTemptationLevel}
          />
        );
      case 4:
        return (
          <MissionStep
            selectedStatement={selectedStatement}
            onStatementChange={setSelectedStatement}
          />
        );
      default:
        return null;
    }
  };

  const getTemptationLevelText = (value: number) => {
    if (value <= 25) return "Low - I can resist easily";
    if (value <= 50) return "Medium - It's challenging but manageable";
    if (value <= 75) return "High - I struggle significantly";
    return "Severe - Almost impossible to resist";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-primary/10 p-4 sm:p-6 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <Mascot 
          message={getMascotMessage()} 
          className="mb-6"
        />
        
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-primary/20">
          <Progress value={(step / 4) * 100} className="w-full" />
          
          <div className="space-y-6 mt-6">
            {getStepContent()}
          </div>

          <div className="flex justify-between mt-6 pt-6 border-t border-primary/20">
            <Button
              variant="outline"
              onClick={() => (step === 1 ? navigate('/') : setStep(step - 1))}
              className="bg-white/50 hover:bg-white/80"
            >
              {step === 1 ? "Cancel" : "Back"}
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={isNextDisabled()}
              className="bg-primary hover:bg-primary/90"
            >
              {step === 4 ? "Complete" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}