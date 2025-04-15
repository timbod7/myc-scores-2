# UI (React App)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Libraries

The Mycscores UI does not specify any particular philosophy or libraries for building your applications. It provides a minimal technical demonstration of ADLs typesafe RPC capabilities by implementing a simple message board system.

Notably, Mycscores UI does not choose solutions for:

- Themeing and component libraries
- State management
- Data fetching and caching
- Client-side routing

The `src/service` implementation of data fetching is lightweight and can be easily replaced with a fetching library of your choice. It is recommended to generate an API service from the `ApiRequests` struct in the mycscores.apis.ui module by writing a custom code generator in the Deno directory.

## Development

```bash
cd ts
pnpm install
cd ui
pnpm run dev
```

The application will be available at http://localhost:5173

## Building for Production

```bash
npm run build
```
