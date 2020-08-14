import { connect } from "react-redux";
import History from "./History";
import { deleteContentCreator } from '../../../reducer/mainReducer'

const mapStateToProps = (state) => {
   return {
      content: state.content
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      deleteContent: (id) => {
         return dispatch(deleteContentCreator(id))
      }
   }
}

export const HistoryContainer = connect(mapStateToProps, mapDispatchToProps)(History)