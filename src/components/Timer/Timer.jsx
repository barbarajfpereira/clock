import "./Timer.css";
import { timerTypes } from "../../state/reducer";

const Timer = (props) => {
  const { timerType, timer } = props;

  const timerLabelMap = {
    [timerTypes.SESSION]: "Session",
    [timerTypes.BREAK]: "Break"
  };

  const timerLabel = timerLabelMap[timerType];

  const pad = (number) => number.toString().padStart(2, "0");

  const timerDisplay = `${pad(timer.minutes)}:${pad(timer.seconds)}`;

  return (
    <div className={`timer ${timer.minutes === 0 ? "red" : ""}`}>
      <p id="timer-label" className="timer-label">
        {timerLabel}
      </p>
      <div className="timer-display" id="time-left">
        {timerDisplay}
      </div>
    </div>
  );
};

export default Timer;
