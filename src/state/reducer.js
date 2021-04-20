const timerChanges = {
  DECREMENT: "DECREMENT",
  INCREMENT: "INCREMENT"
};

const timerTypes = {
  BREAK: "BREAK",
  SESSION: "SESSION"
};

const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timerType: timerTypes.SESSION,
  timer: {
    minutes: 25,
    seconds: 0
  },
  countdown: {
    isRunning: false,
    interval: null
  }
};

const getChangedLength = (length, action) => {
  if (length === 1 || length === 60) {
    return length;
  }

  return action.change === timerChanges.INCREMENT ? length + 1 : length - 1;
};

const getChangedTimer = (timer, timerType, newLength, action) => {
  if (!action.type.includes(timerType)) {
    return timer;
  }

  return { minutes: newLength, seconds: 0 };
};

const getTickTimer = ({ minutes, seconds }) => {
  return seconds === 0
    ? {
        minutes: minutes - 1,
        seconds: 59
      }
    : {
        minutes: minutes,
        seconds: seconds - 1
      };
};

const getSwitchTimer = ({ seconds }, timerType, breakLength, sessionLength) => {
  return {
    minutes: timerType === timerTypes.BREAK ? sessionLength : breakLength,
    seconds
  };
};

const getSwitchTimerType = (timerType) => {
  return timerType === timerTypes.BREAK ? timerTypes.SESSION : timerTypes.BREAK;
};

const reducer = (state = initialState, action) => {
  const { breakLength, sessionLength, timerType, timer, countdown } = state;

  switch (action.type) {
    case "BREAK_CHANGE": {
      const newBreakLength = getChangedLength(breakLength, action);
      const newTimer = getChangedTimer(
        timer,
        timerType,
        newBreakLength,
        action
      );

      return {
        ...state,
        breakLength: newBreakLength,
        timer: newTimer
      };
    }

    case "SESSION_CHANGE": {
      const newSessionLength = getChangedLength(sessionLength, action);
      const newTimer = getChangedTimer(
        timer,
        timerType,
        newSessionLength,
        action
      );

      return {
        ...state,
        sessionLength: newSessionLength,
        timer: newTimer
      };
    }

    case "PLAY_PAUSE":
      return {
        ...state,
        countdown: {
          isRunning: !countdown.isRunning,
          interval: action.interval
        }
      };

    case "REFRESH":
      clearInterval(countdown.interval);
      return initialState;

    case "CLOCK_TICK": {
      const { minutes, seconds } = timer;

      const shouldSwitch = minutes === 0 && seconds === 0;

      const newTimer = shouldSwitch
        ? getSwitchTimer(timer, timerType, breakLength, sessionLength)
        : getTickTimer(timer);

      const newTimerType = shouldSwitch
        ? getSwitchTimerType(timerType)
        : timerType;

      return {
        ...state,
        timer: newTimer,
        timerType: newTimerType
      };
    }

    default:
      return state;
  }
};

export { timerChanges, timerTypes };

export default reducer;
