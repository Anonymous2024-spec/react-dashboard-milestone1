import React from "react";
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table";
import { useTransactionsStore } from "@/store/transactionStore";
import TransactionItem from "./TransactionItem";

export default function TransactionList({ transactions }) {
  const { filters } = useTransactionsStore();

  const filteredTransactions = transactions.filter((txn) => {
  // 1. Filter by transaction type
  if (filters.type !== "all" && txn.type !== filters.type) {
    return false;
  }

  // 2. Filter by category
  if (filters.category && filters.category !== "all" && txn.category !== filters.category) {
    return false;
  }

  // 3. Filter by date range
  if (filters.dateRange?.from && filters.dateRange?.to) {
    const txnDate = new Date(txn.date); // Convert transaction date to Date object
    const fromDate = new Date(filters.dateRange.from);
    const toDate = new Date(filters.dateRange.to);

    if (txnDate < fromDate || txnDate > toDate) {
      return false;
    }
  }

  return true; // Otherwise, include this transaction
});


  if (filteredTransactions.length === 0) {
    return <div className="text-center text-gray-500 mt-4">No transactions found.</div>;
  }

  return (
    <div className="w-full border rounded-md overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Date</TableHead>
            <TableHead className="w-[300px]">Description</TableHead>
            <TableHead className="w-[200px]">Category</TableHead>
            <TableHead className="w-[100px] text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.map((txn) => (
            <TransactionItem key={txn.id} {...txn} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
