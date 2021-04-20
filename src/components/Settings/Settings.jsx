import "./Settings.css";
import { timerTypes } from "../../state/reducer";
import SettingsSwitch from "./SettingsSwitch";

const Settings = (props) => {
  const {
    breakLength,
    sessionLength,
    isRunning,
    handleBreakChange,
    handleSessionChange
  } = props;

  return (
    <div className="settings">
      <SettingsSwitch
        type={timerTypes.BREAK}
        length={breakLength}
        isRunning={isRunning}
        handleChange={handleBreakChange}
      />
      <SettingsSwitch
        type={timerTypes.SESSION}
        length={sessionLength}
        isRunning={isRunning}
        handleChange={handleSessionChange}
      />
    </div>
  );
};

export default Settings;
