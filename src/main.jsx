import React from 'react'
import ReactDOM from 'react-dom/client'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'
import filteredGamesReducer from './reducers/filteredGamesReducer'

const store = createStore(filteredGamesReducer)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
