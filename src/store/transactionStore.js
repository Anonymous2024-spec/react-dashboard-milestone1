import { WorkspaceSummaryData, WorkspaceTransactions } from "@/services/api";
import { create } from "zustand";

export const useTransactionsStore = create((set) => ({
  transactions: [],
  filters: {
    dateRange: {   
      from: null,
      to: null,
    },
    category: "all",
    type: "all",
  },
  loading: false,
  error: null,

  // Setter functions
  setFilters: (filters) => set({ filters }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setTransactions: (transactions) => set({ transactions }),
  setSummary: (summary) => set({ summary }),

  // New better actions (optional for cleaner updating)
  setType: (type) => set((state) => ({
    filters: { ...state.filters, type },
  })),
  setCategory: (category) => set((state) => ({
    filters: { ...state.filters, category },
  })),
  setDateRange: (dateRange) => set((state) => ({
    filters: { ...state.filters, dateRange },
  })),

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

