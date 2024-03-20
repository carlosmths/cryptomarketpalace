import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { RouterConfig } from 'router/RouterConfig';

function App() {
  return <RouterProvider router={RouterConfig} />;
}

export default App;
