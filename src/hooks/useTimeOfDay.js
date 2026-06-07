import { useEffect, useState } from "react";

// The four "moods" of the day. Each owns a greeting, an emoji, and an accent
// palette that gets piped into CSS custom properties so the whole page reskins
// itself depending on when you visit.
const PERIODS = [
  {
    id: "night",
    // 0–5: late night
    test: (h) => h < 5,
    greeting: "Burning the midnight oil",
    emoji: "🌙",
    accent: "#9b7bff",
    accentDeep: "#5a3fd6",
  },
  {
    id: "morning",
    // 5–11
    test: (h) => h < 12,
    greeting: "Good morning",
    emoji: "☀️",
    accent: "#ff8a3d",
    accentDeep: "#e85d04",
  },
  {
    id: "afternoon",
    // 12–16
    test: (h) => h < 17,
    greeting: "Good afternoon",
    emoji: "🌤️",
    accent: "#19c0a8",
    accentDeep: "#0a8f7c",
  },
  {
    id: "evening",
    // 17–23
    test: () => true,
    greeting: "Good evening",
    emoji: "🌆",
    accent: "#ff5d8f",
    accentDeep: "#c9184a",
  },
];

function resolvePeriod(date) {
  const hour = date.getHours();
  return PERIODS.find((p) => p.test(hour)) ?? PERIODS[PERIODS.length - 1];
}

/**
 * Returns the current time-of-day "mood" (greeting, emoji, accent colors) plus
 * a live-ticking clock string. Re-evaluates every 30s so the page can cross a
 * period boundary without a refresh.
 */
export function useTimeOfDay() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const period = resolvePeriod(now);
  const clock = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return { ...period, clock };
}
