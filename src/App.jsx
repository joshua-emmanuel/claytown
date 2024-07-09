import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { useReducer } from 'react';
// import { CartContext, CartDispatchContext } from './context/CartContext';
import Products from './pages/Products';
import Cart from './pages/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

// const initialCart = [];

// function cartReducer(cart, action) {
//   switch (action) {
//     case 'add': {
//       return [
//         ...cart,
//         {
//           id: action.id,
//           name: action.name,
//           price: action.price,
//           img: action.img,
//         },
//       ];
//     }
//   }
// }

function App() {
  // const [cart, dispatch] = useReducer(cartReducer, initialCart);

  // const addToCart = (product) => {
  //   dispatch({
  //     type: 'add',
  //     id: product.id,
  //     name: product.name,
  //     price: product.price,
  //     img: product.img,
  //   });
  // };

  return <RouterProvider router={router} />;
}

export default App;
