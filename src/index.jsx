import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
