import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles/style.scss"
import { store } from './redux/storeConfig/store'
import { Provider } from 'react-redux'
// ** Toast
import { Toaster } from 'react-hot-toast'
import { ConfigProvider } from 'antd'
import viVN from 'antd/locale/vi_VN'

// Theme antd đồng bộ với nhận diện thương hiệu (đen - trắng, font Mulish)
const antdTheme = {
  token: {
    colorPrimary: '#000000',
    colorLink: '#000000',
    fontFamily: '"Mulish", "Helvetica Neue", Arial, sans-serif',
    borderRadius: 6,
  },
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={antdTheme} locale={viVN}>
        <App />
      </ConfigProvider>
      <Toaster position="top-right" toastOptions={{ className: 'react-hot-toast' }} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
