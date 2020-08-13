import { connect } from "react-redux";
import Total from "./Total";

const mapStateToProps = (state) => {
   return {
      content: state.content
   }
}

export const TotalContainer = connect(mapStateToProps)(Total)