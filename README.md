# Help Study Abroad – Frontend Technical Assessment

This repository contains a **frontend technical assessment project** built using **Next.js (App Router)**, **Material UI (MUI)**, **Zustand**, **NextAuth**, and **DummyJSON public APIs**.

This README reflects a **final code review**, a clear documentation aligned with industry best practices and the assessment requirements.

---

## Project Objective

To build a modern, scalable, and responsive frontend application that:

* Implements authentication and protected routes
* Displays Users and Products data from public APIs
* Supports pagination, search, and filtering
* Uses Zustand for global state management
* Follows clean code principles and proper project structure

---

## Tech Stack

| Technology               | Purpose                        |
| ------------------------ | ------------------------------ |
| **Next.js (App Router)** | Routing, SSR, app structure    |
| **Material UI (MUI)**    | UI components & responsiveness |
| **Zustand**              | Global state management        |
| **NextAuth**             | Authentication                 |
| **DummyJSON API**        | Backend data source            |

---

## Public APIs Used (DummyJSON)

### Authentication

* `POST https://dummyjson.com/auth/login`

### Users

* List: `GET https://dummyjson.com/users?limit=10&skip=0`
* Search: `GET https://dummyjson.com/users/search?q=...`
* Single User: `GET https://dummyjson.com/users/{id}`

### Products

* List: `GET https://dummyjson.com/products?limit=10&skip=0`
* Search: `GET https://dummyjson.com/products/search?q=...`
* Category Filter: `GET https://dummyjson.com/products/category/{category}`
* Single Product: `GET https://dummyjson.com/products/{id}`

---

## ✨ Features Implemented

### Authentication

* Admin login using DummyJSON Auth API
* Authentication managed with NextAuth
* Token stored in Zustand
* Protected dashboard routes
* Auto redirect on login/logout

---

### Users Module

* Users list with:

  * API-side pagination
  * Search functionality
* Responsive UI using MUI
* Single user detail page
* Back navigation

---

### Products Module

* Products displayed in responsive MUI grid
* Pagination
* Search bar
* Category filter dropdown
* Product detail page showing:

  * Images
  * Description
  * Price
  * Rating

---

## State Management (Zustand)

Zustand is used to manage:

* Authentication state
* Users data
* Products data
* Loading and error states

### Why Zustand?

* Minimal boilerplate
* Built-in async actions
* Lightweight and fast
* Ideal for small–medium applications
* Easier than Redux for this use case

---

## Performance & Optimization

* API-side pagination
* Cached list data in Zustand
* `useCallback` and `useMemo` to reduce re-renders
* `React.memo` for optimized components

---

## UI & Responsiveness

* Entire UI built with Material UI
* Fully responsive layouts for:

  * Login page
  * Dashboard
  * Users pages
  * Products pages
* Mobile-friendly design

---

## Project Structure

> The structure for a Next.js App Router project using Zustand and MUI.

```
src/
├── app/
│   ├── page.tsx                # Landing / Home page
│   ├── layout.tsx              # Root layout (Theme + Session)
│   ├── providers.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── dashboard/
│   │   ├── layout.tsx          # Protected layout + Navbar
│   │   ├── page.tsx            # Dashboard overview
│   │   ├── users/
│   │   │   ├── page.tsx        # Users list
│   │   │   └── [id]/page.tsx   # Single user
│   │   └── products/
│   │       ├── page.tsx        # Products list
│   │       └── [id]/page.tsx   # Single product
│   └── api/
│      └── auth/[...nextauth]/route.ts
│
├── components/
│   ├── Navbar.tsx
│   ├── ClientCssBaseline.tsx
│   ├── ProtectedRoute.tsx
│   ├── UserTable.tsx
│   └── ProductCard.tsx
│   
│
├── services/
│   └── api.ts   
│
├── store/
│   ├── authStore.ts
│   ├── userStore.ts
│   ├── dashboard.ts
│   └── productStore.ts
│
├── theme/
│   ├── emotionCache.ts
│   └── muiTheme.ts
│
└── types/
    └── next-auth.d.ts                  
```

### Why this structure is correct

* Clear separation of **routes, components, state, and theme**
* App Router best practices followed
* Scalable and maintainable
* Easy for reviewers to understand

---

## ⚙️ Setup & Installation

### Prerequisites

* Node.js (v16+)
* npm or yarn

### Installation

```bash
git clone https://github.com/vickysrana2-cloud/help-study-abroad.git
cd help-study-abroad
npm install
```

### Run Locally

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Environment Variables

 **No environment variables are required**

* No `.env.local` file
* All APIs are public (DummyJSON)
* Token stored in Zustand only

---

## Final Notes

* Project strictly follows the **Frontend Technical Assessment** instructions
* Code is clean, modular, and reviewer-friendly
* Architecture allows easy future enhancements

---

## Author

**Vicky Rana**
Frontend Developer
GitHub: [https://github.com/vickysrana2-cloud](https://github.com/vickysrana2-cloud)

---
