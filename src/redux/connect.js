const state = [];
// This function maps the Redux state to component props
export const mapStateToProps = (state) => {
  return {
    messages: state,
  };
};
