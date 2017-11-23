export default function scroll() {
  // 歌曲栏高度(px)
  const WH = 260;
  // 滑块高度(px)
  const BH = 42;
  let top1 = 0;
  let top2 = 0;

  return function (e, el, step, lines, bar) {
    let step2 = (WH - BH) / (lines - WH / step);
    let dir = e.deltaY > 0 ? "down" : "up";
    if (dir == 'down' && top1 <= 0) {
      if (top1 <= WH - step * (lines - 1)) {
        top1 = WH - step * lines;
        top2 = WH - BH;
      } else {
        top1 -= step;
        top2 += step2;
      }
      el.style.top = top1 + 'px';
      bar.style.top = top2 + 'px';
    }

    if (dir == "up" && top1 >= WH - step * lines) {
      if (top1 >= 0) {
        top1 = 0;
        top2 = 0;
      } else {
        top1 += step;
        top2 -= step2;
      }
      el.style.top = top1 + 'px';
      bar.style.top = top2 + 'px';
    }
  }
}