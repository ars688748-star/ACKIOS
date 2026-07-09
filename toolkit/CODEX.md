\# ACKI-FAN Studio — Codex Build Instructions



\## Repository



This repository already exists.



DO NOT create a new project.



Work only inside the current repository.



Current stack:



\- Electron

\- Electron Vite

\- React 19

\- TypeScript

\- Electron Builder

\- Vite 7



Existing files such as package.json, electron.vite.config.ts and src/ must remain.



\---



\# Mission



Transform the default Electron template into a production-quality desktop application called \*\*ACKI-FAN Studio\*\*.



The application must resemble professional desktop software (VS Code, Docker Desktop, GitHub Desktop).



\---



\# Development Rules



\- Never generate placeholder code.

\- Never generate TODO comments.

\- Every generated file must compile.

\- Keep TypeScript strict.

\- Use reusable components.

\- Prefer composition over duplication.

\- Never break existing build.



After every major step run:



npm run build



Fix every error before continuing.



\---



\# Folder Structure



Create or populate these folders inside:



src/renderer/src



components/

&#x20; layout/

&#x20; ui/

&#x20; dashboard/

&#x20; terminal/



pages/

&#x20; Dashboard/

&#x20; Wallet/

&#x20; Markets/

&#x20; Dexdo/

&#x20; AI/

&#x20; Explorer/

&#x20; Terminal/

&#x20; Logs/

&#x20; Settings/



router/

store/

hooks/

services/

styles/

types/



\---



\# Phase 1



Replace default Electron demo.



Create:



\- Layout

\- Sidebar

\- TopBar

\- StatusBar

\- Dashboard page



Create a professional dark theme.



Sidebar items:



\- Dashboard

\- Wallet

\- Markets

\- DEXDO

\- AI

\- Explorer

\- Terminal

\- Logs

\- Settings



\---



\# Phase 2



Add React Router.



Every menu item must navigate.



Dashboard becomes home page.



\---



\# Phase 3



Create reusable UI components.



Examples:



\- Card

\- Button

\- Badge

\- Panel

\- Loader

\- Notification



\---



\# Phase 4



Create Zustand store.



Store:



\- theme

\- connection

\- wallet

\- settings



\---



\# Phase 5



Prepare Electron IPC.



Do not implement blockchain yet.



Only create architecture.



\---



\# Phase 6



Create service layer.



services/



wallet.service.ts



dexdo.service.ts



settings.service.ts



ipc.service.ts



\---



\# Phase 7



Create Terminal page.



Support future command execution.



No real commands yet.



\---



\# Phase 8



Create Logs page.



Support live log viewer.



\---



\# Phase 9



Create Settings page.



Settings include:



\- Theme

\- Network

\- Dexdo executable path

\- Wallet path

\- Auto update



\---



\# Phase 10



Prepare DEXDO integration.



Create interfaces only.



No blockchain implementation yet.



\---



\# Design



Dark theme.



Primary



\#2563EB



Background



\#0F172A



Sidebar



\#111827



Success



\#10B981



Warning



\#F59E0B



Danger



\#EF4444



\---



\# Documentation



Update:



README.md



Create:



ARCHITECTURE.md



ROADMAP.md



CHANGELOG.md



\---



\# Build



When implementation finishes:



Run



npm run build



Fix every error.



Repeat until build succeeds.



Do not stop after one task.



Continue through all phases automatically.



Only stop when Phase 10 is complete.

