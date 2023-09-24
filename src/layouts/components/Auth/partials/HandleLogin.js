import * as getLogin from '~/layouts/components/Auth/partials/getLocalStore'

const handleSubmit = (username, password, setUsername, setPassword) => {
  const acount = JSON.parse(localStorage.getItem('Acount')) || 0
  console.log(acount)
  //   lặp lại check dữ liệu tài khoản
  for (let i = 0; i < acount.length || 0; i++) {
    // if (username === acount[i].username || password === acount[i].password) {
    if (username === acount[i].email || (username === acount[i].taikhoan && password === acount[i].password)) {
      var islogin = !getLogin.IslocalLogin
      getLogin.setConfigLogin('isLogin', islogin)
      // showSuccesLogin.classList.add('active')
      // showSuccesLoginIcon.classList.add('active')
      setTimeout(() => {
        //   handleCloseLogin()
        window.location.reload()
      }, 0)
    }
  }
  //   kiểm tra xem đã đăng nhập đúng chưa, nếu sai thì show toast
  if (!islogin) {
    // showErrorLogin.classList.add('active')
    setUsername('')
    setPassword('')
    alert('Tài khoản hoặc mật khẩu không chính xác!')
  }
}

// xử lý đóng thông báo đăng nhập sai
const handleCloseError = () => {
  const showErrorLogin = document.querySelector('.login__notAccount')
  showErrorLogin.classList.remove('active')
}
export default handleSubmit
