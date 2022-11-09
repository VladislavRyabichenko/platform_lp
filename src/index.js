import React from 'react'
import ReactDOM from 'react-dom'

import 'styles/index.scss'
import App from './app'
import reportWebVitals from './reportWebVitals'

import { ThemeProvider } from 'context/ThemeContext'
import { HubspotProvider } from 'context/HubspotContext'
import { ExpiredProvider } from 'context/Modal/ExpiredContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <HubspotProvider>
        <ExpiredProvider>
          <App />
        </ExpiredProvider>
      </HubspotProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
