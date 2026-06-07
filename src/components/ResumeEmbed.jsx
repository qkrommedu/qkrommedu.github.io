import { useState } from "react";

export default function ResumeEmbed({ src }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="resume-embed">
      <button
        type="button"
        className="resume-embed__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {open ? "Hide Resume" : "View Resume"}
      </button>
      {open && (
        <iframe
          className="resume-embed__frame"
          src={src}
          title="Resume"
        />
      )}
    </div>
  );
}
