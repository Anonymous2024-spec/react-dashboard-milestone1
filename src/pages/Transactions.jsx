import React from "react";
import { useTransactions } from "@/hooks/useTransactions";
import { Skeleton } from "@/components/ui/skeleton";
import TransactionItem from "./TransactionItem";

const Transactions = () => {
  const { transactions, loading, error } = useTransactions();

  // Render loading state
  if (loading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Transactions</h2>
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <Skeleton className="h-5 w-40 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-6 w-20" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
        <p className="font-medium">Error loading transactions</p>
        <p className="text-sm">Please try refreshing the page</p>
      </div>
    );
  }

  // Render empty state
  if (transactions.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-2">No Transactions Found</h2>
        <p className="text-gray-600">
          You don't have any transactions recorded yet.
        </p>
      </div>
    );
  }

  // Render data state
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default Transactions;