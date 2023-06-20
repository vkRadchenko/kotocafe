import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App'
import { createStore } from 'store/createStore'
import { Provider } from 'react-redux'
import CustomRouter from 'customRouter'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const store = createStore()

root.render(
  <Provider store={store}>
    <CustomRouter>
      <App />
    </CustomRouter>
  </Provider>
)
