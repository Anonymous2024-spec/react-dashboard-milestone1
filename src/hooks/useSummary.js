import useSWR from "swr";
import { fetchSummary } from "@/services/api";

export function useSummary() {
  const { data, error, isLoading } = useSWR("summary", fetchSummary);

  return {
    summary: data || null,
    loading: isLoading,
    error,
  };
}
