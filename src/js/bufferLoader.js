let axios = require('axios');

export default class {

  constructor(context, url, callback) {
    this.context = context;
    this.url = url;
    this.onload = callback;
  }

  loadBuffer(url) {
    let loader = this;
    axios({
      method: 'get',
      url: url,
      responseType: 'arraybuffer'
    }).then(res => {
      loader.context.decodeAudioData(res, buffer => {
        if (!buffer) {
          throw new Error("无法解码该类型文件");
        }
        loader.onload(buffer);
        console.log(buffer);
      }, err => {
        throw new Error("解码错误");
      })
    }).catch(err => {
      throw new Error(err.name + ':' + err.message);
    });
  }

  load() {
    this.loadBuffer(this.url);
  }
}
