# 💰 Finance Dashboard App

A modern finance dashboard built with **React**, **Zustand**, **Tailwind CSS**, **Shadcn/UI**, and **SWR**. Displays mock transaction data, account summaries, and more.

---

## 🚀 Features

### 📊 Transaction Tracking  
View a list of transactions with dynamic filtering options:
- Filter by **Transaction Type** (Income, Expense, All)  
- (Coming soon) **Date Range**
- (Coming soon) **Category**  

Built using Shadcn/UI components like `Select`, `DatePicker`, and `Combobox`.

### 📁 Account Summary Overview  
Displays key financial metrics using reusable Card components:
- Total Income  
- Total Expenses  
- Net Balance  

### 🔄 Data Fetching with SWR  
Mock data integrated via a future-ready SWR structure for scalability.

### 🎨 Styled with TailwindCSS & Shadcn/UI  
Clean, responsive UI with accessible components and utility-first styling.

### 🧠 Global State Management with Zustand  
Manages app-wide state:  
- Transactions  
- Filters  
- Loading/Error handling  

### 🧭 Routing with React Router  
Routes included:
- Dashboard
- Transactions
- Settings

### ✨ Loading Skeletons & Empty State Handling  
Skeleton components for smooth UX and helpful empty-state messages when there's no data.

---

## 🧰 Tech Stack

| Tool         | Purpose                     |
|--------------|-----------------------------|
| React        | UI Framework                |
| Tailwind CSS | Styling                     |
| Zustand      | State Management            |
| SWR          | Data Fetching               |
| Shadcn/UI    | Accessible UI Components    |
| Vite         | Fast dev server and bundler |

---

## 🏛️ Pages

### 🏠 Dashboard  
- Responsive grid layout  
- Summary metrics (Income, Expenses, Balance)  
- Reusable card UI  

### 📃 Transactions  
- Lists transactions using `TransactionItem` and `TransactionList`  
- Filters:
  - ✅ Type: Income, Expense, All  
  - 🕐 Coming soon: Date Range and Category  
- Handles empty and loading states  

### ⚙️ Settings  
- Placeholder UI for future preferences (username, currency, etc.)

---

## 🗂️ Folder Structure
src/ ├── components/ # Reusable UI (Sidebar, Header, Footer, Cards, etc.) ├── pages/ # Route-based pages (Dashboard, Transactions, Settings) ├── data/ # Mock data files (transactions, summaries) ├── store/ # Zustand-based state management ├── hooks/ # Custom hooks (e.g., useSWRData) ├── lib/ # Utility functions ├── services/ # API service layer (mocked) ├── App.jsx # Main routing setup ├── index.css #
