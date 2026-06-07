export default function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        © {year} {name} · Built with React + a little JavaScript personality.
      </p>
    </footer>
  );
}
