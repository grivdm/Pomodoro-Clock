import moment from "moment";
import "moment-duration-format";

const formatTime = (timeString, Tformat = "mm:ss") => {
  const duration = moment.duration(timeString, "minutes");

  return `${duration.format(Tformat , { trim: false })}`;
};

export default formatTime;
