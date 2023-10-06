import React, { useContext } from 'react'
import BudgetItem from './BudgetItem'
import { AppContext } from '../context/AppContext'

const BudgetList = () => {
  const { expenses } = useContext(AppContext)

  return (
    <ul class='list-group'>
      {expenses.map(expense => (
        <BudgetItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  )
}

export default BudgetList
