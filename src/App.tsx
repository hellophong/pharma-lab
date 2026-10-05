import { ToolCard } from "./components/ToolCard";
import { tools } from "./data/tools";

export default function App() {
  return (
    <div className="page">
      <header className="masthead">
        <h1 className="masthead__title">Pharma Lab</h1>
        <p className="masthead__byline">Built by Phong</p>
        <p className="masthead__intro">AI-built tools for agency teams.</p>
      </header>

      <main>
        <ul className="grid" aria-label="Tools">
          {tools.map((tool) => (
            <li key={tool.id}>
              <ToolCard tool={tool} />
            </li>
          ))}
        </ul>
      </main>

      <footer className="footer">
        <p>Phong · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
