import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import appRouter from './routes.jsx'
import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRouter} />
)
