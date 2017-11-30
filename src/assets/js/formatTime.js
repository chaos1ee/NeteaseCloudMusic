export default function format(time) {
  let m = _.floor(_.floor(time) / 60);
  let s = _.floor(_.floor(time) % 60);
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  return m + ":" + s;
}