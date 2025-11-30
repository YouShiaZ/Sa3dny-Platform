# Sa3dny / ساعدني Frontend Architecture

## Overview
- Platform: bilingual home-services marketplace with three roles only: **Client**, **Admin**, **Customer Support**.
- Stack: React 18 + Vite, React Router 6, Tailwind CSS, Framer Motion, Zustand, i18next, Axios, Lucide icons.
- Auth: mock email/password; role inferred from email (`admin` → admin, `support` → support, otherwise client).
- Data: mocked via `src/api/*` and `src/data/mockData.js`; replace with real Nest.js endpoints later.

## Folder Structure
- `src/api`: Axios client plus mock modules (`authApi`, `servicesApi`, `ordersApi`, `clientsApi`, `workersApi`, `reviewsApi`, `aiApi`).
- `src/components/common`: Design system primitives (Button, Card, Badge, Input/Select/TextArea, FileUpload, StatCard, ServiceCard, OrderCard, WorkerCard, Timeline, Modal, Table, LanguageSwitcher, IconWrapper).
- `src/components/layout`: Layouts per role (MainLayout, AdminLayout, SupportLayout, AuthLayout) and animated backgrounds.
- `src/pages/public`: Landing, About, FAQ, Contact, Services, ServiceDetails.
- `src/pages/auth`: Login, Register, ForgotPassword.
- `src/pages/client`: Dashboard, Profile, Addresses, ID Verification, Orders, Order Details, Reviews, Book Service.
- `src/pages/admin`: Dashboard, Services (+ form), Categories (+ form), Clients (+ detail), Workers (+ form/detail), Support Users (+ form/detail), Orders (+ detail), Reviews, Analytics, AI Insights, Settings.
- `src/pages/support`: Dashboard, Orders (+ detail), Workers (+ detail), Reviews, WhatsApp templates.
- `src/store`: Zustand stores (`authStore`, `uiStore`).
- `src/i18n`: i18next init plus `en/ar` translations.
- `src/router`: ProtectedRoute guard.
- `src/data`: Mock domain data.
- `docs/`: Architecture notes (this file).

## Routes & Layouts
- **Public (MainLayout)**: `/`, `/about`, `/faq`, `/contact`, `/services`, `/services/:id`.
- **Auth (AuthLayout)**: `/auth/login`, `/auth/register`, `/auth/forgot-password`.
- **Client (Protected + MainLayout)**: `/client/dashboard`, `/client/profile`, `/client/addresses`, `/client/id-verification`, `/client/orders`, `/client/orders/:id`, `/client/reviews`, `/client/book/:serviceId`.
- **Admin (Protected + AdminLayout)**: `/admin/dashboard`, `/admin/services`, `/admin/services/new`, `/admin/services/:id/edit`, `/admin/categories`, `/admin/categories/new`, `/admin/categories/:id/edit`, `/admin/clients`, `/admin/clients/:id`, `/admin/workers`, `/admin/workers/new`, `/admin/workers/:id`, `/admin/support-users`, `/admin/support-users/new`, `/admin/support-users/:id`, `/admin/support-users/:id/edit`, `/admin/orders`, `/admin/orders/:id`, `/admin/reviews`, `/admin/analytics`, `/admin/ai-insights`, `/admin/settings`.
- **Support (Protected + SupportLayout)**: `/support/dashboard`, `/support/orders`, `/support/orders/:id`, `/support/workers`, `/support/workers/:id`, `/support/reviews`, `/support/tools/whatsapp-templates`.

## Entities (frontend shapes)
- **User**: `{ email, name, role: "client"|"admin"|"support", token }`
- **ClientProfile**: `{ id, name, phone, email, addresses: [{label, location, notes}] }`
- **Address**: `{ label, location, notes? }`
- **ServiceCategory**: `{ id, name, description, icon }`
- **Service**: `{ id, name, categoryId, price, duration, rating, reviewsCount, highlights[] }`
- **Worker**: `{ id, name, phone, area, services[], level, rating, totalEarned }`
- **Order**: `{ id, clientName, categoryId, serviceId, status, date, address, total, paymentMethod, notes, workerId?, timeline[] }`
- **Review**: `{ id, client, service, rating, comment, sentiment }`
- **AiMatchingSuggestion**: `{ orderId, suggestedWorker, confidence, reason }`
- **SentimentSummary**: `{ positive, neutral, negative }`

## API Contracts (mocked now)
- `authApi.login({ email, password })` → `{ user }`; role inferred from email; token placeholder.
- `authApi.register(payload)` → `{ success, ...payload }`.
- `authApi.forgotPassword(email)` → `{ success, email }`.
- `servicesApi.getCategories()` → `ServiceCategory[]`.
- `servicesApi.getServices()` / `getServiceById(id)` → `Service`.
- `ordersApi.getOrders()` / `getOrderById(id)` / `getClientOrders(clientName)` → `Order[]`.
- `ordersApi.createOrder(payload)` → new `Order` with `submitted` status.
- `ordersApi.updateStatus(id, status)` → updated `Order` with appended timeline entry.
- `ordersApi.assignWorker(id, workerId)` → updated `Order` with worker info.
- `clientsApi.getClients()` / `getClientById(id)` / `updateClient(id, payload)`.
- `workersApi.getWorkers()` / `getWorkerById(id)` / `createWorker(payload)` / `updateWorker(id, payload)`.
- `reviewsApi.getReviews()` / `createReview(payload)`.
- `aiApi.getSuggestions()` → `AiMatchingSuggestion[]`; `aiApi.getSentimentSummary()` → `SentimentSummary`.

## Theming
- Tailwind custom palette:
  - **User** (public/client): teal/green on `#F0FDFD`, animated wave background.
  - **Admin**: indigo/purple on `#F8F9FF`, gradient flow background.
  - **Support**: warm orange on `#FFF3E0`, floating particle background.
- Components accept `tone` (`user`|`admin`|`support`) for contextual colors.

## Internationalization
- i18next with `en` and `ar` resources under `src/i18n`.
- Direction handled via `uiStore` + `document.documentElement.dir`; language persisted in `localStorage` (`sa3dny-lang`).
- All UI strings pulled from translations; data values (names, notes) are mock content.
- LanguageSwitcher toggles Arabic/English in navbar and admin/support sidebars.

## State & Auth
- Zustand `authStore`: holds `user`, `isAuthenticated`, mock `login/logout`.
- Mock auth rule: emails containing `admin` → admin; containing `support` → support; otherwise client.
- `ProtectedRoute` gates routes by role and redirects to login with `location.state`.
- `uiStore`: language + theme selection (theme set per layout).

## Animated UX & Design System
- Framer Motion for hero cards and modals; Tailwind utilities for spacing/typography.
- Reusable primitives (Button, Card, Badge, Table, Timeline, FileUpload, Modal) to keep pages lean.
- Layouts provide consistent navigation, search/profile header (admin/support), and footer (public/client).

## Backend Integration Notes (Nest.js + PostgreSQL)
- Replace `mockResponse` calls in `src/api/*` with real Axios requests; keep response shapes consistent with entities above.
- Suggested relations:
  - `Order` belongs to `User(Client)` and `Service`; optional `Worker`.
  - `Review` belongs to `Order` and `User`.
  - `Worker` has many `Service` skills; earnings and ratings aggregated from orders.
  - `SupportUser` managed by admin; actions logged for payment confirmations and reassignments.
- Environment config: `VITE_API_BASE_URL` for Axios base URL; auth tokens should be stored securely (httpOnly cookie or bearer header).

## How to Plug a Real Backend
- Swap mock API functions with real HTTP calls in `src/api/*`; keep promise signatures intact.
- Wire auth guard to real JWT/session; redirect unauthenticated users accordingly.
- Replace mock data in `src/data/mockData.js` with real fetches + caching, or move to SWR/React Query if preferred.
- Add form validation and error handling around API calls; current UI uses optimistic flows for demo.

## Testing & Accessibility Notes
- Pages are responsive with Tailwind grid/flex; direction toggles RTL/LTR.
- Inputs use clear labels and high-contrast color tokens for each theme.
- Timeline, badges, and cards show status and payment state for clarity.
