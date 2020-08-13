import { connect } from 'react-redux'
import Operation from './Operation'
import { updateCountCreator, updateTitleCreator, addIncomeCreator, addExpenseCreator } from '../../../reducer/mainReducer'

const mapStateToProps = (state) => {
   return {
      content: state.content,
      updateCountValue: state.updateCount,
      updateTitleValue: state.updateTitle
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      updateCount: (count) => {
         dispatch(updateCountCreator(count))
      },
      updateTitle: (title) => {
         dispatch(updateTitleCreator(title))
      },
      addIncome: () => {
         dispatch(addIncomeCreator())
      },
      addExpense: () => {
         dispatch(addExpenseCreator())
      }
   }
}

export const OperationContainer = connect(mapStateToProps, mapDispatchToProps)(Operation)