// src/components/IncomeVsExpensesChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; // ✅ Correct import from 'recharts'

const IncomeVsExpensesChart = ({ totalIncome, totalExpenses }) => {
  const data = [
    { name: 'Income', value: totalIncome },
    { name: 'Expenses', value: totalExpenses },
  ];

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#4C9BFD" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeVsExpensesChart;
