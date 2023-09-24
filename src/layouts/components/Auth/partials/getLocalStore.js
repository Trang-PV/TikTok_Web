export const IslocalLogin = JSON.parse(localStorage.getItem('isLogin'))

export const setConfigLogin = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
