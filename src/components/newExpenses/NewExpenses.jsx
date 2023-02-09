import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpenses.css'


const NewExpenses =(props) => {

const saveExpenseDataHandler = (expenseData) => {
    props.onGet(expenseData)
}

    return (
        <div className="new-expense">
         <ExpenseForm onSave={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpenses
