import React,{useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalContext';

export function Transactions() {
    const [transaction, setTransaction] = useState("");
    const [transAmount, setTransAmount] = useState("");
    const [checkType, setCheckType] = useState("");

    const {AddTransaction}=useContext(GlobalContext)

    const HandleSubmit=(e)=>{
        e.preventDefault()
        let newTransactions={
            id:Date.now(),
            TransName:transaction,
            checkType,
            Amount:checkType==="Income" ? Math.abs(transAmount):checkType==="Expense" ? -parseInt(transAmount):null
        }
        AddTransaction(newTransactions)
        setTransaction("")
        setTransAmount("")
    }

  return (
    <div className="EnterTransDiv">
    <form onSubmit={HandleSubmit}>
      <input
        type="text"
        required
        placeholder="Transaction name..."
        value={transaction}
        onChange={(e) => setTransaction(e.target.value)}
        id="NameInput"
      />
      <br />
      <input
        type="radio"
        required
        name="TransactionType"
        value="Income"
        onClick={(e) => setCheckType(e.target.value)}
        id="Income"
      />
      <label htmlFor="IcomeInput" id="LabelsTrans">Income</label>
        <input
        type="radio"
        required
        name="TransactionType"
        value="Expense"
        onClick={(e) => setCheckType(e.target.value)}
        id="Expense"
      />
        <label htmlFor="ExpenseInput" id="LabelsTrans">Expense</label>
      <input
        type="text"
        required
        value={transAmount}
        onChange={(e)=>setTransAmount(e.target.value)}
        placeholder="Amount..."
        id="AmountInput"
      />
      <br />
      <button type="submit" id="TransSubmitBtn">
        Save Transaction
      </button>
    </form>
  </div>
  )
}

