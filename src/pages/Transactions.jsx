import React from "react";
import { useState } from "react";
import { useTransactions } from "@/hooks/useTransactions";
import { useTransactionsStore } from "@/store/transactionStore";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import TransactionList from "./TransactionList";

const Transactions = () => {
  const { transactions, loading, error } = useTransactions();
const { filters, setFilters } = useTransactionsStore();

   // Local component state for filter values
  const [localFilters, setLocalFilters] = useState({
    type: filters.type,
    category: filters.category,
    dateRange: filters.dateRange,
  });

  // Get unique categories dynamically
  const categories = [...new Set(transactions.map((txn) => txn.category))];

  // Handle filter value changes
  const handleTypeChange = (value) => {
    setLocalFilters((prevState) => ({ ...prevState, type: value }));
  };

  const handleCategoryChange = (value) => {
    setLocalFilters((prevState) => ({ ...prevState, category: value }));
  };

  const handleDateRangeChange = (range) => {
    setLocalFilters((prevState) => ({ ...prevState, dateRange: range }));
  };

  // Commit the local state to Zustand store (on change or on "Apply Filters")
  const applyFilters = () => {
    setFilters(localFilters);
  };
if (loading) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-6">Transactions</h2>
        <div className="w-full border rounded-md overflow-hidden p-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
        <p className="font-medium">Error loading transactions</p>
        <p className="text-sm">Please try refreshing the page</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Transactions</h2>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-6 bg-white p-4 rounded-md shadow-sm">
        {/* Transaction Type */}
        <div className="w-48">
          <Select onValueChange={handleTypeChange} value={localFilters.type}>
            <SelectTrigger>
              <SelectValue placeholder="Transaction Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category */}
        <div className="w-48">
          <Select onValueChange={handleCategoryChange} value={localFilters.category}>
            <SelectTrigger>
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Range */}
        <div className="w-64">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !localFilters.dateRange?.from && "text-muted-foreground"
                )}
              >
                {localFilters.dateRange?.from ? (
                  localFilters.dateRange.to ? (
                    <>
                      {localFilters.dateRange.from.toLocaleDateString()} - {localFilters.dateRange.to.toLocaleDateString()}
                    </>
                  ) : (
                    localFilters.dateRange.from.toLocaleDateString()
                  )
                ) : (
                  "Pick a date range"
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                selected={localFilters.dateRange}
                onSelect={handleDateRangeChange}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="flex justify-end mb-6">
        <Button onClick={applyFilters}>Apply Filters</Button>
      </div>

      {/* Transaction List */}
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default Transactions;
