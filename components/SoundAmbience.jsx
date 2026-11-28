"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SoundAmbience() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const oscRef = useRef(null);

  const toggleSound = () => {
    if (isPlaying) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1.2);
        setTimeout(() => {
          setIsPlaying(false);
        }, 1200);
      } else {
        setIsPlaying(false);
      }
    } else {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Buffer for soft sea breeze / wave surf sound
        const bufferSize = ctx.sampleRate * 3;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          data[i] = (lastOut + 0.02 * white) / 1.02;
          lastOut = data[i];
          data[i] *= 2.8; // Pink/brown ocean swell curve
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        // Low-pass filter to sound like underwater marine swell & gentle waves
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 380;
        filter.Q.value = 1.2;

        // Low frequency oscillator for wave swell motion (0.14 Hz = 1 wave every ~7 seconds)
        const lfo = ctx.createOscillator();
        lfo.frequency.value = 0.14;
        const lfoGain = ctx.createGain();
        lfoGain.gain.value = 240;
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        // Master Gain
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.linearRampToValueAtTime(0.09, ctx.currentTime + 2.0); // Gentle background volume
        gainNodeRef.current = masterGain;

        noise.connect(filter);
        filter.connect(masterGain);
        masterGain.connect(ctx.destination);

        noise.start(0);
        lfo.start(0);
        oscRef.current = noise;

        setIsPlaying(true);
      } catch (err) {
        console.warn("Audio Context init prevented:", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? t("sound_title_mute") : t("sound_title_enable")}
      className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-[#C6A66B]/30 bg-[#12352D]/80 backdrop-blur-md text-[10px] tracking-[0.22em] text-[#C6A66B] hover:border-[#C6A66B] hover:text-[#D4B87E] transition-all group shadow-lg"
    >
      {isPlaying ? (
        <>
          {/* Active Animated Sound Wave Bars */}
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 bg-[#C6A66B] h-3 animate-[pulse_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 bg-[#D4B87E] h-2 animate-[pulse_1.2s_ease-in-out_infinite_0.2s]" />
            <span className="w-0.5 bg-[#C6A66B] h-3.5 animate-[pulse_0.9s_ease-in-out_infinite_0.4s]" />
            <span className="w-0.5 bg-[#D4B87E] h-1.5 animate-[pulse_1.1s_ease-in-out_infinite_0.1s]" />
          </div>
          <span className="hidden sm:inline font-mono font-medium text-[#D4B87E]">{t("sound_on")}</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#F5F0E5]/50 group-hover:text-[#C6A66B] transition-colors" />
          <span className="hidden sm:inline text-[#F5F0E5]/70 font-mono">{t("sound_off")}</span>
        </>
      )}
    </button>
  );
}
