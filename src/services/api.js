import { accountSummary, transactions } from "@/data/mockTransactions";
import axios from "axios";

// create the axios instance
const api = axios.create({
  baseURL: "https://api.example.com", // Placeholder for now
  timeout: 5000,
});

// Optional delay to simulate real API
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Get all transactions (using mock data for now) using
export async function WorkspaceTransactions() {
  await delay(500);
  return transactions;
}

//  Get account summary (mock)
export async function WorkspaceSummaryData() {
  await delay(300);
  return accountSummary;
}

// This one for SWR
export async function fetchTransactions() {
  // simulate network delay
  await new Promise((res) => setTimeout(res, 300));
  return transactions;
}

export async function fetchSummary() {
  await new Promise((res) => setTimeout(res, 300));
  return accountSummary;
}

export default api;
