import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <footer className="footer ">
        <div className="text-center background-dark" >
          <span className="text-muted">made with <i className="bi bi-heart-fill text-danger"></i> by{" "}
        <a href="https://github.com/grivdm">grivdm</a></span>
        </div>
      </footer>
    </Provider>
  </React.StrictMode>
);

