import React from 'react'
import ReactDOM from 'react-dom/client'

function Helloworld() {
  return(
    <div>Hello</div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Helloworld />
  </React.StrictMode>,
)
