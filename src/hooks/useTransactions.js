import useSWR from "swr";
import { fetchTransactions } from "@/services/api";
import { useTransactionsStore } from "@/store/transactionStore";

export function useTransactions() {
  // 1. Get filters from Zustand store
  const filters = useTransactionsStore((state) => state.filters);

  // 2. Use filters in SWR key
  const { data, error, isLoading } = useSWR(
    ["transactions", filters], 
    () => fetchTransactions(filters) 
  );

  return {
    transactions: data || [],
    loading: isLoading,
    error,
  };
}
