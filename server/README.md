Minimal Express server for AI-Cooking-Website

Run locally:

1. Install dependencies:

```bash
cd server
npm install
```

2. Start in development mode:

```bash
npm run dev
```

The server will attempt to serve the frontend from `../frontend/dist` or `../frontend/build` if a production build exists. It also exposes a simple health endpoint at `/api/health`.
