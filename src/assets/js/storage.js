export default {
  save(id, value) {
    window.localStorage.setItem(id, value);
  },
  get(id) {
    return window.localStorage.getItem(id);
  }
}