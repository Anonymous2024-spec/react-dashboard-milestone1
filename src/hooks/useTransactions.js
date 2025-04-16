// src/hooks/useTransactions.js
import useSWR from "swr";
import { fetchTransactions } from "@/services/api";

export function useTransactions() {
  const { data, error, isLoading } = useSWR("transactions", fetchTransactions);

  return {
    transactions: data || [],
    loading: isLoading,
    error,
  };
}
