import React from "react";
import { Card ,CardContent} from "@/components/ui/card";

export default function Dashboard() {

  const SummaryCard = ({ title, amount }) => (
  <Card className="shadow-md rounded-2xl">
    <CardContent className="p-4">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <p className="text-2xl font-bold text-gray-900 mt-2">{amount}</p>
    </CardContent>
  </Card>
);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <SummaryCard title="Total Income" amount="$0.00" />
        <SummaryCard title="Total Expenses" amount="$0.00" />
        <SummaryCard title="Net Balance" amount="$0.00" />
      </div>
    </div>
  );
}
