import React from 'react'

const Operation = (props) => {
   return (
      <section className="operation">
         <h3>Новая операция</h3>

         <label>
            <input
               type="text"
               className="operation__fields operation__name"
               placeholder="Наименование операции"
               value={props.updateTitleValue}
               onChange={(event) => props.updateTitle(event.target.value)}
            />
         </label>

         <label>
            <input
               type="number"
               className="operation__fields operation__amount"
               placeholder="Введите сумму"
               value={props.updateCountValue}
               onChange={event => props.updateCount(Number(event.target.value))}
            />
         </label>

         <div className="operation__btns">
            <button
               type="submit"
               className="operation__btn operation__btn-subtract"
               onClick={props.addExpense}
            >
               РАСХОД
               </button>

            <button
               className="operation__btn operation__btn-add"
               onClick={props.addIncome}
            >
               ДОХОД
            </button>
         </div>
      </section>
   )
}

export default Operation