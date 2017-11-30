/**
 * 处理服务器返回的数据，格式化为标准形式
 */

export function formatMusicData(data) {
  return {
    type: 0,
    id: data.id,
    name: data.name,
    cover: data.al.picUrl,
    artist: data.ar[0].name,
    duration: _.floor(data.dt / 1000)
  }
}
export function formatDjData(data) {
  return {
    type: 1,
    id: data.program.mainSong.id,
    name: data.name,
    cover: data.picUrl,
    artist: data.program.mainSong.artists[0].name,
    duration: _.floor(data.program.duration / 1000)
  }
}