import { IncrementAction } from "../action"

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      increment: () => dispatch(IncrementAction()),
     
    }
  }

  export default mapDispatchToProps;