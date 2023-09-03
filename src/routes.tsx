import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Header } from './Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  }
])

export default function Routes() {
  return (
    <RouterProvider router={router} />
  )
}

