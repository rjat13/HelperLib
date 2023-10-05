import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LanguageSwitcher from './LanguageSwitcher'
import { messages } from './lang.config.jsx'
import { IntlProvider } from 'react-intl'
import { Provider, useSelector } from 'react-redux'
import { store } from './store/index.js'

// const selectedLang = localStorage.getItem('_lang') || 'en';
// const currentLang = useSelector(({lang}) => lang)
// console.log("store", store);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <LanguageSwitcher />
      <App />
    </Provider>
  </React.StrictMode>,
)
