import App from './Components/App'
import './main.scss'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
