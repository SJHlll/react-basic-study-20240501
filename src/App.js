import './App.css';
import React from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  //지출 항목 객체 배열
  const expenses = [
    {
      id: 1,
      title: '바나나',
      price: 3000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      id: 2,
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      id: 3,
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
    {
      id: 4,
      title: '엽기떡볶이',
      price: 18000,
      date: new Date(2024, 6 - 1, 1),
    },
  ];

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (NewExpense) => {
    console.log('App 컴포넌트 응답');
    console.log('newExpense : ', NewExpense);
    expenses.push(NewExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
