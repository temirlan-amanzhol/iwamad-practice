import type { ReactNode } from 'react'
import './Button.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  onClick?: () => void
}

function Button({ children, variant = 'primary', type = 'button', onClick }: ButtonProps) {
  return (
    <button type={type} className={`button button--${variant}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
