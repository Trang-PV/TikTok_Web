import { useContext, useEffect, useState } from 'react'
import { ModalBodyNameContext } from '~/layouts/components/Header/Header'
import * as authService from '~/services/authService'
import handleSubmit from './HandleLogin'
import handleRegisterValue from './HandleRegister'

function EmailAndPasswordRegisterForm() {
  const value = useContext(ModalBodyNameContext)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  return (
    <>
      <div className="overflow-auto" style={{ flex: '1 1 0%' }}>
        <div className="m-auto w-4/5">
          <h3 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold my-4 mx-auto">Register</h3>

          <form>
            <div className="text-base font-semibold flex justify-between mb-2">{/* <label>Tên đầy đủ</label> */}</div>
            <div className="mb-2">
              <label>Full Name</label>
              <input
                className="rounded text-base h-11 w-full border border-solid border-black/10 bg-black/5 caret-primary"
                style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="VD: Phan Văn Trang"
              />
            </div>
            <div className="mb-2">
              <label>Account</label>
              <input
                className="rounded text-base h-11 w-full border border-solid border-black/10 bg-black/5 caret-primary"
                style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="VD: phanvantrang"
              />
            </div>
            <div className="mb-2">
              <label>Email</label>
              <input
                className="rounded text-base h-11 w-full border border-solid border-black/10 bg-black/5 caret-primary"
                style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="VD: trang_FC@gmail.com"
              />
            </div>
            <div className="mb-2">
              <label>password</label>
              <input
                className="rounded text-base h-11 w-full border border-solid border-black/10 bg-black/5 caret-primary"
                style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="VD: 123456"
              />
            </div>
            <div className="mb-2">
              <label>Repeat password</label>
              <input
                className="rounded text-base h-11 w-full border border-solid border-black/10 bg-black/5 caret-primary"
                style={{ paddingInlineStart: '12px', paddingInlineEnd: '12px' }}
                name="password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                type="password"
                placeholder="VD: 123456"
              />
            </div>
            <a
              href="#"
              className="font-semibold text-xs hover:underline text-black/60"
              onClick={(event) => {
                event.preventDefault()
                // value.handleModalBodyName('reset-password-with-email')
              }}
            >
              Do you have an account?
            </a>
            <button
              className="mt-8 border-none bg-primary text-white text-base leading-5 font-bold font-primary rounded flex items-center justify-center w-full cursor-pointer py-1.5 px-2"
              style={{
                minWidth: '120px',
                minHeight: '46px',
              }}
              onClick={(e) => {
                e.preventDefault()
                handleRegisterValue(
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
                )
                // loginUser()
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EmailAndPasswordRegisterForm
