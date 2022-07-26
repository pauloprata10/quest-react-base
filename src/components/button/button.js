import React from 'react'
import './button.css'

const sayQuest = () => {
  alert('Desafio 2 da Quest React Base')
}

const Button = props => {
  return (
    <button className="btn" onClick={sayQuest}>
      {props.label}
    </button>
  )
}

Button.defaultProps = {
  label: 'Clique aqui'
}

export default Button
