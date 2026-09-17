"use client";

import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Users, MessageSquare, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const times = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];
const guests = [1, 2, 3, 4, 5, 6, 7, 8, "9+"];

export function ReservationForm() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState<string>("19:00");
  const [partySize, setPartySize] = useState<string | number>(2);
  const [requests, setRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-12 bg-dark-200 rounded-2xl border border-dark-300"
      >
        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <CalendarIcon className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-3xl text-primary mb-4">Reservation Confirmed</h3>
        <p className="text-gray-400 mb-6">
          We look forward to hosting you on {date && format(date, "MMMM do, yyyy")} at {time}.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setStep(1);
          }}
          className="text-primary hover:text-white transition-colors"
        >
          Make another reservation
        </button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-dark-200 rounded-3xl p-6 md:p-10 shadow-2xl border border-dark-300/50">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4 text-sm font-medium text-gray-500">
          <span className={cn("transition-colors", step >= 1 ? "text-primary" : "")}>Details</span>
          <div className="flex-1 h-px bg-dark-300 mx-4" />
          <span className={cn("transition-colors", step >= 2 ? "text-primary" : "")}>Date & Time</span>
          <div className="flex-1 h-px bg-dark-300 mx-4" />
          <span className={cn("transition-colors", step >= 3 ? "text-primary" : "")}>Confirm</span>
        </div>
        <h2 className="font-serif text-3xl text-white mb-2">
          {step === 1 && "Party Size"}
          {step === 2 && "Select Date & Time"}
          {step === 3 && "Special Requests"}
        </h2>
      </div>

      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="flex items-center text-gray-400 mb-4 gap-2">
                  <Users className="w-4 h-4" />
                  <span>Number of Guests</span>
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {guests.map((g) => (
                    <button
                      key={g}
                      onClick={() => setPartySize(g)}
                      className={cn(
                        "py-3 rounded-xl border transition-all",
                        partySize === g
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-dark-300 text-gray-400 hover:border-gray-500 hover:text-white"
                      )}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <label className="flex items-center text-gray-400 mb-4 gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>Date</span>
                  </label>
                  <div className="bg-dark-300/30 p-4 rounded-2xl inline-block w-full flex justify-center">
                    <DayPicker
                      mode="single"
                      selected={date}
                      onSelect={(d) => d && setDate(d)}
                      disabled={{ before: new Date() }}
                      className="text-white !font-sans"
                      modifiersClassNames={{
                        selected: "!bg-primary !text-dark-100 font-medium rounded-full",
                        today: "text-primary font-bold",
                      }}
                      styles={{
                        caption: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" },
                        head_cell: { color: "#9ca3af", fontWeight: "normal", fontSize: "0.875rem" },
                        cell: { padding: "0.15rem" },
                        day: { width: "2.25rem", height: "2.25rem", borderRadius: "9999px", transition: "all 0.2s" },
                      }}
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <label className="flex items-center text-gray-400 mb-4 gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Time</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setTime(t)}
                        className={cn(
                          "py-2 px-4 rounded-xl border transition-all text-sm",
                          time === t
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-dark-300 text-gray-400 hover:border-gray-500 hover:text-white"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="bg-dark-300/30 p-6 rounded-2xl mb-8 border border-dark-300 text-sm">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Date</span>
                  <span className="text-white font-medium">{date && format(date, "MMMM do, yyyy")}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Time</span>
                  <span className="text-white font-medium">{time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Guests</span>
                  <span className="text-white font-medium">{partySize} people</span>
                </div>
              </div>

              <div>
                <label className="flex items-center text-gray-400 mb-4 gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Special Requests (Optional)</span>
                </label>
                <textarea
                  value={requests}
                  onChange={(e) => setRequests(e.target.value)}
                  placeholder="Dietary requirements, special occasions..."
                  className="w-full bg-dark-300/50 border border-dark-300 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all min-h-[120px] resize-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between mt-8 pt-8 border-t border-dark-300/50">
        {step > 1 ? (
          <button
            onClick={prevStep}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
        ) : (
          <div></div>
        )}

        {step < 3 ? (
          <button
            onClick={nextStep}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-dark-100 px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-dark-100 px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
          >
            {isSubmitting ? "Confirming..." : "Confirm Reservation"}
          </button>
        )}
      </div>
    </div>
  );
}
