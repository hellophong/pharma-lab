import type { Tool, ToolStatus } from "../data/tools";

const statusLabel: Record<ToolStatus, string> = {
  live: "Live",
  prototype: "Prototype",
  "coming-soon": "Coming soon",
};

export function ToolCard({ tool }: { tool: Tool }) {
  const isOpen = tool.status !== "coming-soon" && Boolean(tool.url);

  return (
    <article className={`card card--${isOpen ? "open" : "placeholder"}`}>
      <span className={`tag tag--${tool.status}`}>
        {statusLabel[tool.status]}
      </span>
      <h2 className="card__title">{tool.name}</h2>
      <p className="card__description">{tool.description}</p>
      {isOpen && (
        // The link's ::after stretches over the card, so the whole card is clickable.
        <a
          className="card__link"
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${tool.name} (opens in a new tab)`}
        >
          Open <span aria-hidden="true">→</span>
        </a>
      )}
    </article>
  );
}
