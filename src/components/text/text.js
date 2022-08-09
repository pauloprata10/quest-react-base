import React from 'react'

const Text = ({ texto, color }) => {
  return <p className="texto" style={{color}}>{texto.toUpperCase()}</p>
}

Text.defaultProps = {
  color: 'red'
}

export { Text }