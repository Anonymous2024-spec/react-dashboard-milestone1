import React, { useEffect } from "react";
import { useTransactionsStore } from "@/store/transactionStore";
import { useTransactions } from "@/hooks/useTransactions";
import { useSummary } from "@/hooks/useSummary";

export default function Transactions() {
  const {
    transactions,
    loading: transactionsLoading,
    error,
  } = useTransactions();
  const { summary, loading: summaryLoading } = useSummary();

  // useEffect(() => {
  //   fetchData();
  // }, [fetch]);

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <h1 className="text-3xl font-bold p-2">Transaction History</h1>
      {summary && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
            <h2 className="text-gray-500 text-sm">Total Income</h2>
            <p className="text-green-600 font-bold text-xl">
              ${summary.totalIncome}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500">
            <h2 className="text-gray-500 text-sm">Total Expenses</h2>
            <p className="text-red-500 font-bold text-xl">
              ${summary.totalExpenses}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
            <h2 className="text-gray-500 text-sm">Net Balance</h2>
            <p className="text-blue-600 font-bold text-xl">
              ${summary.netBalance}
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h2 className="text-gray-500 text-sm">Savings Progress</h2>
            <div className="flex items-center justify-between">
              <p className="text-yellow-600 font-bold text-xl">
                {summary.savingsGoalProgress}%
              </p>
              <div className="w-full h-2 ml-2 bg-yellow-100 rounded">
                <div
                  className="h-2 bg-yellow-500 rounded"
                  style={{ width: `${summary.savingsGoalProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {transactionsLoading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!transactionsLoading && !error && (
        <div className="flex-1 flex">
          <table className="w-full h-full text-left justify-between border-collapse border border-gray-200">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
              <tr>
                <th className="border px-1 py-1">Date</th>
                <th className="border px-1 py-1">Description</th>
                <th className="border px-1 py-1">Category</th>
                <th className="border px-1 py-1 text-right">Amount</th>
                <th className="border px-1 py-1">Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className={`${
                    tx.type === "income" ? "bg-green-50" : "bg-red-50"
                  } text-sm`}
                >
                  <td className="border px-1 py-1">{tx.date}</td>
                  <td className="border px-1 py-1">{tx.description}</td>
                  <td className="border px-1 py-1">{tx.category}</td>
                  <td className="border px-1 py-1 text-right font-semibold">
                    ${tx.amount}
                  </td>
                  <td className="border px-1 py-1 capitalize">{tx.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
