// A single link. Internal-looking links (mailto:, relative paths like the
// résumé PDF) skip the new-tab treatment; external links open safely.
export default function LinkCard({ title, url, description, emoji }) {
  const isExternal = /^https?:\/\//i.test(url);

  return (
    <li className="link-card">
      <a
        className="link-card__anchor"
        href={url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {emoji && (
          <span className="link-card__emoji" aria-hidden="true">
            {emoji}
          </span>
        )}
        <span className="link-card__text">
          <span className="link-card__title">{title}</span>
          {description && (
            <span className="link-card__description">{description}</span>
          )}
        </span>
        <span className="link-card__arrow" aria-hidden="true">
          →
        </span>
      </a>
    </li>
  );
}
