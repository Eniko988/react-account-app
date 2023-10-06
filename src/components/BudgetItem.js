import React, { useContext } from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { AppContext } from '../context/AppContext'

const BudgetItem = props => {
  const { dispatch } = useContext(AppContext)

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id
    })
  }

  return (
    <li class='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <span class='badge badge-primary badge-pill mr-3'>{props.cost}€</span>
        <MdDeleteForever
          className='btn-delete'
          size='1.5em'
          onClick={handleDeleteExpense}
        />
      </div>
    </li>
  )
}
export default BudgetItem
