import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './Components/Context/Context.jsx'
import 'bootstrap/dist/css/bootstrap.css'
createRoot(document.getElementById('root')).render(
  <Context>
    <App />
  </Context>,
)
