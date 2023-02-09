// import './App.css';
import { useState } from 'react';
import Expenses from './components/expenses/Expenses'
import NewExpenses from './components/newExpenses/NewExpenses';

const expenseData = [
  {
    id: 'ell1',
    date: new Date(2022, 3, 22),
    title: 'Car insuranse',
    amount: 200,
  },
  {
    id: 'ell2',
    date: new Date(2024, 5, 22),
    title: 'KinderGarden',
    amount: 100,
  },
  {
    id: 'ell3',
    date: new Date(2023, 11, 22),
    title: 'Utitilties',
    amount: 100,
  },
  {
    id: 'ell4   ',
    date: new Date(2025, 11, 22),
    title: 'Tolet paper',
    amount: 100,
  },
]


function App() {
  const[totalExpenses, setExpenses] = useState(expenseData)

  const getExpenseDataHandler = (liftingData) => {
    setExpenses((prevState) => {
      return [liftingData, ...prevState]
    })
  }

return (
  <div className="App">
    <NewExpenses onGet = {getExpenseDataHandler}/>
  <Expenses expenses={totalExpenses}/>
  </div>
);


}

export default App;
