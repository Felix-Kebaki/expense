import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "../context/GlobalContext";

export function History() {
  const { transaction ,DeleteTransaction} = useContext(GlobalContext);
  
  return (
    <section className="HistoryMainDiv">
      <p id="HistortTittle">History</p>
      {transaction.length>0 ?
        transaction.map((trans) => (
          <div key={trans.id} className={trans.checkType==="Income" ? "EachHistoryWrapper green" :trans.checkType==="Expense"? "EachHistoryWrapper red":null}>
            <p>{trans.TransName}</p>
            <p>KSH {Math.abs(trans.Amount)}</p>
            <div className="BinDiv">
              <FontAwesomeIcon icon={faTrashCan} id="TrashHistory" onClick={()=>DeleteTransaction(trans.id)}/>
            </div>
          </div>
        )):
        <p style={{color:"white"}}>No transaction..</p>
        }
    </section>
  );
}
