const ACOUNTS = JSON.parse(localStorage.getItem('Acount')) || []

const handleRegisterValue = (
  fullName,
  username,
  email,
  password,
  repeatPassword,
  setFullName,
  setUsername,
  setEmail,
  setPassword,
  setRepeatPassword,
) => {
  if (fullName === '' || username === '' || email === '' || password === '' || repeatPassword === '') {
    alert('Vui lòng nhập đầy đủ')
  } else if (password.length < 6) {
    alert('Vui lòng nhập Mật Khẩu lớn hơn 6 kí tự !')
    setPassword('')
    setRepeatPassword('')
  } else if (password != repeatPassword) {
    alert('Mật khẩu không trùng khớp, vui lòng nhập lại!')
    setPassword('')
    setRepeatPassword('')
  } else {
    // nhận các dữ liệu vào abject
    const account = {
      id: ACOUNTS.length + 1,
      fullname: fullName,
      taikhoan: username,
      email: email,
      password: password,
      repeatPassword: repeatPassword,
    }

    // thêm các dữ liệu đã nhập vào array ACOUNTS
    ACOUNTS.push(account)

    // Lưu trữ tài khoản trên localStorage
    localStorage.setItem('Acount', JSON.stringify(ACOUNTS))

    alert('Đăng Kí Tài Khoản Thành Công!')
    window.location.reload()
    // event.preventDefault()
    // value.handleModalBodyName('login-with-email')
    setTimeout(() => {
      // eslint-disable-next-line no-undef
      //   loginUser()
    }, 2000)
  }
}
// xử lý đóng thông báo đăng nhập sai
const handleCloseError = () => {
  const showErrorLogin = document.querySelector('.login__notAccount')
  showErrorLogin.classList.remove('active')
}

export default handleRegisterValue
