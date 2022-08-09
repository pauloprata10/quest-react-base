import React from 'react'
import './button.css'

const sayButtonLabel = (label) => {
  alert(label)
}

const Button = ({ label }) => {
  return (
    <button className="btn" onClick={() => sayButtonLabel(label)}>
      {label}
    </button>
  )
}

Button.defaultProps = {
  label: 'Clique aqui'
}

export { Button }