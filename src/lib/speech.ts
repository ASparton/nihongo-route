"use client";

let cachedVoice: SpeechSynthesisVoice | null = null;
let voiceCheckDone = false;
const listeners = new Set<(hasVoice: boolean) => void>();

function pickVoice() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return;
  cachedVoice =
    voices.find((v) => v.lang?.toLowerCase().startsWith("ja")) ?? null;
  voiceCheckDone = true;
  listeners.forEach((fn) => fn(Boolean(cachedVoice)));
}

export function isSpeechSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function onVoiceStatus(fn: (hasVoice: boolean) => void) {
  if (!isSpeechSupported()) {
    fn(false);
    return () => {};
  }
  listeners.add(fn);
  if (voiceCheckDone) {
    fn(Boolean(cachedVoice));
  } else {
    pickVoice();
    window.speechSynthesis.onvoiceschanged = pickVoice;
    if (voiceCheckDone) fn(Boolean(cachedVoice));
  }
  return () => listeners.delete(fn);
}

export function speak(text: string, onEnd?: () => void) {
  if (!isSpeechSupported()) {
    onEnd?.();
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.85;
  if (cachedVoice) utterance.voice = cachedVoice;
  if (onEnd) utterance.onend = onEnd;
  window.speechSynthesis.speak(utterance);
}

export function speakSequence(lines: string[]) {
  let i = 0;
  function next() {
    if (i >= lines.length) return;
    const line = lines[i];
    i += 1;
    speak(line, next);
  }
  next();
}
