interface Props {
  current: number;
  total: number;
}

export default function ProgressDots({ current, total }: Props) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Step ${current} of ${total}`}>
      {Array.from({ length: total }).map((_, i) => {
        const idx = i + 1;
        const done = idx < current;
        const active = idx === current;
        return (
          <span
            key={i}
            className={[
              'h-1 rounded-full transition-all duration-300',
              active ? 'w-8 bg-ink' : done ? 'w-2 bg-ink' : 'w-2 bg-ink/15',
            ].join(' ')}
          />
        );
      })}
    </div>
  );
}
