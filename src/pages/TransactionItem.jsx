import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatDate, formatCurrency } from "@/lib/utils";

const TransactionItem = ({ transaction }) => {
  const { date, description, category, amount, type } = transaction;

  return (
    <TableRow>
      <TableCell>
        <div className="font-medium">{description}</div>
        <div className="text-sm text-gray-500">{category}</div>
      </TableCell>
      <TableCell>{formatDate(date)}</TableCell>
      <TableCell className={`text-right font-semibold ${type === "income" ? "text-green-600" : "text-red-600"}`}>
        {type === "income" ? "+" : "-"}
        {formatCurrency(amount)}
      </TableCell>
    </TableRow>
  );
};

export default TransactionItem;
