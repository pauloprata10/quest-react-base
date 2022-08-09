import React from 'react'
import './button.css'

const sayButtonLabel = label => {
  alert('A label desse botão é Baixar CV')
}

const Button = ({ label }) => (
  <button label="CV" className="btn" onClick={() => sayButtonLabel(label)}>
    {label}
  </button>
)

Button.defaultProps = {
  label: 'Baixar CV'
}

export { Button }