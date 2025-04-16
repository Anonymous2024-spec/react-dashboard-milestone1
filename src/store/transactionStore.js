import { transactions, accountSummary } from "@/data/mockTransactions";
import { WorkspaceSummaryData, WorkspaceTransactions } from "@/services/api";
import { create } from "zustand";

export const useTransactionsStore = create((set) => ({
  transactions: [],
  filters: {
    dateRange: null,
    category: null,
  },
  loading: false,
  error: null,

  // Setter functions
  setFilters: (filters) => set({ filters }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setTransactions: (transactions) => set({ transactions }),
  setSummary: (summary) => set({ summary }),

  // fetch from the api layer service
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const [txtData, summaryData] = await Promise.all([
        WorkspaceTransactions(),
        WorkspaceSummaryData(),
      ]);
      set({ transactions: txtData, summary: summaryData });
    } catch (err) {
      set({ error: "Failed to load data." });
      console.log(err);
    } finally {
      set({ loading: false });
    }
  },
}));
