// ────────────────────────────────────────────────────────────────────────────
// EDIT ME. This is the single source of truth for everything on the page.
// Swap the placeholder values below for your real details and you're done —
// no component code needs to change.
// ────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Quinn Krommenhoek",
  // Keep the bio short and full of personality — this is the voice of the page.
  bio: "Software developer who likes clean code, strong coffee, and shipping things that feel good to use.",
  // Drop an image in /public and reference it as "/your-photo.jpg", or use a URL.
  // Falls back to a generated monogram avatar if left empty.
  avatar: "",
  // Used to build the fallback monogram avatar.
  initials: "QK",
  location: "Earth",
  // Drop your PDF in /public and reference it here (e.g. "/resume.pdf").
  resumePdf: "/resume.pdf",
};

// Each link: { title, url, description, emoji }
// `emoji` is optional but adds personality and reads well on neo-brutalist cards.
export const links = [
  {
    title: "Portfolio",
    url: "https://example.com",
    description: "Selected work, case studies, and side projects.",
    emoji: "🌐",
  },
  {
    title: "GitHub",
    url: "https://github.com/Qkrommenhoek",
    description: "Code, commits, and the occasional weekend experiment.",
    emoji: "💻",
  },
  {
    title: "LinkedIn",
    url: "www.linkedin.com/in/quinn-krommenhoek-970bba248",
    description: "Experience, background, and professional updates.",
    emoji: "🔗",
  },
  {
    title: "Résumé",
    url: "/resume.pdf",
    description: "The one-page version (PDF).",
    emoji: "📄",
  },
  {
    title: "Email",
    url: "mailto:you@example.com",
    description: "Best way to reach me directly.",
    emoji: "✉️",
  },
];
