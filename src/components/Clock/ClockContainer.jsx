import { connect } from "react-redux";
import Clock from "./Clock";

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleBreakChange: (change) => dispatch({ type: "BREAK_CHANGE", change }),
    handleSessionChange: (change) =>
      dispatch({ type: "SESSION_CHANGE", change }),
    handleRefresh: () => dispatch({ type: "REFRESH" }),
    handlePlayPause: ({ isRunning, interval }) => {
      let newInterval = null;

      if (isRunning) {
        clearInterval(interval);
      } else {
        newInterval = setInterval(() => dispatch({ type: "CLOCK_TICK" }), 1000);
      }

      dispatch({ type: "PLAY_PAUSE", interval: newInterval });
    }
  };
};

const ClockContainer = connect(mapStateToProps, mapDispatchToProps)(Clock);

export default ClockContainer;
