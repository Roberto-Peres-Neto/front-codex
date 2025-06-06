# Front Codex

This project demonstrates a simple React + TypeScript application organized with a clean architecture approach. The folders under `src/` are separated into `data`, `domain`, `infra`, `main` and `presentation`.

## Setup

1. Copy `.env.example` to `.env` and adjust the `VITE_BACKEND_URL` pointing to your backend.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Architecture

- **data** – API models and remote implementations of use cases.
- **domain** – Definitions of entities and use case contracts.
- **infra** – Infrastructure helpers (empty for now).
- **main** – Application entry point and factories to build use cases and modules.
- **presentation** – React components and pages.

## Dynamic Menu

Menu entries are loaded from `${import.meta.env.VITE_BACKEND_URL}/menu`. Each entry defines a route and module name. Clicking a menu item navigates to the respective route and renders the module component.

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
