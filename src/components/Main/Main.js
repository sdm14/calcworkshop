import React from 'react'
import { OperationContainer } from './Operation/OperationContainer'
import { HistoryContainer } from './History/HistoryContainer'
import { TotalContainer } from './Total/TotalContainer'

const Main = () => {
   return (
      <div className="container">
         <TotalContainer />
         <HistoryContainer />
         <OperationContainer />
      </div>
   )
}

export default Main