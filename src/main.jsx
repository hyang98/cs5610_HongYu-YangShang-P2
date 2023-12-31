import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.jsx'; 
import Game from './Game.jsx';
import GameRules from './GameRules.jsx';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/game/normal',
    element: <Game difficulty="normal" />
  },
  {
    path: '/game/hard',
    element: <Game difficulty="hard" />
  },
  {
    path: '/gameRules',
    element: <GameRules />
  } 
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
