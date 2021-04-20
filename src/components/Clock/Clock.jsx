import React from "react";
import "./Clock.css";
import Settings from "../Settings/Settings";
import Timer from "../Timer/Timer";
import Controls from "../Controls/Controls";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
  }

  componentDidUpdate() {
    const { minutes, seconds } = this.props.timer;

    if (minutes === 0 && seconds === 0) {
      this.audioRef.current.play();
    }
  }

  pauseAudio() {
    this.audioRef.current.pause();
    this.audioRef.current.currentTime = 0;
  }

  render() {
    const {
      breakLength,
      sessionLength,
      timerType,
      timer,
      countdown,
      handleBreakChange,
      handleSessionChange,
      handleRefresh,
      handlePlayPause
    } = this.props;

    return (
      <div className="container">
        <audio
          id="beep"
          ref={this.audioRef}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
        <div className="title-main">25 + 5 Clock</div>
        <Settings
          breakLength={breakLength}
          sessionLength={sessionLength}
          isRunning={countdown.isRunning}
          handleBreakChange={handleBreakChange}
          handleSessionChange={handleSessionChange}
        />
        <Timer timerType={timerType} timer={timer} />
        <Controls
          handlePlayPause={() => handlePlayPause(countdown)}
          handleRefresh={() => {
            this.pauseAudio();
            handleRefresh();
          }}
        />
      </div>
    );
  }
}

export default Clock;
