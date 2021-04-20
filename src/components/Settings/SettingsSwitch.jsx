import { timerTypes } from "../../state/reducer";
import { timerChanges } from "../../state/reducer";
import "./Settings.css";

const SettingsSwitch = (props) => {
  const { type, length, isRunning, handleChange } = props;

  const timerTypeMap = {
    [timerTypes.BREAK]: {
      id: "break",
      title: "Break"
    },
    [timerTypes.SESSION]: {
      id: "session",
      title: "Session"
    }
  };
  const id = timerTypeMap[type].id;
  const title = timerTypeMap[type].title;

  return (
    <div className={id}>
      <p id={`${id}-label`}>{`${title} Length`}</p>
      <button
        id={`${id}-decrement`}
        className="decrement"
        disabled={isRunning}
        onClick={() => handleChange(timerChanges.DECREMENT)}
      >
        <i className="fa fa-arrow-down fa-2x"></i>
      </button>
      <span className="length" id={`${id}-length`}>
        {length}
      </span>
      <button
        id={`${id}-increment`}
        className="increment"
        disabled={isRunning}
        onClick={() => handleChange(timerChanges.INCREMENT)}
      >
        <i className="fa fa-arrow-up fa-2x"></i>
      </button>
    </div>
  );
};

export default SettingsSwitch;
