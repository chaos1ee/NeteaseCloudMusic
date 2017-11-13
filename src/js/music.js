let MusicPlayer = (function () {
  let Player;

  function init() {
    // 私有方法与属性

    return {
      // 公有方法和属性
      play() {

      },
      pause() {

      }
    }
  }

  return {
    create() {
      return Player ? Player || init();
    }
  }
})();
