import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
const router = createBrowserRouter([
  {
    path: "/",
    children: [{ path: "/", element: <Main /> }],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
