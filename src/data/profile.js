// ────────────────────────────────────────────────────────────────────────────
// EDIT ME. This is the single source of truth for everything on the page.
// Swap the placeholder values below for your real details and you're done —
// no component code needs to change.
// ────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Quinn Krommenhoek",
  // Keep the bio short and full of personality — this is the voice of the page.
  bio: "Software developer who loves to surf, find new music, and develop strong backends with Spring",
  
  // Falls back to a generated monogram avatar if left empty.
  avatar: "",
  // Used to build the fallback monogram avatar.
  initials: "QK",
  location: "California",
  resumePdf: "/qkresume.pdf",
};

// Each link: { title, url, description, emoji }
export const links = [
  {
    title: "Related Work",
    url: "https://webspace.csumb.edu/~krom2772/AdaptiveMoE/",
    description: "Supporting application for my paper accepted by HCII 2026",
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
    url: "https://www.linkedin.com/in/quinn-krommenhoek-970bba248",
    description: "Experience, background, and professional updates.",
    emoji: "🔗",
  },
  {
    title: "Résumé",
    url: "/qkresume.pdf",
    description: "Open in a new tab",
    emoji: "📄",
  },
  {
    title: "Email",
    url: "mailto:qkrommenhoek@gmail.com",
    description: "Best way to reach me directly.",
    emoji: "✉️",
  },
];
