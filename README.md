# InstaWorker Quickstart

A self-serve top-of-funnel concept for [InstaLILY](https://instalily.ai), built in a weekend as the artifact for a Product Associate application.

## Links

- **Live application hub:** [hossaizn.github.io/instalily-quickstart](https://hossaizn.github.io/instalily-quickstart)
- **Live Quickstart demo:** [hossaizn.github.io/instalily-quickstart/quickstart](https://hossaizn.github.io/instalily-quickstart/quickstart)
- **Resume:** [hossaizn.github.io/instalily-quickstart/resume.html](https://hossaizn.github.io/instalily-quickstart/resume.html)
- **PRD:** [docs/application-prd.md](docs/application-prd.md)

## What this is

A five-screen web flow that turns a frontline operator's workflow description into a draft InstaWorker spec, graded against the only public InstaLILY case study (SRS Distribution). The spec is built to be forwarded rep to boss to procurement, generating multi-stakeholder demand on top of the existing Book a Demo channel.

The full reasoning, anticipated objections, success metrics, and roadmap are in [the PRD](docs/application-prd.md). The strategic frame and context for the submission are in the [application hub](https://hossaizn.github.io/instalily-quickstart).

## Stack

React 19 · TypeScript · Vite · Tailwind 3 · Framer Motion · React Router 7. Static SPA, no backend, no API keys. Deployed via `gh-pages` to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/`.

## Repo structure

```text
src/
├── App.tsx                       # Router (/ = hub, /quickstart = demo)
├── pages/
│   ├── ApplicationHub.tsx        # The submission hub at /
│   └── Quickstart.tsx            # 5-screen orchestrator at /quickstart
├── components/quickstart/        # The 5 screens
├── lib/
│   ├── types.ts                  # State and output type shapes
│   ├── templates.ts              # Archetype catalog + spec generation
│   └── storage.ts                # localStorage persistence
public/resume.html                # Standalone polished HTML resume
docs/application-prd.md           # Strategic PRD for the submission
```

## Notes

Built solo by Zulqarnayan Hossain. Not officially affiliated with InstaLILY. No InstaLILY assets used; all references are to the publicly available SRS Distribution case study and InstaLILY's published architecture.
