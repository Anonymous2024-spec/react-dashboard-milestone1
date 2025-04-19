# Finance Dashboard App 💰

A modern finance dashboard built with React, Zustand, Tailwind CSS, Shadcn/UI, and SWR. Displays mock transaction data, account summaries, and more.

## 🚀 Features

- 📊 Transaction tracking with filters
- 📁 Account summary overview
- 🔄 Data fetching using SWR
- 🎨 Fully styled with TailwindCSS & Shadcn/UI
- 🧠 Zustand for global state management
- 🧭 Routing with react-router-dom

🏠 Dashboard
Displays key metrics like Total Income, Total Expenses, and Net Balance using reusable Card components.

Clean grid-based layout for summary widgets.

📃 Transactions
Lists transactions using modular TransactionList and TransactionItem components.

Displays mock data from data/mockTransactions.js.

Handles empty state with conditional rendering.

Future-ready for integration with SWR.

## 🧰 Tech Stack

| Tool         | Purpose                     |
| ------------ | --------------------------- |
| React        | UI Framework                |
| Tailwind CSS | Styling                     |
| Zustand      | State Management            |
| SWR          | Data fetching               |
| Shadcn/UI    | Accessible UI components    |
| Vite         | Fast dev server and bundler |

## 🗂️ Folder Structure

```bash
src/
├── components/        # Page-level components (Dashboard, Transactions, Settings)
├── pages/
├── data/
├── store/             # Zustand store for state
├── hooks/             # SWR-based custom hooks
├── lib/               # Utility functions
├── services/          # API service layer
├── App.jsx            # Main layout with routes
├── index.css          # TailwindCSS + theme setup
```
