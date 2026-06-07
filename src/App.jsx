import { useEffect } from "react";
import Profile from "./components/Profile.jsx";
import LinkList from "./components/LinkList.jsx";
import Footer from "./components/Footer.jsx";
import ResumeEmbed from "./components/ResumeEmbed.jsx";
import { useTimeOfDay } from "./hooks/useTimeOfDay.js";
import { profile, links } from "./data/profile.js";

export default function App() {
  const mood = useTimeOfDay();

  // Pipe the time-of-day accent into CSS custom properties so the entire
  // stylesheet reskins itself — borders, glows, and highlights all follow.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", mood.accent);
    root.style.setProperty("--accent-deep", mood.accentDeep);
    root.dataset.period = mood.id;
  }, [mood.accent, mood.accentDeep, mood.id]);

  return (
    <div className="page">
      {/* Decorative animated blobs that tint to the current accent color. */}
      <div className="page__backdrop" aria-hidden="true">
        <span className="blob blob--one" />
        <span className="blob blob--two" />
      </div>

      <main className="card">
        <Profile profile={profile} mood={mood} />
        <LinkList links={links} />
        <ResumeEmbed src={profile.resumePdf} />
        <Footer name={profile.name} />
      </main>
    </div>
  );
}
