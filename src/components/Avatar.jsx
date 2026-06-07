import { useState } from "react";

// Shows the profile photo when available, otherwise a bold monogram so the
// page never renders a broken image. Also covers the case where a real `avatar`
// URL fails to load (onError flips us back to the monogram).
export default function Avatar({ src, initials, name }) {
  const [failed, setFailed] = useState(false);
  const showImage = src && !failed;

  if (showImage) {
    return (
      <img
        className="avatar"
        src={src}
        alt={`${name}'s profile photo`}
        onError={() => setFailed(true)}
        width="128"
        height="128"
      />
    );
  }

  return (
    <div className="avatar avatar--monogram" aria-label={`${name}'s initials`}>
      {initials}
    </div>
  );
}
