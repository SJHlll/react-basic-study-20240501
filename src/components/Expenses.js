import React from 'react'
import ExpenseItem from './ExpenseItem';

const Expenses = ({items: expenses}) => {
  return (
    <div className='expenses'>
    <ExpenseItem
    date={expenses[0].date}
    title={expenses[0].title}
    price={expenses[0].price}
    />
    <ExpenseItem
    date={expenses[1].date}
    title={expenses[1].title}
    price={expenses[1].price}
    />
    <ExpenseItem
    date={expenses[2].date}
    title={expenses[2].title}
    price={expenses[2].price}
    />
    </div>
  )
}

export default Expenses;