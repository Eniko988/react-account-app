import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'

const BudgetTotal = () => {
  const { expenses } = useContext(AppContext)

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost)
  }, 0)

  return (
    <div class='alert alert-warning p-4'>
      <span>Spent so far: {totalExpenses}€</span>
    </div>
  )
}

export default BudgetTotal
