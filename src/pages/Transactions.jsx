import { transactions } from "@/data/mockTransactions";
import TransactionList from "./TransactionList";

export default function Transactions() {

  return (
  <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Transactions</h1>
      <TransactionList transactions={transactions} />
    </div>
  );
}
