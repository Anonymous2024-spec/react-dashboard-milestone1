import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate, formatCurrency } from "@/lib/utils"; 

const TransactionItem = ({ transaction }) => {
  const { id, date, description, category, amount, type } = transaction;

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">{description}</p>
            <div className="flex space-x-4 text-sm text-gray-500">
              <span>{formatDate(date)}</span>
              <span>{category}</span>
            </div>
          </div>
          <div
            className={`font-semibold ${
              type === "income" ? "text-green-600" : "text-red-600"
            }`}
          >
            {type === "income" ? "+" : "-"}
            {formatCurrency(amount)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionItem;