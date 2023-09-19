import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer.js'
import thunk from 'redux-thunk'
import fbConfig from './config/fbConfig.js'
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
//import 'firebase/functions' // <- needed if using httpsCallable
import {createStore,applyMiddleware,compose} from 'redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
