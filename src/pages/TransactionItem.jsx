import React from 'react'

export default function TransactionItem({date, description, category, amount}) {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>
        <p className="font-semibold">{description}</p>
        <p className="text-sm text-gray-500">{category} • {date}</p>
      </div>
      <div className={`font-medium ${amount < 0 ? "text-red-500" : "text-green-500"}`}>
        ${Math.abs(amount).toFixed(2)}
      </div>
    </div>
  )
}
