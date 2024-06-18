import { FaPlayCircle, FaRegPauseCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.id === song.id ? (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  ) : (
    <FaRegPauseCircle
      size={35}
      className="text-gray-300"
      onClick={handlePause}
    />
  );

export default PlayPause;
