import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useSummary } from "@/hooks/useSummary";
import IncomeVsExpensesChart from "@/components/IncomeVsExpensesChart"; 
import ExpensesByCategoryChart from "@/components/ExpensesByCategoryChart";
import { transactions } from "@/data/mockTransactions";

const Dashboard = () => {
  const { summary, loading, error } = useSummary();

  // Render loading states for the cards
  if (loading) {
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((index) => (
          <Card key={index} className="w-full">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <Skeleton className="h-4 w-24" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-10 w-20 mb-2" />
              <Skeleton className="h-4 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="w-full bg-red-50 border border-red-200 text-red-800 rounded-md p-4">
        <p className="font-medium">Error loading summary data</p>
        <p className="text-sm">Please try refreshing the page</p>
      </div>
    );
  }

  // Render data state
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Existing summary cards */}
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Income</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${summary?.totalIncome || 0}</div>
          <p className="text-xs text-muted-foreground">
            All income for current period
          </p>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${summary?.totalExpenses || 0}</div>
          <p className="text-xs text-muted-foreground">
            All expenses for current period
          </p>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Net Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${summary?.netBalance || 0}</div>
          <p className="text-xs text-muted-foreground">
            Current net balance status
          </p>
        </CardContent>
      </Card>

      {/* Chart to display Total Income vs Total Expenses dynamically */}
      <Card className="w-full col-span-3 mt-8">
        <CardHeader>
          <CardTitle className="text-sm font-medium">Income vs Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <IncomeVsExpensesChart 
            totalIncome={summary?.totalIncome || 0} 
            totalExpenses={summary?.totalExpenses || 0} 
          />
          <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Expenses by Category</h2>
          <ExpensesByCategoryChart transactions={transactions} />
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
