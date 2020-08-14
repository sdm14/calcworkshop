import React from 'react'

const History = (props) => {

   return (
      <section className="history">
         <h3>История расходов</h3>
         <ul className="history__list">

            {props.content.reverse().map(el => {
               return (
                  <li
                     key={el.id}
                     className={el.count.includes('+')
                        ? "history__item history__item-plus"
                        : "history__item  history__item-minus"}
                  >{el.text}
                     <span className="history__money">{el.count + ' Тенге'}</span>
                     <button className="history__delete" onClick={() => props.deleteContent(el.id)}>x</button>
                  </li>
               )
            })}

         </ul>
      </section>
   )
}

export default History