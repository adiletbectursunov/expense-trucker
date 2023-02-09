import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'


function ExpenseItem(props) {
    let title = props.title
    const expenseAmount = props.amount

    return (
    <div className='expense-item'>
     <ExpenseDate expenseDate ={props.date}/>
    <div className='expense-item__description'></div>
    <h2>{title}</h2>
    <div className='expense-item__price'>{`$ ${expenseAmount}`}</div>
       </div>
    )   
}

export default ExpenseItem


