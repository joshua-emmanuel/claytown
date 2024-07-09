import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
