import React from 'react'
import TransactionItem from './TransactionItem';

export default function TransactionList({transactions}) {
     if (!transactions || transactions.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No transactions to display.</p>;
  }
  return (
  
    <div className="divide-y rounded-md border">
      {transactions.map((txn) => (
        <TransactionItem
          key={txn.id}
          date={txn.date}
          description={txn.description}
          category={txn.category}
          amount={txn.amount}
        />
      ))}
    </div>
  )
}
