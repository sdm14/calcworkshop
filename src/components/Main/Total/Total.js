import React from 'react'

const Total = (props) => {

   const balance = props.content.map(el => Number(el.count))

   const expense = props.content
      .filter(el => el.count.includes('-'))
      .map(el => Math.abs(Number(el.count)))

   const income = props.content
      .filter(el => el.count.includes('+'))
      .map(el => Number(el.count))


   return (
      <section className="total">
         <header className="total__header">
            <h3>Баланс</h3>
            <p className="total__balance">
               {balance.length > 0 ? `${balance.reduce((a, b) => a + b)} ₽` : '0 ₽'}
            </p>
         </header>
         <div className="total__main">
            <div className="total__main-item total__income">
               <h4>Доходы</h4>
               <p className="total__money total__money-income">
                  {income.length > 0 ? `+${income.reduce((a, b) => a + b)} ₽` : '+0 ₽'}
               </p>
            </div>
            <div className="total__main-item total__expenses">
               <h4>Расходы</h4>
               <p className="total__money total__money-expenses">
                  {expense.length > 0 ? `-${expense.reduce((a, b) => a + b)} ₽` : '-0 ₽'}
               </p>
            </div>
         </div>
      </section>
   )
}

export default Total