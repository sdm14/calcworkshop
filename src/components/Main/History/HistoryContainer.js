import { connect } from "react-redux";
import History from "./History";

const mapStateToProps = (state) => {
   return {
      content: state.content
   }
}

export const HistoryContainer = connect(mapStateToProps, null)(History)