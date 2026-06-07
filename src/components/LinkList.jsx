import LinkCard from "./LinkCard.jsx";

export default function LinkList({ links }) {
  return (
    <nav aria-label="My links">
      <ul className="link-list">
        {links.map((link) => (
          <LinkCard key={link.url} {...link} />
        ))}
      </ul>
    </nav>
  );
}
