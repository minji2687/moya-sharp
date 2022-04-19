import moment from "moment";
export default function changeTimeUnixToStandard(publishTime: string) {
  const changeTime = moment(publishTime).fromNow(); // 15 minutes ago
  return changeTime;
}
