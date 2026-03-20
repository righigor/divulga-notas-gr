import App from "@/App";
import NotFound from "@/components/not-found";
import AppLayout from "@/layouts/app-layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "*", element: <NotFound /> }
    ],
  }
])

export function AppRouter() {
  return <RouterProvider router={router} />
}