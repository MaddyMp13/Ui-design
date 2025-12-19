import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Door from './components/door.jsx'

createRoot(document.getElementById('root')).render(
  < >
    <div className='app'>
      <App />
      <Door />
      <App />
    </div>
  </>
)
