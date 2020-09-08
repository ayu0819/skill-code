import React from 'react'
import ReactDOM from 'react-dom'

const Welcome = (props) => {
    return(
    <div>Hello{props.name}</div>
    )
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
      <Welcome />,
      document.getElementById('welcome'),
    )
  })

  export default Welcome