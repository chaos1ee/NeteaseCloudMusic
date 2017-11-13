let MusicPlayer = (function () {
  let player;

  function Init(list) {
    // 私有方法与属性

    this.list = list || {};

    this.audio = new Audio();
    this.audio.controls = false;
    this.audio.preload = true;

    let index = 0;


    _getMusicId(index) {

    }
    return {
      // 公有方法和属性
      play() {

      },
      pause() {

      }
    }
  }

  return {
    create(list) {
      return player ? player || new Init(list);
    }
  }
})();
