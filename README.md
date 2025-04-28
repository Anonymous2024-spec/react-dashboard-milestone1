Finance Dashboard App 💰
A modern finance dashboard built with React, Zustand, Tailwind CSS, Shadcn/UI, and SWR. Displays mock transaction data, account summaries, and more.

🚀 Features
📊 Transaction Tracking
View a list of transactions with dynamic filtering options (by type, date, category).

🧹 Advanced Filters
Filter transactions using:

Transaction Type (Income, Expense, All)

(Coming soon) Date Range

(Coming soon) Category Built with reusable Select, DatePicker, and Combobox components from Shadcn/UI.

📁 Account Summary Overview
Displays key metrics like Total Income, Total Expenses, Net Balance using reusable Card components.

🔄 Data Fetching with SWR
Mock data integration with future-ready SWR fetching structure.

🎨 Styled with TailwindCSS & Shadcn/UI
Professional responsive UI with clean components.

🧠 Global State Management with Zustand
Centralized state for transactions, filters, loading and error handling.

🧭 Routing with react-router-dom
Dashboard, Transactions, and Settings pages.

✨ Loading Skeletons & Empty State Handling
Beautiful skeleton UI for loading states, and clear messaging when no data is available.

🧰 Tech Stack

Tool | Purpose
React | UI Framework
Tailwind CSS | Styling
Zustand | State Management
SWR | Data fetching
Shadcn/UI | Accessible UI components
Vite | Fast dev server and bundler


🏛️ Pages
🏠 Dashboard
Displays summary widgets in a responsive grid.

Metrics: Total Income, Total Expenses, Net Balance.

Built with reusable Card components.

📃 Transactions
Lists all transactions using modular TransactionList and TransactionItem components.

Filter by Transaction Type (Income, Expense, All).

(Coming soon) Filter by Date Range and Category.

Displays mock data from data/mockTransactions.js.

Handles empty states gracefully.

⚙️ Settings
Placeholder page for future settings integration.

🗂️ Folder Structure
src/
├── components/        # Reusable components (Sidebar, Header, Footer, TransactionItem, TransactionList)
├── pages/             # Page components (Dashboard, Transactions, Settings)
├── data/              # Mock data (transactions, summaries)
├── store/             # Zustand store (state management)
├── hooks/             # SWR-based custom hooks
├── lib/               # Utility functions
├── services/          # API service layer (mock services for now)
├── App.jsx            # Main application layout with routes
├── index.css          # TailwindCSS + Theme setup
