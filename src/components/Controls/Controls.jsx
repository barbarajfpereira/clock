const Controls = (props) => {
  const { handlePlayPause, handleRefresh } = props;

  return (
    <div className="controls">
      <button id="start_stop" className="play-pause" onClick={handlePlayPause}>
        <i className="fa fa-play fa-2x"></i>
        <i className="fa fa-pause fa-2x"></i>
      </button>
      <button id="reset" className="refresh" onClick={handleRefresh}>
        <i className="fa fa-refresh fa-2x"></i>
      </button>
    </div>
  );
};
export default Controls;
