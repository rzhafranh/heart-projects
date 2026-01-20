import React, { useState } from 'react';
import { ChevronRight, Heart, Sparkles, Send, Mail } from 'lucide-react';

const QUESTIONS = [
  { id: 1, question: "What were your first impressions of me?", placeholder: "..." },
  { id: 2, question: "What is one thing about me that surprised you as you got to know me better?", placeholder: "..." },
  { id: 3, question: "What is your hope for our journey ahead?", placeholder: "..." }
];

export default function Quiz({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = (val) => {
    const newAnswers = { ...answers, [QUESTIONS[step].id]: val };
    setAnswers(newAnswers);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      submitToAdmin(newAnswers);
    }
  };

  const submitToAdmin = async (finalAnswers) => {
    setIsSubmitting(true);
    
    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1462330527720935500/L-axCsu-rezf0xIZNA7tj9SmUXqozWnVhWbRVwecIljzCuWqritp7H8R5aSILpnbVhu3";

    const message = {
      content: "💌 **A New Letter has arrived!**",
      embeds: [{
        title: "Heart-to-Heart Responses",
        description: "Someone just completed the journey through your questions.",
        color: 15548997, // A nice Rose Red color
        fields: Object.keys(finalAnswers).map(key => ({
          name: `Message ${key}`,
          value: finalAnswers[key],
          inline: false
        })),
        footer: { text: "Endurance Gate • Romantic Protocol" }
      }]
    };

    try {
      await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
      });
      onComplete();
    } catch (err) {
      console.error("Failed to send", err);
      onComplete();
    }
  };

  const currentQ = QUESTIONS[step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-600 px-6 relative overflow-hidden font-pixel">
      
      {/* --- ROMANTIC BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 animate-float-slow"><Heart className="text-white" size={40} /></div>
        <div className="absolute bottom-20 right-20 animate-float-delayed"><Mail className="text-white" size={60} /></div>
        <div className="absolute top-1/2 left-1/4 animate-float"><Sparkles className="text-white" size={30} /></div>
        {/* Breathing Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-rose-400/30 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-xl w-full relative z-10" data-aos="fade-up">
        {/* Progress Header */}
        <div className="flex items-center gap-4 mb-6">
            <div className="h-px grow bg-rose-400/50"></div>
            <p className="text-rose-200 uppercase tracking-[0.3em] text-xs">Chapter {step + 1} of {QUESTIONS.length}</p>
            <div className="h-px grow bg-rose-400/50"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-10 leading-tight text-white text-center">
          {currentQ.question}
        </h2>

        <div className="space-y-6">
          <div className="relative group">
            <textarea
              autoFocus
              key={`input-${currentQ.id}`} 
              className="w-full bg-white/10 backdrop-blur-md border-2 border-rose-400/30 rounded-3xl p-6 text-white text-xl font-sans resize-none h-48 outline-none focus:border-white/60 focus:bg-white/20 transition-all placeholder:text-rose-300/50"
              placeholder={currentQ.placeholder}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  if (e.target.value.trim()) {
                    handleNext(e.target.value);
                    e.target.value = "";
                  }
                }
              }}
            />
            {/* Soft decorative corner */}
            <div className="absolute top-0 right-0 p-4 opacity-20 group-focus-within:opacity-50 transition-opacity">
                <Sparkles className="text-white" size={20} />
            </div>
          </div>

          <div className="flex justify-between items-center px-2">
            <p className="text-rose-200/60 text-xs italic">Press ENTER to send this thought</p>
            <Heart className="text-rose-300 animate-pulse" size={16} fill="currentColor" />
          </div>
        </div>

        {isSubmitting && (
          <div className="mt-12 flex flex-col items-center gap-4 text-white italic">
            <div className="flex gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></div>
            </div>
            <p className="text-sm tracking-widest uppercase opacity-80">Whispering your words to the stars...</p>
          </div>
        )}
      </div>
    </div>
  );
}