import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { formatDate, formatCurrency } from "@/lib/utils";

const TransactionItem = ({ date, description, category, amount, type }) => {
  return (
    <TableRow>
      <TableCell>{formatDate(date)}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell className={`text-right font-semibold ${type === "income" ? "text-green-600" : "text-red-600"}`}>
        {type === "income" ? "+" : "-"}
        {formatCurrency(amount)}
      </TableCell>
    </TableRow>
  );
};

export default TransactionItem;
