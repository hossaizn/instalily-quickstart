import { Link } from 'react-router-dom';

interface Props {
  showBackToHub?: boolean;
}

export default function Brand({ showBackToHub = false }: Props) {
  return (
    <header className="border-b border-ink/5">
      <div className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 text-ink hover:text-ink-soft transition-colors">
          <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          <span className="text-sm font-semibold tracking-tight">InstaWorker Quickstart</span>
          <span className="text-xs text-ink-faint hidden sm:inline">· concept</span>
        </Link>
        {showBackToHub && (
          <Link to="/" className="text-xs text-ink-muted hover:text-ink transition-colors">
            ← Back to application
          </Link>
        )}
      </div>
    </header>
  );
}
