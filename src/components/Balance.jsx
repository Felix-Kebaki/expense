import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function Balance() {

    const {transaction}=useContext(GlobalContext)

    const amount=transaction.map(trans=> trans.Amount)
    const total=amount.reduce((acc,red)=> (acc+=red),0).toFixed(2)
    const Income=amount.filter(item=> item>0).reduce((acc,red)=> (acc+=red),0).toFixed(2)
    const Expense=amount.filter(item=> item<0).reduce((acc,red)=> (acc+=red),0)
  return (
    <div>
      <p id="YourBalanceTittle">Your Balance(Ksh)</p>
      <p id="Balance">{total}</p>
      <div className="ExpIncomeDiv">
        <div className="EachDiv">
          <p>INCOME</p>
          <p id="Income">Ksh {Income}</p>
        </div>
        <div className="VerticalLine"></div>
        <div className="EachDiv">
          <p>EXPENSE</p>
          <p id="Expense">Ksh {Math.abs(Expense).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
