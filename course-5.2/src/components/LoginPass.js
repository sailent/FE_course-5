import { useState } from 'react'

export default function LoginPass() {
  const [message, setMessage] = useState('')
  const [message2, setMessage2] = useState('')

  const emailRegex = /\S+@\S+\.\S+/

  const validateEmail = (event) => {
    const email = event.target.value
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email!')
    } else setMessage('')
  }
  const validatePass = (event) => {
    const pass = event.target.value.length
    if (pass < 6) {
      setMessage2('Please enter a pass longer than 6 symbols')
    } else setMessage2('')
  }

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        onBlur={validateEmail}
      />
      <div>{message}</div>

      <input
        type="password"
        placeholder="Enter your password"
        onBlur={validatePass}
      />
      <div>{message2}</div>
    </div>
  )
}
