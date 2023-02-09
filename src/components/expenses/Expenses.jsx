import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from "./ExpensesChart";
import Card from "../../ui/Card";
import'./Expenses.css'
import { useState } from "react";


const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022')

    const onGetFilterDataHandler = (selectedYear) => {
      setSelectedYear(selectedYear)
    }
    
     
    const filteredExpenses = props.expenses.filter((el) => {
        return el.date.getFullYear() === Number(selectedYear)
    }) 

    let expenseContext = <h1 style={{color: 'red'}}>No expense found</h1>
    if (filteredExpenses.length > 0) {
        expenseContext = filteredExpenses.map((el) => {
            return (
                <ExpenseItem
                 key={el.id}
                 title={el.title}
                 date={el.date}
                 amount={el.amount}/>
            )   
        })
    }

    if (selectedYear === 'all') {
        expenseContext = props.expenses.map((el) => {
            return (
                <ExpenseItem
                 key={el.id}
                 title={el.title}
                 date={el.date}
                 amount={el.amount}/>
            )      
        })
    }

    return (
            <Card className='expenses'>
                <ExpensesChart expenses={props.expenses} />
                <ExpenseFilter onGetFilterData={onGetFilterDataHandler}
                 selected={selectedYear}
                 />
                 {expenseContext}
              


             </Card>       
    )
    }

export default Expenses