import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ReactLenis } from "@studio-freight/react-lenis";
import './style/index.scss';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);
