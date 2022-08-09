import React from 'react'

const Text = ({ texto }) => {
  return <p style={{color: 'red'}}>{texto.toUpperCase()}</p>
}

export { Text }